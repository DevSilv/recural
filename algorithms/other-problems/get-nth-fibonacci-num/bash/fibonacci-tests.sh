#!/bin/bash

# Uncomment to debug
# set -x

source "$( dirname ${0} )/fibonacci.sh"

[[ "$( fibonacci )" && "${?}" == 1 ]] \
    && [[ $( fibonacci "" ) && "${?}" == 1 ]] \
    || exit 1

[[ "$( fibonacci 0 )" == 0 ]] \
    && [[ "$( fibonacci 1 )" == 1 ]] \
    && [[ "$( fibonacci 5 )" == 5 ]] \
    && [[ "$( fibonacci 6 )" == 8 ]] \
    || exit 1