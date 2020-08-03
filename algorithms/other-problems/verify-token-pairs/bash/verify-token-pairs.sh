#!/bin/bash

# Uncomment to debug
# set -x

function verifyTokenPairs {
    if [[ "${#}" -lt 4 ]]
    then
        echo "Invalid number of arguments"
        exit 1
    fi

    local str="${1}"
    local n="${2}"
    local op="${3}"
    local cl="${4}"

    if [[ "${#n}" == 0 ]]
    then
        echo "Invalid helper variable value: '${n}'"
        exit 1
    fi

    if [[ "${#op}" != 1 ]]
    then
        echo "Invalid opening token value: '${op}'"
        exit 1
    fi

    if [[ "${#cl}" != 1 ]]
    then
        echo "Invalid closing token value: '${cl}'"
        exit 1
    fi

    if [[ "${#str}" == 0 ]]
    then
        if [[ "${n}" == 0 ]]
        then echo 0
        else echo 1
        fi
    elif [[ "${n}" -lt 0 ]]
    then echo 1
    else
        if [[ "${str:0:1}" == "${op}" ]]
        then echo $( verifyTokenPairs "${str:1}" "$(( ${n} + 1 ))" "${op}" "${cl}" )
        elif [[ "${str:0:1}" == "${cl}" ]]
        then echo $( verifyTokenPairs "${str:1}" "$(( ${n} - 1 ))" "${op}" "${cl}" )
        else echo $( verifyTokenPairs "${str:1}" "${n}" "${op}" "${cl}" )
        fi
    fi
}