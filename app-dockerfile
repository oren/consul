FROM iojs:latest

RUN useradd -ms /bin/bash developer
WORKDIR /home/developer
USER developer

COPY server.js /home/developer/
CMD node server.js
EXPOSE 3000
