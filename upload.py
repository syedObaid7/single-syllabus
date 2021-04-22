import os
from flask import Flask, render_template, request, session
import parsing

__author__ = 'LeonardoAcioli'

app = Flask(__name__)

APP_ROOT = os.path.dirname(os.path.abspath(__file__))

@app.route('/upload', methods=['POST'])
def upload():
    target = os.path.join(APP_ROOT, 'PDFS/')
    print("TARGET: " + target)

    if not os.path.isdir(target):
        os.mkdir(target)

    for file in request.files.getlist("file"):
        filename = file.filename
        print("FILE: " + filename)
        destination = "/".join([target, filename])
        print("DESTINATION" + destination)
        file.save(destination)
        session['uploadFilePath'] = destination

    parsing.main()

    return "Succeeded"


if __name__ == '__main__':
    app.secret_key = os.urandom(24)
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
