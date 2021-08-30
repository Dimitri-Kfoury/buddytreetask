
from flask.json import jsonify
from psycopg2 import (connect, DatabaseError)
from database.config import config 



def insert_feature(feature):

    conn = None
    try:

        params = config()
        conn = connect(**params)
        cur = conn.cursor()
        cur.execute("INSERT INTO features VALUES (%s, %s)",(feature, 0))
        cur.close()
        return 'success'

    except (Exception, DatabaseError) as error:
        return None
    finally:
        if conn is not None:
            conn.commit()
            conn.close()
            


def increment_likes(feature,increment_by):

    conn = None
    try:
        
        params = config()
        conn = connect(**params)
        cur = conn.cursor()
        cur.execute("UPDATE features SET likes = (likes + %s) WHERE feature = (%s)",(increment_by,feature,))
        cur.execute("SELECT likes from features WHERE feature = %s",(feature,))
        response = cur.fetchone()
        cur.close()
        return response

    except (Exception, DatabaseError) as error:
        print(error)
        return None
    finally:
        if conn is not None:
            conn.commit()
            conn.close()
            
def get_features_db():

    conn = None
    try:
        params = config()
        conn = connect(**params)
        cur = conn.cursor()
        cur.execute("SELECT * from features")
        features = cur.fetchall()
        cur.close()
        return features
        
    except (Exception, DatabaseError) as error:
            return None
    finally:
        if conn is not None:
            conn.close()
            
