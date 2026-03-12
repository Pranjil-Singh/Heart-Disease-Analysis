from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def home():
    # This serves the index.html file from the templates folder
    return render_template('index.html')

if __name__ == '__main__':
    # Runs the app on a local development server
    app.run(debug=True)