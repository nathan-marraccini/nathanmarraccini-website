from flask import Flask, jsonify, request
from flask_cors import CORS
from inference_sdk import InferenceHTTPClient

app = Flask(__name__)
CORS(app)

@app.route('/multiplication', methods=['POST'])
def multiplication():
    data = request.json
    input1 = data['input1']
    input2 = data['input2']
    total = int(input1) * int(input2)
    multiply = str(total)
    return jsonify({'result': multiply})

@app.route('/cash_counter', methods=['POST'])
def addition():
    CLIENT = InferenceHTTPClient(
        api_url="https://detect.roboflow.com",
        api_key="fZkwfr3c0A2hZjtLSdM8"
    )
    data = request.json
    image = data["input1"]
    result = CLIENT.infer(image, model_id="cash-counter/10")
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)

