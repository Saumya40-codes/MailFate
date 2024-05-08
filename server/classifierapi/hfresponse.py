import os
import sys
from langchain_community.llms import HuggingFaceEndpoint
from dotenv import load_dotenv

load_dotenv()


current_dir = os.path.dirname(__file__)

# Navigate to the parent directory
parent_dir = os.path.abspath(os.path.join(current_dir, '..'))

# Add the parent directory to the system path
sys.path.append(parent_dir)

# Now you can access the environment variable
api_token = os.environ.get("HUGGINGFACEHUB_API_TOKEN")

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
    return llm.invoke(f"The following e-mail has been identified as {'a spam' if isspam else 'not as a spam'} can you please provide a reason why?\n{text}")