from flask import *
from flask_bs4 import Bootstrap

app = Flask(__name__, static_folder='static', template_folder='templates')
Bootstrap(app)


@app.route('/')
@app.route('/index')
def index():
    with open('db/messages.txt', 'r') as f:
        messages = list(map(str.strip, f.readlines()))
    return render_template('index.html', messages=messages)


@app.route('/create')
def create():
    message = request.args.get('message')
    if message is not None:
        message = message + '\n'
        with open('db/messages.txt', 'a') as f:
            f.write(message)
    return redirect("/", code=302)


@app.route('/delete')
def delete():
    with open('db/messages.txt', 'w') as _:
        pass
    return redirect("/", code=302)


@app.route('/favicon.ico')
@app.route('/static/favicon.ico')
def favicon():
    return send_file('static/favicon.ico')


@app.route('/js/<path:path>')
def javascript_file_page(path):
    return send_from_directory('js', path)


@app.route('/styles/<path:path>')
def css_file_page(path):
    return send_from_directory('styles', path)


if __name__ == '__main__':
    app.run()
