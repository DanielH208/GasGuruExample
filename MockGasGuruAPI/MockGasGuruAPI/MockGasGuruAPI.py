from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

hello = "hello world" 

hour_score_data = [ { "hour": 10, "hour_final_score": 0.9744656750591505 },{ "hour": 6, "hour_final_score": 0.9579251822308075 },{ "hour":9, "hour_final_score": 0.9550747463743511 },{ "hour": 11, "hour_final_score": 0.9394817236709476 },{ "hour": 5,"hour_final_score": 0.937420056086369 },
    { "hour": 7, "hour_final_score": 0.9328237657553688 },{ "hour": 4,"hour_final_score": 0.9303487690959076 },{ "hour": 8, "hour_final_score": 0.9294034354769529 },
    { "hour": 1,"hour_final_score": 0.8225747967446347 },{ "hour": 3, "hour_final_score": 0.7837230320177461 },{ "hour": 12,"hour_final_score": 0.7256582521965331 },
    { "hour": 2, "hour_final_score": 0.7182574603076286 },{ "hour": 23,"hour_final_score": 0.6595689592160435 },{ "hour": 0, "hour_final_score": 0.6410887896283429 },
    { "hour": 13,"hour_final_score": 0.5847665079553104 },{ "hour": 22, "hour_final_score": 0.5253548743186938 },{ "hour": 21,"hour_final_score": 0.4647603135261866 },
    { "hour": 20, "hour_final_score": 0.4085515798190307 },{ "hour": 19,"hour_final_score": 0.31252545999740117 },{ "hour": 14, "hour_final_score": 0.2842999441769828 },
    { "hour": 18,"hour_final_score": 0.28171774438165065 },{ "hour": 15, "hour_final_score": 0.17150521517647424 },{ "hour": 17,"hour_final_score": 0.17038909382309475 },{ "hour": 16, "hour_final_score": 0.0 } ]

current_values_data = ({"ether_gasprice_average":10,"ether_conftime_average":120,"eth_gas_average_usd":0.34,"erc20_gas_average_usd":1.0525368573,"erc20_gasprice_average":30.95696639,"ether_gasprice_dif":4.17,"ether_confirmtime_dif":21.7,"ether_gas_usd_dif":4.17})

@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return hello


@app.route("/getBestHours", methods=['GET'])
def returnBestHours():
    return jsonify(hour_score_data)

@app.route("/getCurrentValues", methods=['GET'])
def returnCurrentValues():
    return jsonify(current_values_data)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
