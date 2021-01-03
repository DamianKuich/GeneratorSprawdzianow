import requests
import json
from .MainScript import taskPrintDataParser
from yattag import Doc

req = requests.get("https://math.now.sh?from=" + "\square").text

def generatePdf(tasks, name="Sprawdzian"):
    tasks = list(map(taskPrintDataParser, tasks))
    doc, tag, text = Doc().tagtext()
    # dodaj tytul do spr
    with tag('h1'):
        text(name)
    # renderowanie taskow
    for task in tasks:
        with tag('div'):
            # print('TASK', task)
            # renderowanie tekstu zadania
            with tag('p'):
                for part in task['text']:
                    if part["type"] == "text":
                        with tag('span'):
                            text(part["data"])
                    elif part["type"] == "latex":
                        svg = part["svg"]
                        doc.stag("img", src='data:image/svg+xml;utf8,' + svg, style="display:inline;")
            # # renderowanie obrazków
            with tag('p'):
                for img in task['obrazki']:
                    # text("whatever")
                    with tag('div'):
                        try:
                            with tag('span'):
                                doc.stag("img", src='data:image/*;base64,' + img)
                        except: text("error")
            # renderowanie odp zadania
            with tag('div'):
                for index, answer in enumerate(task['answers']):
                    # with tag('div'):
                    for part in answer:
                        if part["type"] == "text":
                            with tag('span'):
                                text(part["data"])
                        elif part["type"] == "latex":
                            doc.stag("img", src='data:image/svg+xml;utf8,' + part["svg"])
    html = doc.getvalue()
    requestJson=json.dumps({'html':html})
    # wygenerowany_pdf = requests.get("https://gen-mat-pdf-node.herokuapp.com/pdf/", data='{"html": "'+html.encode(encoding='UTF-8')+'"}')
    wygenerowany_pdf = requests.get("https://gen-mat-pdf-node.herokuapp.com/pdf/",
                                    data=requestJson,headers={"Content-Type":"application/json"})
    return wygenerowany_pdf, html


def generateAnswersPdf(tasks, name):
    listodp = ['A:','B:','C:','D:']
    tasks = list(map(taskPrintDataParser, tasks))
    doc, tag, text = Doc().tagtext()
    # dodaj tytul do spr
    with tag('div'):
        text("Imię ......................... Nazwisko......................... ")
    with tag('h2'):
        text("Karta odpowiedzi dla " + name)
    with tag('h3'):
        text("Odpowiednią odpowiedź zaznaczyć X")
    # renderowanie taskow
    for index,task in enumerate(tasks):
        with tag('div'):
            text("Zadanie nr."+ str(index+1))
            with tag('p'):
                for index, answer in enumerate(task['answers']):
                    for part in answer:
                        if part["type"] == "text":
                            with tag('span'):
                                doc.stag("img", src='data:image/svg+xml;utf8,' + req, style="display:inline;")
                                text(listodp[index] + part["data"])
                        elif part["type"] == "latex":
                            doc.stag("img", src='data:image/svg+xml;utf8,' + req, style="display:inline;")
                            text(listodp[index])
                            doc.stag("img", src='data:image/svg+xml;utf8,' + part["svg"])
    html = doc.getvalue()
    requestJson=json.dumps({'html':html})
    # wygenerowany_pdf = requests.get("https://gen-mat-pdf-node.herokuapp.com/pdf/", data='{"html": "'+html.encode(encoding='UTF-8')+'"}')
    wygenerowany_pdf = requests.get("https://gen-mat-pdf-node.herokuapp.com/pdf/",
                                    data=requestJson,headers={"Content-Type":"application/json"})
    return wygenerowany_pdf, html
