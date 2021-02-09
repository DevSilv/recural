#ifndef TEST_TOKENIZE_H
#define TEST_TOKENIZE_H

#include <stdlib.h>
#include <string.h>
#include "../is-token.h"
#include "../tokenize.h"

/**
 * 1 - test passed
 * 0 - error
 * -1 - test failed
 */
int testTokenize(const char *, int[], size_t, int);

#endif