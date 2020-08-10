#!/bin/bash

# Uncomment to debug
# set -x

scriptPath="${0}"
scriptDirPath="$(dirname ${scriptPath})"
testFiles="$(find ${scriptDirPath}/../../algorithms/ -type f -name '*-tests.js')"

for file in ${testFiles}
do
    node "${file}"

    if [[ "${?}" != 0 ]]
    then exit 1
    fi
done