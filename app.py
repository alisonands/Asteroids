import requests
import pandas as pd
from flask import Flask, jsonify, render_template


# DATA 
url = 'https://ssd-api.jpl.nasa.gov/cad.api'
params = {#'dist-max': '1',
           'h-max': '20',
          'date-min': '1980-01-01',
          'date-max': '2060-01-01'}
response = requests.get(url, params)
data = response.json()
data_cols = data['fields']
data_vals = data['data']

app = Flask(__name__)
@app.route('/')
def main():
    return render_template('index.html')

@app.route('/data')
def index():
    return data


if __name__ == '__main__':
    app.run(debug = True)