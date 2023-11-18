from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI()

completion = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello world"}]
)

# create profile for user based on intake form

# create matches for the user
print(completion.choices[0].message)