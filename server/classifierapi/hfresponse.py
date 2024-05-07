import os
from langchain_community.llms import HuggingFaceEndpoint
from dotenv import load_dotenv

load_dotenv()


api_token = os.environ["HUGGINGFACEHUB_API_TOKEN"]

llm = HuggingFaceEndpoint(
    huggingfacehub_api_token= os.environ["HUGGINGFACEHUB_API_TOKEN"],
    repo_id="HuggingFaceH4/zephyr-7b-beta",
    task="text-generation",
    temperature=0.5, 
    model_kwargs={
        "max_length": 150
    },
)

def explain(text, isspam):
    return llm.invoke(f"Explain in very short why this email might be {'a spam' if isspam else 'not a spam'} dont ask any follow ups just provide reasoning and if it is a spam dont change it to not a spam or vice versa: {text}")