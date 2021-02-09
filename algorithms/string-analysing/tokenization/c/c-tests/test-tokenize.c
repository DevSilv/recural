#include "test-tokenize.h"

int testTokenize(const char *str,
                 int expectedTokens[],
                 size_t expectedTokensSize,
                 int expectedStatus)
{
    int actualTokens[expectedTokensSize];
    for (size_t cur = 0; cur < expectedTokensSize; ++cur)
    {
        actualTokens[cur] = -1;
    }

    int actualStatus = tokenize(str, &isToken, actualTokens);

    if (actualStatus == expectedStatus)
    {
        for (size_t cur = 0; cur < expectedTokensSize; ++cur)
        {
            if (actualTokens[cur] != expectedTokens[cur])
            {
                printf("Test failed: '%s'\n", str);

                return -1;
            }
        }

        return 1;
    }
    else if (actualStatus == 1 || actualStatus == -1)
    {
        printf("Test failed: '%s'\n", str);

        return -1;
    }
    else
    {
        return 0;
    }
}