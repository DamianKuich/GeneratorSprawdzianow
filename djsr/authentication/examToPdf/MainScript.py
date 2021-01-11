import re
from copy import deepcopy
from ..models import ImageDB
import pdfkit
import requests
from yattag import Doc
import base64
from urllib.parse import quote


def katexparser(text):
    pattern = "\$\{[^\$]*\}\$"
    # print({"text": text})
    matches = [(m.start(0), m.end(0)) for m in re.finditer(pattern, text)]
    taskTextParsed = list()
    taskTextParsedIndex = 0
    for match in matches:
        if taskTextParsedIndex < match[0]:
            taskTextParsed.append({"type": "text", "data": text[taskTextParsedIndex:match[0]]})
        taskTextParsed.append({"type": "latex", "data": text[match[0]:match[1]], "svg": requests.get(
            "https://math.now.sh?inline=" + quote(text[match[0]:match[1]][2:-2], safe='')).text})
        taskTextParsedIndex = match[1]

    if taskTextParsedIndex < (len(text)):
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

def collectTaskImages(image):
    try:
        image_id = image['image']
        # image_layout = image['imageLayout']
        ids = []
        for img in image_id:
            data = list(ImageDB.objects.filter(id=img).values())
            data = data[0]
            image_data = base64.b64encode(data['image']).decode('utf-8')
            ids.append(image_data)
        # ids.append(image_layout)
        return ids
    except:
        pass

def collectImageLayout(image):
    try:
        image_layout = image['imageLayout']
        print(image_layout, "tujestem")
        return image_layout
    except:
        pass


def taskPrintDataParser(task):
    task = deepcopy(task)
    task['text'] = katexparser(task['text'])
    task['answers'] = collectTaskAnswers(task['currentAnswers'])
    task['obrazki'] = collectTaskImages(task['currentAnswers'])
    task['layout'] = collectImageLayout(task['currentAnswers'])
    task['space']= task['currentAnswers']['spacetosolve']
    return task


def generatePdf(tasks, name="Sprawdzian"):
    tasks = list(map(taskPrintDataParser, tasks))
    # print(tasks)
    doc, tag, text = Doc().tagtext()
    with tag('html'):
        with tag('head'):
            doc.stag('meta', charset='UTF-8')
            # with tag('style'):
            #     text('img { width: 10%; height: auto; }')
        with tag('body'):
            # dodaj tytul do spr
            with tag('h1'):
                text(name)
            # renderowanie taskow
            for task in tasks:
                with tag('div'):
                    print('TASK', task)
                    # renderowanie tekstu zadania
                    with tag('p'):
                        for part in task['text']:
                            if part["type"] == "text":
                                with tag('span'):
                                    text(part["data"])
                            elif part["type"] == "latex":
                                svg = part["svg"]
                                w = re.search('width="(.+?)ex', svg).group(0)
                                h = re.search('height="(.+?)ex', svg).group(0)
                                print('W/H', w, h)
                                doc.stag("img", src='data:image/svg+xml;utf8,' + svg, style="display:inline;")
                    # renderowanie odp zadania
                    with tag('div'):
                        for answer in task['answers']:
                            # with tag('div'):
                            for part in answer:
                                if part["type"] == "text":
                                    with tag('span'):
                                        text(part["data"])
                                elif part["type"] == "latex":
                                    doc.stag("img", src='data:image/svg+xml;utf8,' + part["svg"])
    html = doc.getvalue()
    # print('HAATEEMEEEL', html)
    # config = pdfkit.configuration(wkhtmltopdf='./bin/wkhtmltopdf')
    # wygenerowany_pdf = pdfkit.from_string(html, False, configuration=config)
    wygenerowany_pdf = pdfkit.from_string(html, False)
    return wygenerowany_pdf, html
