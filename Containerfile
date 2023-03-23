FROM docker.io/caddy
ADD index.html /usr/share/caddy
ADD static /usr/share/caddy/static
