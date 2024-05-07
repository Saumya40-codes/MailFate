import nltk
import string
from nltk.corpus import stopwords
import string

from nltk.stem.porter import PorterStemmer

ps = PorterStemmer()

nltk.download('punkt')

def transform_text(text):
  text = text.lower()

  text = nltk.word_tokenize(text)

  y = []

  for i in text:   # remove all alphanumeric characters/words
    if i.isalnum():
      y.append(i)

  text = y[:]
  y.clear()

  for i in text:   # remove stop words
    if i not in stopwords.words('english') and i not in string.punctuation:
      y.append(i)

  text = y[:]
  y.clear()

  for i in text:
    y.append(ps.stem(i))

  return " ".join(y)
