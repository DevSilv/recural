#ifndef TOKENIZE_H
#define TOKENIZE_H

#include <stdlib.h>
#include <stdio.h>
#include <string.h>

enum TOKENS
{
    TOK_OPEN_LIST = 0,
    TOK_CLOSE_LIST = 1,
    TOK_COMMA = 2,
    TOK_STR = 3
};

/**
 * 1 - no error
 * 0 - other error
 * -1 - invalid character
 */
int tokenize(const char *, int (*)(char, const char *), int *);

#endif