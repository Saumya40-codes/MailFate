import os
from langchain_community.llms import HuggingFaceEndpoint
from dotenv import load_dotenv

load_dotenv()


api_token = os.environ["HUGGINGFACEHUB_API_TOKEN"]

llm = HuggingFaceEndpoint(
    huggingfacehub_api_token= os.environ["HUGGINGFACEHUB_API_TOKEN"],
    repo_id="HuggingFaceH4/zephyr-7b-beta",
    task="text-generation",
    temperature=0.9, 
    model_kwargs={
        "max_length": 150
    },
)

def explain(text, isspam):
    return llm.invoke(f"Start your answer with 'reason:' and dont provide any summary just start from your reasoning. The following e-mail has been identified as {'a spam' if isspam else 'not as a spam'} can you please provide a reason why? \n\n{text}")