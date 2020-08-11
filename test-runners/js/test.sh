#!/bin/bash

# Uncomment to debug
# set -x

scriptPath="${0}"
scriptDirPath="$(dirname ${scriptPath})"
testFiles="$(find ${scriptDirPath}/../../algorithms/ -type f -name '*-tests.js')"
testFilesCount="$( echo ${testFiles} | wc -w )"
count=0
percent=0
cur=10

printf "[ "

for file in ${testFiles}
do
    node "${file}"

    if [[ "${?}" != 0 ]]
    then exit 1
    fi

    count="$(( count + 1 ))"
    percent="$(( ${count} * 100 / ${testFilesCount} ))"
    
    while [[ "$(( ${cur} - ${percent} ))" -le 0 ]]
    do
        printf "${cur}%% "
        cur="$(( ${cur} + 10 ))"
    done
done

printf "]\n"