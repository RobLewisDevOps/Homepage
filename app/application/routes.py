from flask import Flask, redirect, request, url_for,render_template, Response, jsonify
import json
import os

from application import app
from application.inspirational_quote import Quotes

@app.route('/', methods=['GET'])
@app.route('/home', methods=['GET'])
def home():
    if request.method=='GET':
        return render_template('homepage_test.html', title='home', inspirational_quote=Quotes().quote, base_url=os.environ.get('BASE_URL'))
    else:
        return Exception
