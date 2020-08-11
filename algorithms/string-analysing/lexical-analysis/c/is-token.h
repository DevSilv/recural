#ifndef IS_TOKEN_H
#define IS_TOKEN_H

#include <regex.h>
#include <stdio.h>

typedef int regcomp_res_t;
typedef int regexec_res_t;

/**
 * 1 - is token
 * 0 - error
 * -1 - is not token
 */
int isToken(char, const char *);

#endif