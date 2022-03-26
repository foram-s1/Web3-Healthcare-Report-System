import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"Enjoy": "It's Working"}

@app.post("/predict")
def predict():
    pass

@app.get("/setup")
def setup():
    
    # setup model first
    pass

if __name__ == '__main__':
    uvicorn.run(app, host='10.1.41.158', port=8000, debug=True)    