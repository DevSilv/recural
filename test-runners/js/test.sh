#!/bin/bash

scriptPath="${0}"
scriptDirPath="$(dirname ${scriptPath})"
testFiles="$(find ${scriptDirPath}/../../algorithms/ -type f -name '*-test-cases.js')"
status=0

for file in ${testFiles}
do
    node "${file}"

    if [[ "${?}" != "0" ]]
    then
        status=1
        echo
        echo "Testing stopped: some tests FAILED"
        break
    fi
done

if [[ "${status}" == "0" ]]
then
    echo
    echo "All tests PASSED"
fi