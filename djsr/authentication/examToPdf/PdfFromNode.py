import requests
import json
from .MainScript import taskPrintDataParser
from yattag import Doc

req = requests.get("https://math.now.sh?from=" + "\square").text


def generatePdf(tasks, name="Sprawdzian"):
    listodp = ['A: ', 'B: ', 'C: ', 'D: ']
    tasks = list(map(taskPrintDataParser, tasks))
    doc, tag, text = Doc().tagtext()
    # dodaj tytul do spr
    czas = 0
    # for task in enumerate(tasks):
    #     czas += task['timetosolve']
    with tag('div style="display: inline;"'):
        text("Imię:")
        with tag('span style="display: inline;margin-left: 170px;"'):
            text("Nazwisko:")
    with tag('div'):
        text("Data:")
    # with tag('div'):
    #     text("Czas na rozwiązanie testu: "+str(czas))
    with tag('div'):
        text(name)
    # renderowanie taskow
    for index, task in enumerate(tasks):
        with tag('span style="display: inline;"'):
            text("Zadanie nr." + str(index + 1))
            with tag('span style="display: inline;margin-left: 20px;"'):
                text("0-" + str(task['maxPoints']) + "pkt.")
            # with tag('span style="display: inline;margin-left: 20px;"'):
            #     text(str(task['timetosolve']) + " minut")
        with tag('p'):
            for part in task['text']:
                if part["type"] == "text":
                    with tag('span'):
                        text(part["data"])
                elif part["type"] == "latex":
                    svg = part["svg"]
                    doc.stag("img", src='data:image/svg+xml;utf8,' + svg,
                             style="display:inline;transform: translate(0px,30%);")
        # # renderowanie obrazków
        try:
            with tag('p'):
                for img in task['obrazki']:
                    # text("whatever")
                    if task['layout'] == "2x1":
                        # with tag('div'):
                        try:
                            with tag('span'):
                                doc.stag("img", src='data:image/*;base64,' + img, style="display:inline-block;")
                        except:
                            text("error")
                    elif task['layout'] == "1x2":
                        with tag('div'):
                            try:
                                with tag('span'):
                                    doc.stag("img", src='data:image/*;base64,' + img)
                            except:
                                text("error")
                    else:
                        text("error")
        except:
            pass
        # renderowanie odp zadania
        with tag('div'):
            for index, answer in enumerate(task['answers']):
                # with tag('div'):
                for part in answer:
                    if part["type"] == "text":
                        with tag('div style="display: inline-block;margin-right: 20px;"'):
                            text(listodp[index] + part["data"])
                    elif part["type"] == "latex":
                        with tag('div style="display: inline-block;margin-right: 20px;"'):
                            with tag('span style="display: block;margin-right: 20px;"'):
                                text(listodp[index])
                                doc.stag("img", src='data:image/svg+xml;utf8,' + part["svg"],
                                         style="transform: translate(0px,4px);")
        # if task['spacetosolve'] > 0:
        #     with tag('div style="margin-bottom:' + str(task['spacetosolve']*19)+'px;"'):
        #         pass
        with tag('hr style="color: black;"'):
            pass
    html = doc.getvalue()
    requestJson = json.dumps({'html': html})
    # wygenerowany_pdf = requests.get("https://gen-mat-pdf-node.herokuapp.com/pdf/", data='{"html": "'+html.encode(encoding='UTF-8')+'"}')
    # wygenerowany_pdf = requests.get("https://gen-mat-pdf-node.herokuapp.com/pdf/",
    #                                 data=requestJson, headers={"Content-Type": "application/json"})
    wygenerowany_pdf = requests.post("https://gen-mat-pdf-node.herokuapp.com/pdf2/", files={"html": html})
    return wygenerowany_pdf, html


def generateAnswersPdf(tasks, name):
    listodp = ['A:', 'B:', 'C:', 'D:']
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
    for index, task in enumerate(tasks):
        with tag('div'):
            text("Zadanie nr." + str(index + 1))
            with tag('p'):
                try:
                    for index, answer in enumerate(task['answers']):
                        for part in answer:
                            if part["type"] == "text":
                                with tag('span style="display: inline-block;margin-right: 20px;"'):
                                    doc.stag("img", src='data:image/svg+xml;utf8,' + req, style="display:inline;")
                                    text(listodp[index] + part["data"])
                            elif part["type"] == "latex":
                                with tag('span style="display: inline-block;margin-right: 20px;"'):
                                    doc.stag("img", src='data:image/svg+xml;utf8,' + req, style="display:inline;")
                                    text(listodp[index])
                                    doc.stag("img", src='data:image/svg+xml;utf8,' + part["svg"])
                except:
                    pass
    html = doc.getvalue()
    requestJson = json.dumps({'html': html})
    # wygenerowany_pdf = requests.get("https://gen-mat-pdf-node.herokuapp.com/pdf/", data='{"html": "'+html.encode(encoding='UTF-8')+'"}')
    wygenerowany_pdf = requests.post("https://gen-mat-pdf-node.herokuapp.com/pdf2/", files={"html": html})
    return wygenerowany_pdf, html


def generateAnswerKeyPdf(tasks, name):
    listodp = ['A:', 'B:', 'C:', 'D:']
    tasks = list(map(taskPrintDataParser, tasks))
    doc, tag, text = Doc().tagtext()
    # dodaj tytul do spr
    with tag('h3'):
        text("Klucz odpowiedzi dla " + name)
    # renderowanie taskow
    for index, task in enumerate(tasks):
        nr = index
        with tag('div'):
            # text("Zadanie nr." + str(index + 1))
            with tag('p'):
                if len(task['answers']) >=1:
                    for index, answer in enumerate(task['answers']):
                        for part in answer:
                            # print('odpowiedz',answer)
                            # print('data',part['data'])
                            # print('poprawna',task['correctans'][0])

                            if part['data'] == task['correctans'][0]:
                                if part["type"] == "text":
                                    with tag('span'):
                                        # doc.stag("img", src='data:image/svg+xml;utf8,' + req, style="display:inline;")
                                        text("Zadanie nr." + str(nr + 1) + " ")
                                        text(listodp[index] + part["data"])
                                elif part["type"] == "latex":
                                    # doc.stag("img", src='data:image/svg+xml;utf8,' + req, style="display:inline;")
                                    text("Zadanie nr." + str(nr + 1) + " ")
                                    text(listodp[index])
                                    doc.stag("img", src='data:image/svg+xml;utf8,' + part["svg"])
                else:
                    with tag('span'):
                        text("Zadanie nr." + str(nr + 1) + " ")
                        text("Zadanie otwarte.")
    html = doc.getvalue()
    requestJson = json.dumps({'html': html})
    # wygenerowany_pdf = requests.get("https://gen-mat-pdf-node.herokuapp.com/pdf/", data='{"html": "'+html.encode(encoding='UTF-8')+'"}')
    wygenerowany_pdf = requests.get("https://gen-mat-pdf-node.herokuapp.com/pdf/",
                                    data=requestJson, headers={"Content-Type": "application/json"})
    return wygenerowany_pdf, html
