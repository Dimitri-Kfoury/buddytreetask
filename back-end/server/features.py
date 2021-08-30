import functools
from os import readlink
from flask.helpers import make_response 
from psycopg2 import (connect, DatabaseError)
from database.db import (insert_feature, increment_likes,get_features_db)


from flask import (
    Response,Blueprint, flash, g, json, redirect, render_template, request, session, url_for,jsonify
)



bp = Blueprint('features', __name__, url_prefix='/features')


@bp.route('/', methods=(['GET']))
def get_features():
    if request.method == 'GET':

       response = get_features_db() 

       if response:
           response = jsonify(response) 
           response.headers['Access-Control-Allow-Origin']= '*'
       else:
           response = make_response('failed to get features from database','500',{'Access-Control-Allow-Origin' : '*'})

       return response 

@bp.route('/add_feature', methods=(['POST']))
def add_feature():
    if request.method == 'POST':
        feature = request.get_json()
        response = insert_feature(feature['feature'])
        if response:
            return jsonify(response)
        else:
            return make_response('failed to add feature','500',{'Access-Control-Allow-Origin' : '*'})
        
@bp.route('/like', methods=(['POST']))
def like():
    if request.method == 'POST':
        feature = request.get_json()
        response = increment_likes(feature['feature'],feature['incrementBy'])

        if response:
            return jsonify(response)
        else:
            return make_response('failed to increment or decrement feature likes','500',{'Access-Control-Allow-Origin' : '*'})