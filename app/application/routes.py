from flask import Flask, redirect, request, url_for,render_template, Response, jsonify
import json

from application import app
from application.inspirational_quote import Quotes

@app.route('/', methods=['GET'])
@app.route('/home', methods=['GET'])
def home():
    if request.method=='GET':
        return render_template('homepage.html', title='home', inspirational_quote=Quotes().quote)
    else:
        return Exception
