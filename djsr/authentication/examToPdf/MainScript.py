import re
from copy import deepcopy

import pdfkit
import requests
from yattag import Doc


def katexparser(text):
    pattern = "\$\{[^\$]*\}\$"
    matches = [(m.start(0), m.end(0)) for m in re.finditer(pattern, text)]
    taskTextParsed = list()
    taskTextParsedIndex = 0
    for match in matches:
        if taskTextParsedIndex < match[0]:
            taskTextParsed.append({"type": "text", "data": text[taskTextParsedIndex:match[0]]})
        taskTextParsed.append({"type": "latex", "data": text[match[0]:match[1]], "svg": requests.get(
            "https://math.now.sh?from=" + text[match[0]:match[1]][2:-2])})
        taskTextParsedIndex = match[1]

    if taskTextParsedIndex < (len(text) - 1):
        taskTextParsed.append({"type": "text", "data": text[taskTextParsedIndex:]})
    return taskTextParsed


def collectTaskAnswers(answers):
    correctAns = answers['correctans']
    wrongAns = answers['wronganswers']
    answerIndexes = answers['answersIndexes']
    result = []
    for answer in answerIndexes:
        source = correctAns if answer['isCorrect'] else wrongAns
        result.append(katexparser(source[answer['index']]))
    return result


def taskPrintDataParser(task):
    task = deepcopy(task)
    task['text'] = katexparser(task['text'])
    task['answers'] = collectTaskAnswers(task['currentAnswers'])
    task['answers'] = map(katexparser, task['answers'])
    return task


def generatePdf(tasks, name="Sprawdzian"):
    tasks = map(taskPrintDataParser, tasks)
    doc, tag, text = Doc().tagtext()
    with tag('html'):
        with tag('body'):
            # dodaj tytul do spr
            with tag('h1'):
                text(name)
            # renderowanie taskow
            for task in tasks:
                with tag('div'):
                    # renderowanie tekstu zadania
                    with tag('p'):
                        for part in task['text']:
                            if part["type"] == "text":
                                with tag('span'):
                                    text(part["data"])
                            elif part["type"] == "latex":
                                doc.stag("img", src='data:image/svg+xml;utf8,' + part["svg"])
                    # renderowanie odp zadania
                    with tag('div'):
                        for answer in task['answers']:
                            with tag('div'):
                                for part in answer:
                                    if part["type"] == "text":
                                        with tag('span'):
                                            text(part["data"])
                                    elif part["type"] == "latex":
                                        doc.stag("img", src='data:image/svg+xml;utf8,' + part["svg"])
    html = doc.getvalue()
    config = pdfkit.configuration(wkhtmltopdf='./bin/wkhtmltopdf')
    wygenerowany_pdf = pdfkit.from_string(html, False, configuration=config)
    return wygenerowany_pdf
