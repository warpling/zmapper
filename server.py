from flask import Flask, Response, render_template

import json
import zmap

app = Flask(__name__)

probe = zmap.ZMap()

@app.route("/")
def home():
   return render_template('home.html')

@app.route("/status")
def echo_progress():
   return Response(json.dumps(probe.report()), mimetype="application/json")

if __name__ == "__main__":
   Flask.debug = True
   app.run(host='0.0.0.0', port=80)
