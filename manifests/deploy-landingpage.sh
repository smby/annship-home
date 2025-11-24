#!/bin/bash
# Created by thinkwp on Dec 13, 2020

set -e
set -x
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

cd ${SCRIPTPATH}/..
npm install && npm run build
npm run export

chmod 400 ${SCRIPTPATH}/annship-pipeline
scp -o StrictHostKeyChecking=no -i ${SCRIPTPATH}/annship-pipeline -r ${SCRIPTPATH}/../out/* ubuntu@172.31.6.52:/opt/annship/landingpage/
ssh -o StrictHostKeyChecking=no -i ${SCRIPTPATH}/annship-pipeline ubuntu@172.31.6.52 "mkdir -p /opt/annship/landingpage/{contact-us,about-us,lost-claim,damage-claim}"
ssh -o StrictHostKeyChecking=no -i ${SCRIPTPATH}/annship-pipeline ubuntu@172.31.6.52 "mv /opt/annship/landingpage/contact-us.html /opt/annship/landingpage/contact-us/contact-us.html && mv /opt/annship/landingpage/about-us.html /opt/annship/landingpage/about-us/about-us.html && mv /opt/annship/landingpage/lost-claim.html /opt/annship/landingpage/lost-claim/lost-claim.html && mv /opt/annship/landingpage/damage-claim.html /opt/annship/landingpage/damage-claim/damage-claim.html"

