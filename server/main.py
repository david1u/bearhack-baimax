from flask import Flask, jsonify, Response, request
from flask_cors import CORS
from text import *


app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route("/api/users", methods=['GET'])
def users():


    print("ENTERED API CALL")

    data = main(request.args.get("search"))

    return jsonify(
        {
            "users": [
                data
                # 'Hi! I\'m B-AI-max! Your personal health care assistant!'
            ]
        }
    )

@app.route("/getinput", methods=["POST"])
def call():
    output = get_medicine_recommendation(request.get_json()['body'])
    print("CALL CALLED", output)
    return jsonify({
        "CALL" : output
    })


if __name__ == "__main__":
    app.run(debug=True, port=8080)