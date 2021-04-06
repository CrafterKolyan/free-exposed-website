FROM python:3.8-alpine

WORKDIR /app

RUN apk --no-cache add npm
RUN npm install -g localtunnel && npm cache clean --force

COPY requirements.txt requirements.txt
RUN pip3 install --no-cache-dir -r requirements.txt

COPY . .

CMD ["./start.sh"]