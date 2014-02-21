from flask import Flask, Response, render_template

import json
import zmap

app = Flask(__name__)

probe = zmap.ZMap()

@app.route("/")
def home():
   return render_template('home.html')

@app.route("/start")
def start():
   if not probe.is_started():
      probe.start()
      return "", 200
   else:
      return "", 400

@app.route("/stop")
def stop():
   if probe.is_started():
      probe.stop()
      return "", 200
   else:
      return "", 400

@app.route("/started")
def started():
   result = probe.is_started()

   return Response(str(result), mimetype="text/plain")

@app.route("/status")
def echo_progress():
   if probe.is_started():
      return Response(json.dumps(probe.report()), mimetype="application/json")
   else:
      return "", 400

if __name__ == "__main__":
   Flask.debug = True
   app.run(host='0.0.0.0', port=80)
