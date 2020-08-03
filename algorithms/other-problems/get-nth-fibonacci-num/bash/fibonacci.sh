#!/bin/bash

function fibonacci {
    if [[ "${#}" -lt 1 ]] \
        || [[ "${#1}" == 0 ]]
    then
        echo "Invalid argument"
        exit 1
    fi

    local num="${1}"

	[[ "${num}" == 0 ]] \
        && echo 0 \
	    || (
            [[ "${num}" == 1 ]] \
                && echo 1 \
	            || echo "$(( $( fibonacci $(( ${num} - 1 )) ) + $( fibonacci $(( ${num} - 2 )) ) ))"
        )
}