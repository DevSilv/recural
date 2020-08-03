#!/bin/bash

# Uncomment to debug
# set -x

jsTestRunnerPath="$(dirname ${0})/js/test.sh"

echo "Testing JavaScript scripts..." \
    && "${jsTestRunnerPath}" \
    && echo "All JavaScript tests PASSED" \
    || echo "Some JavaScript tests FAILED"