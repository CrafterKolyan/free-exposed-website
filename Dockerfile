FROM python:3.8-alpine

WORKDIR /app

RUN apk add --update npm
RUN npm install -g localtunnel

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD ["./start.sh"]