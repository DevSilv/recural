#include "is-token.h"

int isToken(char ch, const char *regexStr)
{
    regex_t strLexemeRegex;
    char errMsg[100];

    regcomp_res_t compRet = regcomp(&strLexemeRegex, regexStr, 0);

    if (compRet != 0)
    {
        regerror(compRet, &strLexemeRegex, errMsg, sizeof(errMsg));
        fprintf(stderr,
                "%s: error: could not compile regex: '%s'\n",
                __func__,
                errMsg);

        regfree(&strLexemeRegex);

        return 0;
    }

    regexec_res_t execRet = regexec(&strLexemeRegex,
                                    (char[2]){ch, '\0'},
                                    0,
                                    NULL,
                                    0);

    regfree(&strLexemeRegex);

    if (execRet == 0)
    {
        return 1;
    }
    else if (execRet == REG_NOMATCH)
    {
        return -1;
    }
    else
    {
        regerror(compRet, &strLexemeRegex, errMsg, sizeof(errMsg));
        fprintf(stderr,
                "%s: error: could not execute regex: '%s'\n",
                __func__,
                errMsg);

        return 0;
    }
}