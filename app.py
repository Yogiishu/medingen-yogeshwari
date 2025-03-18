from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="sai@2025",
    database="medicines_db"
)
cursor = db.cursor(dictionary=True)

# Get all medicines
@app.route('/medicines', methods=['GET'])
def get_medicines():
    cursor.execute("SELECT * FROM medicines")
    medicines = cursor.fetchall()
    return jsonify(medicines)

# Get medicine by ID
@app.route('/medicines/<int:medicine_id>', methods=['GET'])
def get_medicine(medicine_id):
    cursor.execute("SELECT * FROM medicines WHERE id = %s", (medicine_id,))
    medicine = cursor.fetchone()
    return jsonify(medicine)

# Get reviews for a medicine
@app.route('/reviews/<int:medicine_id>', methods=['GET'])
def get_reviews(medicine_id):
    cursor.execute("SELECT * FROM reviews WHERE medicine_id = %s", (medicine_id,))
    reviews = cursor.fetchall()
    return jsonify(reviews)


# @app.route('/reviews', methods=['GET'])
# def get_review():
#     cursor.execute("SELECT * FROM reviews")
#     reviews = cursor.fetchall()
#     return jsonify(medicines)
# # Add a new review


@app.route('/reviews', methods=['POST'])
def add_review():
    data = request.json
    cursor.execute("INSERT INTO reviews (medicine_id, rating, review_text) VALUES (%s, %s, %s)",
                   (data['medicine_id'], data['rating'], data['review_text']))
    db.commit()
    return jsonify({"message": "Review added successfully!"})

# Get FAQs for a medicine
@app.route('/faqs/<int:medicine_id>', methods=['GET'])
def get_faqs(medicine_id):
    cursor.execute("SELECT * FROM faqs WHERE medicine_id = %s", (medicine_id,))
    faqs = cursor.fetchall()
    return jsonify(faqs)

# Add a new FAQ
@app.route('/faqs', methods=['POST'])
def add_faq():
    data = request.json
    cursor.execute("INSERT INTO faqs (medicine_id, question, answer) VALUES (%s, %s, %s)",
                   (data['medicine_id'], data['question'], data['answer']))
    db.commit()
    return jsonify({"message": "FAQ added successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
