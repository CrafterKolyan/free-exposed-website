FROM python:3.8-slim-buster

WORKDIR /app

RUN apt-get update && \
  apt-get install -y npm && \
  apt-get clean && \
  rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/*
RUN npm install -g localtunnel

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD ["./start.sh"]