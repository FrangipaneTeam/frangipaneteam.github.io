#!/bin/bash

local_image="localhost/frangiweb:latest"
registry_image="ghcr.io/frangipaneteam/frangiweb:latest"

podman manifest rm $local_image
podman manifest rm $registry_image
podman build --no-cache --jobs=4 --platform linux/arm64 --platform linux/amd64 --manifest $local_image .
podman tag $local_image $registry_image
podman manifest push --all $local_image docker://$registry_image
