![docker](./docker.png)

app
---

    docker build -t oreng/test-consul -f app-dockerfile .
    docker run -p 3000:3000 -it oreng/test-consul
    curl localhost:3000
    docker commit 8f718fb72c2d hello:v1
    docker run -d -p 3000:3000 hello:v1
    ./run

nginx
-----

    for i in $(docker ps -q); do docker inspect $i | grep "IPAddress" | cut -d" " -f 10 | sed 's/[^0-9\.]*//g'; done
    docker build -t oreng/nginx -f nginx-dockerfile  .
    docker run -p 80:80 --name nginx -d oreng/nginx

consul
------

    docker run -d -p 8400:8400 -p 8500:8500 -p 8600:53/udp -h node1 --name consul progrium/consul -server -bootstrap -ui-dir /ui
    http://localhost:8500/ui

registrator
-----------

    docker run -d -v /var/run/docker.sock:/tmp/docker.sock -h 192.168.1.121 --name registrator gliderlabs/registrator consul://192.168.1.121:8500

misc
----
wget https://dl.bintray.com/mitchellh/consul/0.5.0_linux_amd64.zip
wget https://dl.bintray.com/mitchellh/consul/0.5.0_web_ui.zip
./consul agent -server -bootstrap-expect 1 -data-dir /tmp/consul -ui-dir /home/oren/downloads/cons/dist/
