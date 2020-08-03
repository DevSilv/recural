#!/bin/bash

# Uncomment to debug
set -x

scriptPath="${0}"
scriptDirPath="$(dirname ${scriptPath})"
testFiles="$(find ${scriptDirPath}/../../algorithms/ -type f -name '*-tests.sh')"

echo "B"
for file in ${testFiles}
do
    bash "${file}"

    echo "A"

    if [[ "${?}" != 0 ]]
    then exit 1
    fi
done
echo "C"