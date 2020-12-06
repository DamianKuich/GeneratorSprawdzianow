import requests

from .MainScript import taskPrintDataParser
from yattag import Doc

def generatePdf(tasks, name="Sprawdzian"):
    tasks = list(map(taskPrintDataParser, tasks))
    doc, tag, text = Doc().tagtext()
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
    print('HAATEEMEEEL', html)
    wygenerowany_pdf=requests.post("https://gen-mat-pdf-node.herokuapp.com/pdf",data={"html":html}).text
    # config = pdfkit.configuration(wkhtmltopdf='./bin/wkhtmltopdf')
    # wygenerowany_pdf = pdfkit.from_string(html, False, configuration=config)
    return wygenerowany_pdf, html
