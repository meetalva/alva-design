#!/bin/bash
set -e
set -u

BRANCH=$(if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then echo $TRAVIS_BRANCH; else echo $TRAVIS_PULL_REQUEST_BRANCH; fi);

if [ "$TRAVIS_SECURE_ENV_VARS" != "true" ]; then
    echo "Skipping pre deployment, secure env vars not available";
    exit 0;
fi

node ./.ci/deploy-pre.js .tmp
