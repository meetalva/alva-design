#!/bin/bash
set -e
set -u

if [ "$TRAVIS_SECURE_ENV_VARS" != "true" ]; then
    echo "Skipping decryption, secure env vars not available";
    exit 0;
fi

openssl aes-256-cbc \
  -K $encrypted_41f74c27b654_key \
  -iv $encrypted_41f74c27b654_iv \
  -in .ci/identity.enc \
  -out .ci/identity -d

chmod 400 identity;
