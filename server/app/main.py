from typing import Any, Dict, List
from openai import OpenAI
from dotenv import load_dotenv
import os
from fastapi import FastAPI
from pathlib import Path
from api_types import IntakeFormResponses

load_dotenv()

app = FastAPI()
client = OpenAI(organization=os.environ.get("ORGANIZATION"))
templates_path = Path("../templates")
data_path = Path("../data")


with open(templates_path / "profile.txt") as f:
    profile_template = f.read()


def parse_intake_form(content: IntakeFormResponses) -> str:
    # {responses: [{"question": "", "answer": []}]}
    responses = []
    for response in content.responses:
        responses.append("Question: " + response.question)
        responses.append("Answer: " + ", ".join(response.answer))
    return "\n".join(responses)


# create profile for user based on intake form
@app.post("/create-user-profile")
async def create_user_profile(intake_form_responses: IntakeFormResponses):
    form_responses = parse_intake_form(intake_form_responses)
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant that ONLY responds with the answer to any question that is asked.",
            },
            {
                "role": "user",
                "content": "I will provide a set of question and answer pairs from an intake form as well as a template to fill out. Use the answers to the questions I provide to fill out the template and return the template only. If the corresponding content is empty, remove the placeholder content. Think step by step and take a deep breath.",
            },
            {"role": "user", "content": "Here is the template:\n" + profile_template},
            {"role": "user", "content": "Here is the intake form:\n" + form_responses},
        ],
    )
    return {"message": completion.choices[0].message.content}


# create matches for the user
