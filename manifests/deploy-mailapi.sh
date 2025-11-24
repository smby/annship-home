#!/bin/bash
# Created by thinkwp on Dec 13, 2020

set -e

pushd $(dirname $0) > /dev/null
SCRIPTPATH=$(pwd -P)
popd > /dev/null
SCRIPTFILE=$(basename $0)

function log() {
	    echo "$(date +'%Y-%m-%d %H:%M:%S%z') [INFO] - ${SCRIPTFILE}:: $@"
    }

function err() {
	    echo "$(date +'%Y-%m-%d %H:%M:%S%z') [ERRO] - ${SCRIPTFILE}:: $@" >&2
    }

# ================================================================================

MAILAPI_IMAGE_NAME="annship/annship-mailapi"
IMAGE_VERSION=`echo "${GIT_BRANCH}-v${BUILD_NUMBER}"`

log "Building image ${MAILAPI_IMAGE_NAME}:${IMAGE_VERSION}"
cd ${SCRIPTPATH}
docker build ../mailapi/. -t ${MAILAPI_IMAGE_NAME}:${IMAGE_VERSION}
docker push ${MAILAPI_IMAGE_NAME}:${IMAGE_VERSION}

chmod 400 ${SCRIPTPATH}/annship-pipeline
ssh -o StrictHostKeyChecking=no -i ${SCRIPTPATH}/annship-pipeline ubuntu@172.31.6.52 "rollout-mailapi ${IMAGE_VERSION}"
