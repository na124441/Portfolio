FROM alpine:3.19
RUN apk add --no-cache g++ coreutils
RUN adduser -D -s /bin/false judge
USER judge
WORKDIR /tmp
