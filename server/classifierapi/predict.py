import pickle

tfidf = pickle.load(open('vectorizer.pkl', 'rb'))
model = pickle.load(open('model.pkl', 'rb'))

def predict_email(transformed_text):
    vector_input = tfidf.transform([transformed_text])
    return model.predict(vector_input)[0]