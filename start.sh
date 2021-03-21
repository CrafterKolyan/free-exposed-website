#!/bin/ash -i

PORT=5000
SUBDOMAIN=free-exposed

lt --port $PORT --subdomain=$SUBDOMAIN &
python3 -m flask run --host=0.0.0.0 --port=$PORT

