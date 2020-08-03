#!/bin/bash

function factorial {
    if [[ "${#}" -lt 1 ]] \
        || [[ "${#1}" == 0 ]]
    then
        echo "Invalid argument"
        exit 1
    fi

    local num="${1}"

	[[ "${num}" == 0 ]] \
		&& echo 1 \
		|| echo "$(( ${num} * $( factorial $(( ${num} - 1 )) ) ))"
}