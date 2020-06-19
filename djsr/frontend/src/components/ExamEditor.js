import React, { Component } from "react";
import PropTypes from "prop-types";
import { MDBCol, MDBCollapse, MDBContainer, MDBRow } from "mdbreact";
import TaskSearch from "./taskSearch";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskEditor from "./TaskEditor";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  Font,
  Image,
  Svg,
  Path,
  G,
} from "@react-pdf/renderer";
import { sampleSize, shuffle } from "lodash/collection";
import Roboto from "./webfonts/Roboto-Regular.ttf";
import RobotoBold from "./webfonts/Roboto-Bold.ttf";
import Latex from "react-latex";
import "./styles/katex.css";
// import e410 from "./img/e410.svg";
import XMLParser from "react-xml-parser";
import Canvg, { presets } from "canvg";

class ExamEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam: {
        tasks: [],
      },
      tasks: null,
      sideMenuCollapseId: "",
      editorTask: null,
    };
    // this.taskEditorRef = React.createRef();
  }

  // svgStringToSvgComponent = async (svg) => {
  //   // const canvas = new OffscreenCanvas(100, 20);
  //   // const ctx = canvas.getContext("2d");
  //   // const v = await Canvg.from(ctx, svg, presets.offscreen());
  //   // await v.render();
  //   // const blob = await canvas.convertToBlob();
  //   // const pngUrl = URL.createObjectURL(blob);
  //   svg = "<?xml version='1.0' encoding='utf-8'?>\n" + svg;
  //   let xml = new XMLParser().parseFromString(svg);
  //   console.log("SVG", xml);
  // };

  // svgObjectToComponent = (svg) => {
  //   const svgName = svg.name;
  //
  //   svg;
  // };
  generatedPDF = (exam) => {
    // console.log("Roboto", Roboto);
    // this.svgStringToSvgComponent(
    //   '<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="11.462ex" height="2.509ex" style="vertical-align: -0.671ex;" viewBox="0 -791.3 4935 1080.4" role="math" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title MathJax-SVG-1-Desc">\n' +
    //     '        <title id="MathJax-SVG-1-Title">Equation</title>\n' +
    //     '        <desc id="MathJax-SVG-1-Desc">y equals m x plus b</desc>\n' +
    //     '        <defs aria-hidden="true">\n' +
    //     '        <path stroke-width="1" id="E1-MJMATHI-79" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>\n' +
    //     '        <path stroke-width="1" id="E1-MJMAIN-3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path>\n' +
    //     '        <path stroke-width="1" id="E1-MJMATHI-6D" d="M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path>\n' +
    //     '        <path stroke-width="1" id="E1-MJMATHI-78" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>\n' +
    //     '        <path stroke-width="1" id="E1-MJMAIN-2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path>\n' +
    //     '        <path stroke-width="1" id="E1-MJMATHI-62" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path>\n' +
    //     "        </defs>\n" +
    //     '        <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">\n' +
    //     '         <use xlink:href="#E1-MJMATHI-79" x="0" y="0"></use>\n' +
    //     '         <use xlink:href="#E1-MJMAIN-3D" x="775" y="0"></use>\n' +
    //     '         <use xlink:href="#E1-MJMATHI-6D" x="1831" y="0"></use>\n' +
    //     '         <use xlink:href="#E1-MJMATHI-78" x="2710" y="0"></use>\n' +
    //     '         <use xlink:href="#E1-MJMAIN-2B" x="3504" y="0"></use>\n' +
    //     '         <use xlink:href="#E1-MJMATHI-62" x="4505" y="0"></use>\n' +
    //     "        </g>\n" +
    //     "        </svg>"
    // );
    Font.register({
      family: "Roboto",
      fonts: [
        { src: "http://127.0.0.1:8000" + Roboto },
        { src: "http://127.0.0.1:8000" + RobotoBold, fontWeight: 700 },
      ],
    });
    const pageStyle = {
      paddingTop: "40px",
      paddingBottom: "104px",
      paddingLeft: "34px",
      paddingRight: "30px",
      fontFamily: "Roboto",
    };
    const taskStyle = {};
    const taskStyleBold = {
      fontFamily: "Roboto",
      fontWeight: 700,
    };

    const styles = StyleSheet.create({
      page: pageStyle,
      task: taskStyle,
      taskBold: taskStyleBold,
    });
    let taski = exam.tasks.map((task, index) => {
      let answers = task.currentDataSet.examAnswers.map((item) => {
        let answerSource = item.isCorrect
          ? task.currentDataSet.answers[0].correctans
          : task.currentDataSet.answers[0].allanswers;
        return answerSource[item.index];
      });
      const ansChar = ["A", "B", "C", "D"];
      return (
        <View style={{ paddingBottom: "20px" }}>
          <View style={{ paddingBottom: "15px" }}>
            <Text>
              <Text style={{ fontWeight: 700, display: "inline" }}>
                {index + 1}
                {". "}
              </Text>
              <Text>{task.text}</Text>
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {answers.map((item, index) => {
              return (
                <Text>
                  <Text style={{ fontWeight: 700 }}>
                    {ansChar[index] + ". "}
                  </Text>
                  {item}
                </Text>
              );
            })}
          </View>
        </View>
      );
    });
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={{ paddingBottom: "15px" }}>
            <Text
              style={{
                fontWeight: 700,
                borderBottom: "1px solid black",
                paddingBottom: "20px",
              }}
            >
              Imie i nazwisko:
              .................................................................
            </Text>
            {/*<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">*/}
            {/*  <Path*/}
            {/*    d="M30,1h40l29,29v40l-29,29h-40l-29-29v-40z"*/}
            {/*    stroke="#000"*/}
            {/*    fill="none"*/}
            {/*  />*/}
            {/*  <Path d="M31,3h38l28,28v38l-28,28h-38l-28-28v-38z" fill="#a23" />*/}
            {/*</Svg>*/}
            {/*<View>*/}
            {/*  <Svg*/}
            {/*    viewBox="0 -791.3 4935 1080.4"*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*  >*/}
            {/*    <G stroke="#000" fill="#000" strokeWidth="0">*/}
            {/*      <Path*/}
            {/*        strokeWidth="1"*/}
            {/*        id="E1-MJMATHI-79"*/}
            {/*        d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"*/}
            {/*        y={20}*/}
            {/*        x={500}*/}
            {/*      />*/}
            {/*      <Path*/}
            {/*        strokeWidth="1"*/}
            {/*        d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"*/}
            {/*      />*/}
            {/*      <Path*/}
            {/*        strokeWidth="1"*/}
            {/*        d="M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"*/}
            {/*      />*/}
            {/*      <Path*/}
            {/*        strokeWidth="1"*/}
            {/*        d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"*/}
            {/*      />*/}
            {/*      <Path*/}
            {/*        strokeWidth="1"*/}
            {/*        d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"*/}
            {/*      />*/}
            {/*      <Path*/}
            {/*        strokeWidth="1"*/}
            {/*        d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"*/}
            {/*        y={20}*/}
            {/*        x={4505}*/}
            {/*      />*/}
            {/*    </G>*/}
            {/*  </Svg>*/}
            {/*</View>*/}
          </View>
          <View>{taski}</View>
        </Page>
      </Document>
    );
  };

  PDF = null;

  setTaskToEdit = (index) => {
    this.setState((state) => {
      state.editorTask = state.exam.tasks[index];
      state.sideMenuCollapseId = "taskEdit";
      return state;
    });
  };

  updateTaskToEdit = (task) => {
    this.setState((state) => {
      Object.assign(state.editorTask, task);
      return state;
    });
  };

  removeTask = (index)=>{
    this.setState((state)=>{
      this.setState((state)=>{
         // state.exam.tasks =
             state.exam.tasks.splice(index,index);
         return state;
      })
    })
  }

  dragEnd = (result) => {
    const { source, destination, draggableId } = result;
    console.log(source,destination,draggableId);
    if(source.droppableId === "examDroppable" &&
      !destination.droppableId ){
      this.setState((state)=>{
         state.exam.tasks = state.exam.tasks.splice(source.index,source.index);
         return state;
      })
    }
    console.log("dragEnd", result);
    if (!destination || destination.droppableId === "searchDroppable") {
      return;
    }
    if (
      source.droppableId === "examDroppable" &&
      destination.droppableId === "examDroppable"
    ) {
      this.setState((state) => {
        let tasks = state.exam.tasks;
        [tasks[source.index], tasks[destination.index]] = [
          tasks[destination.index],
          tasks[source.index],
        ];
        return state;
      });
    } else {
      let draggedItem = JSON.parse(
        JSON.stringify(this.state.tasks[source.index])
      );
      draggedItem.currentDataSet = draggedItem.dataset[0];
      let currentDataSetAnswers = draggedItem.currentDataSet.answers[0];
      console.log("XD?", currentDataSetAnswers.allanswers.replace(/'/g, '"'));
      currentDataSetAnswers.allanswers = JSON.parse(
        currentDataSetAnswers.allanswers.replace(/'/g, '"')
      );
      currentDataSetAnswers.correctans = JSON.parse(
        currentDataSetAnswers.correctans.replace(/'/g, '"')
      );

      console.log(currentDataSetAnswers, "currentDataSetAnswers");

      let correctAnswersIndex = [
        Math.floor(
          Math.random() * (currentDataSetAnswers.correctans.length - 1)
        ),
      ];
      console.log(
        correctAnswersIndex,
        "correctAnswersIndex",
        currentDataSetAnswers.length
      );
      let incorrectAnswersIndexes = currentDataSetAnswers.allanswers.map(
        (item, index) => {
          return index;
        }
      );
      let answersSet = [];

      // [sampleSize(currentDataSetAnswers.allanswers,3).map];
      answersSet = answersSet.concat(
        sampleSize(correctAnswersIndex).map((item) => {
          return { index: item, isCorrect: true };
        })
      );
      answersSet = answersSet.concat(
        sampleSize(incorrectAnswersIndexes, 3).map((item) => {
          return { index: item, isCorrect: false };
        })
      );
      answersSet = shuffle(answersSet);

      draggedItem.currentDataSet.examAnswers = answersSet;
      draggedItem.maxPoints=1;
      console.log("draggedItem", draggedItem, this.state.tasks);
      this.setState((state) => {
        state.exam.tasks.splice(destination.index, 0, draggedItem);
        return state;
      });
    }
  };
  setSearchedTasks = (tasks) => {
    this.setState((state) => {
      state.tasks = tasks;
      return state;
    });
  };

  setSideMenuCollapse = (collapseId) => {
    this.setState({ sideMenuCollapseId: collapseId });
  };
  render() {
    let sideMenuCollapseId = this.state.sideMenuCollapseId;
    let searchedTasks = this.state.tasks;
    let examTasks = this.state.exam.tasks;
    let editorTask = this.state.editorTask;
    console.log("editorTask", editorTask);
    return (
      <DragDropContext onDragEnd={this.dragEnd}>
        <MDBRow>
          <MDBCol size="4" className="border-right">
            <MDBRow>
              <MDBCol
                className={
                  "d-flex justify-content-between " +
                  "p-2 mt-3 border-right border-top border-left " +
                  (sideMenuCollapseId === "taskSearch" ? "" : "border-bottom")
                }
                onClick={() => {
                  this.setSideMenuCollapse("taskSearch");
                }}
              >
                Dodaj zadanie
              </MDBCol>
              <MDBCol
                size={"3"}
                className={
                  "d-flex justify-content-between " +
                  "p-2 mt-3 border-right border-top border-left " +
                  (sideMenuCollapseId === "taskEdit" ? "" : "border-bottom")
                }
                onClick={() => {
                  this.setSideMenuCollapse("taskEdit");
                }}
              >
                Edycja zadania
              </MDBCol>
              <MDBCol
                size={"3"}
                className={
                  "d-flex justify-content-between " +
                  "p-2 mt-3 border-right border-top border-left border-bottom"
                }
              >
                <PDFDownloadLink
                  document={this.generatedPDF(this.state.exam)}
                  fileName="somename.pdf"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Generowanie PDF" : "Pobierz PDF!"
                  }
                </PDFDownloadLink>
              </MDBCol>
            </MDBRow>
            <MDBCollapse
              id="taskSearch"
              isOpen={sideMenuCollapseId}
              className="w-100"
            >
              <TaskSearch updateData={this.setSearchedTasks} />
              <MDBContainer className="mt-3">
                {/*{Array.isArray(searchedTasks) &&*/}
                {/*  searchedTasks.length > 0 &&*/}
                {/*  searchedTasks.map((task) => <div>{task.text}</div>)}*/}
                {Array.isArray(searchedTasks) && searchedTasks.length > 0 && (
                  <Droppable droppableId="searchDroppable">
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver
                            ? "red"
                            : "white",
                        }}
                        className="border-top"
                      >
                        {searchedTasks.map((task, index) => (
                          <Draggable
                            key={"task-" + task.id}
                            draggableId={"" + task.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={provided.draggableProps.style}
                                className="border-right border-left border-bottom p-2"
                              >
                                <Latex>{task.text}</Latex>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                )}
                {Array.isArray(searchedTasks) && searchedTasks.length === 0 && (
                  <div>Brak zadań o podanych kryteriach</div>
                )}
                {!searchedTasks && (
                  <div className="text-truncate">
                    Wybierz umiejetnosci z listy. Aby dodać zadania do
                    sprawdzianu przeciągnij je na sprawdzian
                  </div>
                )}
              </MDBContainer>
            </MDBCollapse>
            <MDBCollapse
              id="taskEdit"
              isOpen={sideMenuCollapseId}
              className="w-100"
            >
              <TaskEditor
                task={editorTask}
                updateTask={this.updateTaskToEdit}
              />
            </MDBCollapse>
          </MDBCol>
          <MDBCol size="8" className="d-flex justify-content-center">
            <Droppable droppableId="examDroppable"
            style={{marginLeft:"auto", marginRight:"auto"}}>
              {(provided, snapshot) => (
                <div
                  style={{
                    width: "21cm",
                    height: "29.7cm",
                    backgroundColor: snapshot.isDraggingOver ? "blue" : "white",
                  }}
                  className="border p-3"
                  ref={provided.innerRef}
                >
                  <div className="mb-2" >
                    Imie i nazwisko:
                    .................................................................
                  </div>
                  {examTasks.map((task, index) => (
                    <Draggable
                      key={"task-" + task.id + "-" + index}
                      draggableId={"task-" + task.id + "-" + index}
                      index={index}

                    >
                      {(provided, snapshot) => {
                        console.log("ELO123", task.currentDataSet);
                        let answers = task.currentDataSet.examAnswers.map(
                          (item) => {
                            let answerSource = item.isCorrect
                              ? task.currentDataSet.answers[0].correctans
                              : task.currentDataSet.answers[0].allanswers;
                            return answerSource[item.index];
                          }
                        );

                        const ansChar = ["A", "B", "C", "D"];
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={provided.draggableProps.style}
                            className="p-2"
                            onClick={() => {
                              this.setTaskToEdit(index);
                            }}
                            onContextMenu={()=>{this.removeTask(index)}}
                          >
                            <p className="text-right mb-0 pb-0">{".../"+ task.maxPoints + " pkt."}</p>
                            <p>
                              <span className="font-weight-bold">
                                {index + 1}
                                {". "}
                              </span>
                              <Latex>{task.text}</Latex>
                            </p>
                            {task.currentDataSet.image.length >= 1 && (
                              <MDBRow center>
                                <div>
                                  <img
                                    src={
                                      "http://127.0.0.1:8000/api/user/image/" +
                                      task.currentDataSet.image[0]
                                    }
                                    style={{maxHeight:"100px"}}
                                  />
                                </div>
                              </MDBRow>
                            )}
                            <MDBRow between className="pl-2 pr-2 ml-0 mr-2">
                              {answers.map((item, index) => {
                                return (
                                  <div>
                                    <span className="font-weight-bold">
                                      {ansChar[index] + ". "}
                                    </span>
                                    <Latex>{item}</Latex>
                                  </div>
                                );
                              })}
                            </MDBRow>
                          </div>
                        );
                      }}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </MDBCol>
        </MDBRow>
      </DragDropContext>
    );
  }
}

ExamEditor.propTypes = {};

export default ExamEditor;
