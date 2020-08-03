#!/bin/bash

# Uncomment to debug
# set -x

source "$( dirname ${0} )/factorial.sh"

[[ "$( factorial )" && "${?}" == 1 ]] \
    && [[ $( factorial "") && "${?}" == 1 ]] \
    || exit 1

[[ $( factorial "1" ) == 1 ]] \
    && [[ $( factorial "5" ) == 120 ]] \
    || exit 1