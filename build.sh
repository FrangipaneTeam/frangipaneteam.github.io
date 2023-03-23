#!/bin/bash

if test -n "$REGISTRY_AUTH_FILE"; then
  echo "Using default registry auth file : $REGISTRY_AUTH_FILE"
fi

local_image="localhost/frangiweb:latest"
registry_image="ghcr.io/frangipaneteam/frangiweb:latest"

podman manifest rm $local_image || true
podman manifest rm $registry_image || true
podman build --no-cache --jobs=4 --platform linux/arm64 --platform linux/amd64 --manifest $local_image .
podman tag $local_image $registry_image
podman manifest push --all $local_image docker://$registry_image
