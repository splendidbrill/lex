from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from crewai import Agent, Task, Crew
from langchain.llms import OpenAI
from crewai_tools import SerperDevTool
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Set your OpenAI API key
os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

# FastAPI app instance
app = FastAPI()

# Request body schema
class QueryRequest(BaseModel):
    query: str

# CrewAI logic
def run_crewai_agent(query: str) -> str:
    # Initialize LLM
    llm = OpenAI()

    # Optional: Add a web search tool
    search_tool = SerperDevTool()

    # Define agent with tool
    researcher = Agent(
        role="Researcher",
        goal="Find accurate and concise information",
        backstory="Expert in internet research and summarization.",
        tools=[search_tool],
        llm=llm
    )

    # Create a task for the agent
    task = Task(
        description=query,
        agent=researcher
    )

    # Create a crew and run
    crew = Crew(agents=[researcher], tasks=[task])
    result = crew.run()
    return result

# FastAPI endpoint
@app.post("/run-crewai")
async def run_crewai(req: QueryRequest):
    try:
        result = run_crewai_agent(req.query)
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# (Optional) Future Autogen integration
# @app.post("/run-autogen")
# async def run_autogen(req: QueryRequest):
#     result = run_autogen_agent(req.query)
#     return {"result": result}
