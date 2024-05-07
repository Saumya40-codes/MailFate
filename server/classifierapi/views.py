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
        data = json.loads(request.body)
        text = data['text']

        # preprocess the text
        transformed_text = transform_text(text)
        print(transformed_text)

        # prediction

        prediction = predict_email(transformed_text)
        print(prediction)

        reason = explain(text, prediction==1)

        if prediction == 0:
            return JsonResponse({"prediction": "Not Spam", "reason": reason})
    
        return JsonResponse({"prediction": "Spam", "reason": reason})
    except:
        return JsonResponse({"error": "An error occurred."})
