import "./registered-files"
import PDFDocument from "pdfkit";
import blobStream from "blob-stream";
// import texToSvg from "./TexToSvg";
import SVGtoPDF from "svg-to-pdfkit";
import XmlParser from "react-xml-parser";
import {axiosInstanceNoAuth} from "./axiosAPI";
import { saveAs } from 'file-saver';
// const splitLines = (parsedText, doc, width) => {};
// const printPartWithBreak = (part, doc) => {};
// const getStringSize = (text, doc) => {};
import "@babel/polyfill";
const texToSvg= async (latex, onEnd) => {
  let r = await axiosInstanceNoAuth.post(`/latex/svg/`, {
    latex: latex,
  });
  let data = r.data;
  return data.join("");
};
const drawCircle = (doc, x, y) => {
  doc.circle(x, y, 3);
  doc.stroke();
};
const moveCursorIfNeeded = (crs,distance,maxX = 595 - 72, downDistance = 35)=>{
  if (crs.x+distance<=maxX){
    return {
      x:crs.x,
      y:crs.y,
    }
  }
  return {
    x:72,
    y:crs.y+downDistance
  }
}
const getSvgSize = (svg) => {
  let parsedSvg = new XmlParser().parseFromString(svg);
  console.log("parsedSvg", parsedSvg);
  return { x: 100, y: 20 };
};
const addCursor = (pos1, pos2, maxX = 595 - 72) => {
  return {
    x: Math.floor(pos1.x + pos2.x),
    y: Math.floor(pos1.y + pos2.y),
  };
  // return {x:10,y:10}
};
const moveCursorRight = (crs, distance, maxX = 595 - 72, downDistance = 35) => {
  console.log("distance", distance);
  if (crs.x + distance <= maxX) {
    return { x: crs.x + distance, y: crs.y };
  } else return { x: 72, y: crs.y + 20 };
};
const getCursorPos = (doc) => {
  return { x: doc.x, y: doc.y };
};
const parseTaskText = async (text) => {
  const re = /\$\{[^\$]*\}\$/g;
  let match = null;
  let taskTextParsed = [];
  let taskTextParsedIndex = 0;
  while ((match = re.exec(text)) != null) {
    // console.log(match);
    if (taskTextParsedIndex < match.index) {
      taskTextParsed.push({
        type: "text",
        text: text.substring(taskTextParsedIndex, match.index),
      });
    }
    let toPush = {
      type: "Latex",
      text: match[0].slice(2, -2),
      svg: await texToSvg(match[0].slice(2, -2)),
    };
    taskTextParsed.push(toPush);
    taskTextParsedIndex = match.index + match[0].length;
  }
  if (taskTextParsedIndex < text.length - 1) {
    taskTextParsed.push({
      type: "text",
      text: text.substring(taskTextParsedIndex, text.length),
    });
  }
  return taskTextParsed;
};
const parseTask = async (task) => {
  task.parsedText = await parseTaskText(task.text);
  let currentDataSet = task.currentDataSet;
  console.log("currentDataSet", currentDataSet);
  let parsedAnswers = await Promise.all(
    currentDataSet.examAnswers.map(async (answer) => {
      console.log("answer map", answer);
      const source = answer.isCorrect
        ? currentDataSet.answers[0].correctans
        : currentDataSet.answers[0].allanswers;
      return await parseTaskText(source[answer.index]);
    })
  );
  task.parsedAnswers = parsedAnswers;
  return task;
};
const parseTasks = async (tasks) => {
  tasks = tasks.map((task) => parseTask(task));
  return await Promise.all(tasks);
};
const parseExamData = async (exam) => {
  let tasks = exam.tasks;
  let parsedTasks = await parseTasks(tasks);
  // console.log("pdf tasks", tasks);
  // console.log("pdf tasksParsed", parsedTasks);
  exam.parsedTasks = parsedTasks;
  return exam;
};
export const examToPdf = async (exam) => {
  exam = JSON.parse(JSON.stringify(exam));
  exam = await parseExamData(exam);
  console.log("PDF exam", exam);
  const pageSize = { x: 595, Y: 842 };
  let tasks = exam.parsedTasks;
  let doc = new PDFDocument();
  let stream = doc.pipe(blobStream());
  let myCursor = getCursorPos(doc);
  doc.fillColor("black");
  console.log("first cursor");
   // myCursor = getCursorPos(doc);
  for (let task in tasks) {
    let index = task;
    task = tasks[index];
    console.log("pdf task", task);
    let taskTextParsed = task.parsedText;

    drawCircle(doc,myCursor.x,myCursor.y);
    let newCursPos = {
      x: parseInt(
        Math.floor(doc.widthOfString(parseInt(index) + parseInt(1) + ". "))
      ),
      y: 0,
      // x:0
    };
    doc.text(parseInt(index) + parseInt(1) + ". ", myCursor.x, myCursor.y, {
      continued: true,
    });
    myCursor = moveCursorRight(myCursor, newCursPos.x);
    drawCircle(doc,myCursor.x,myCursor.y);
    // let position = getCursorPos(doc);
    for (let part of taskTextParsed) {
      // console.log("part.text", part.text, taskTextParsed);

      // console.log("str x y", textSize);
      if (part.type === "text") {
        let toPrint = String(part.text);
        console.log("toPrint", toPrint, part.text);
        let textSize = {
          x: doc.widthOfString(toPrint, {
            // continued: true,
            width: pageSize.x - 2 * 72,
          }),
          y: doc.heightOfString(toPrint, {
            // continued: true,
            width: pageSize.x - 2 * 72,
          }),
        };
        console.log("str to print", myCursor, part.text, part);
        console.log("crs b4", getCursorPos(doc));

        let crs = getCursorPos(doc);
        myCursor=moveCursorIfNeeded(myCursor,textSize.x)
        // doc.text(toPrint, crs.x, crs.y, { continued: true });
        doc.text(toPrint, myCursor.x, myCursor.y
            // , { continued: true }
            );
        console.log("crs after", getCursorPos(doc));
        // doc.text(part.text,myCursor.x,myCursor.y);
        // console.log("str to print after", myCursor);
        myCursor = moveCursorRight(myCursor, textSize.x);
        drawCircle(doc,myCursor.x,myCursor.y);
      }
      if (part.type === "Latex") {
        let svgSize = getSvgSize(part.svg);
        myCursor= moveCursorIfNeeded(myCursor,svgSize.x);
        console.log("svg to print", myCursor, part.text, part);
        let crs = getCursorPos(doc);
        SVGtoPDF(doc, part.svg, myCursor.x, myCursor.y);
        // SVGtoPDF(doc, part.svg, crs.x, crs.y);
        myCursor = moveCursorRight(myCursor, svgSize.x);
        drawCircle(doc,myCursor.x,myCursor.y);
      }
    }
    // doc.text("", { continued: false });
    myCursor.y = myCursor.y + 35;
    myCursor.x = 72;
    drawCircle(doc,myCursor.x,myCursor.y);
    // doc.moveDown(1);
  }
  doc.end();
  stream.on("finish", () => {
    let blob = stream.toBlob("application/pdf");
    saveAs(blob, "MyFile.pdf");
  });
};

export default examToPdf;
