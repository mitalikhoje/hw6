from flask import Flask, request, jsonify
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='my-app/build', static_url_path='')
CORS(app)

@app.route('/get-last-name', methods=["POST"])
@cross_origin()
def getLastName():
    app.logger.info(request.json)
    fName = request.json['fName'].lower()

    if(fName == "mitali"):
        return jsonify("Khoje")
    else:
        return jsonify("User Not Found")

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()