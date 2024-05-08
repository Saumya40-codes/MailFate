from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .process import transform_text
from .predict import predict_email
from .hfresponse import explain
import json

# Create your views here.
@csrf_exempt
def classifier(request):
    try:
        # Decode the request body as UTF-8 and remove newline characters
        body_unicode = request.body.decode('utf-8').replace('\n', '')
        
        # Parse the JSON data
        data = json.loads(body_unicode)
        text = data['text']

        # preprocess the text
        transformed_text = transform_text(text)

        # prediction
        prediction = predict_email(transformed_text)

        # Get explanation
        reason = explain(text, prediction == 1)

        if prediction == 0:
            return JsonResponse({"prediction": "Not Spam", "reason": reason})

        return JsonResponse({"prediction": "Spam", "reason": reason})
    except Exception as e:
        print(str(e))
        return JsonResponse({"error": "An error occurred."})