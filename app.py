from flask import Flask, render_template
from flask.ext.bootstrap import Bootstrap
import random

app = Flask(__name__)
Bootstrap(app)

@app.route('/')
def index():
  header = ['header0', 'header1', 'header2'] 
  return render_template('index.html',header=header,die=random.randrange(0,len(header)))


if __name__ == "__main__":
  app.run(debug=True,port=5000,host="0.0.0.0")
