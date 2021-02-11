#!/bin/bash

# Uncomment to debug
# set -x

jsTestRunnerPath="$(dirname ${0})/js/test.sh"
bashTestRunnerPath="$(dirname ${0})/bash/run-bash-tests.sh"
cTestRunnerPath="$(dirname ${0})/c/run-c-tests.sh"

echo "Testing JavaScript scripts..." \
    && "${jsTestRunnerPath}" \
    && echo "All JavaScript tests PASSED" \
    || echo "Some JavaScript tests FAILED"

echo

echo "Testing Bash scripts..." \
    && "${bashTestRunnerPath}" \
    && echo "All Bash tests PASSED" \
    || echo "Some Bash tests FAILED"

echo

echo "Testing C implementations..." \
    && "${cTestRunnerPath}" \
    && echo "All C tests PASSED" \
    || echo "EITHER some C tests failed OR an error happened"
