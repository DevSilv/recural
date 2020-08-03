#!/bin/bash

# Uncomment to debug
# set -x

source "$( dirname ${0} )/verify-token-pairs.sh"

opTok="("
clTok=")"

[[ "$( verifyTokenPairs )" && "${?}" == 1 ]] \
    && [[ $( verifyTokenPairs "ABC" ) && "${?}" == 1 ]] \
    && [[ $( verifyTokenPairs "ABC" 0 ) && "${?}" == 1 ]] \
    && [[ $( verifyTokenPairs "ABC" 0 "${opTok}" ) && "${?}" == 1 ]] \
    || exit 1

[[ $( verifyTokenPairs "ABC" "" "${opTok}" "${clTok}" ) && "${?}" == 1 ]] \
    && [[ $( verifyTokenPairs "ABC" 0 "" "${clTok}" ) && "${?}" == 1 ]] \
    && [[ $( verifyTokenPairs "ABC" 0 "${opTok}" "" ) && "${?}" == 1 ]] \
    && [[ $( verifyTokenPairs "" 0 "ABC" "${clTok}" ) && "${?}" == 1 ]] \
    && [[ $( verifyTokenPairs "" 0 "${opTok}" "ABC" ) && "${?}" == 1 ]] \
    && [[ $( verifyTokenPairs "" 0 "ABC" "ABC" ) && "${?}" == 1 ]] \
    || exit 1

[[ $( verifyTokenPairs "" 0 "${opTok}" "${clTok}" ) == 0 ]] \
    && [[ $( verifyTokenPairs "(" 0 "${opTok}" "${clTok}" ) == 1 ]] \
    && [[ $( verifyTokenPairs ")" 0 "${opTok}" "${clTok}" ) == 1 ]] \
    && [[ $( verifyTokenPairs "()" 0 "${opTok}" "${clTok}" ) == 0 ]] \
    && [[ $( verifyTokenPairs ")(" 0 "${opTok}" "${clTok}" ) == 1 ]] \
    && [[ $( verifyTokenPairs "(())" 0 "${opTok}" "${clTok}" ) == 0 ]] \
    || exit 1