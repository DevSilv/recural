#include "tokenize.h"

int tokenize(const char *str,
             int (*isToken)(char, const char *),
             int *res)
{
    size_t strLen = strlen(str);

    for (size_t strCur = 0; strCur < strLen; ++strCur)
    {
        int isTokenStatus = 0;

        isTokenStatus = (*isToken)(str[strCur], "[(]");
        if (isTokenStatus == 1)
        {
            res[strCur] = TOK_OPEN_LIST;
        }
        else
        {
            isTokenStatus = (*isToken)(str[strCur], "[)]");
            if (isTokenStatus == 1)
            {
                res[strCur] = TOK_CLOSE_LIST;
            }
            else
            {
                isTokenStatus = (*isToken)(str[strCur], ",");
                if (isTokenStatus == 1)
                {
                    res[strCur] = TOK_COMMA;
                }
                else
                {
                    isTokenStatus = (*isToken)(str[strCur], "[a-z]");
                    if (isTokenStatus == 1)
                    {
                        res[strCur] = TOK_STR;
                    }
                    else if (isTokenStatus == -1)
                    {
                        return -1;
                    }
                    else
                    {
                        return 0;
                    }
                }
            }
        }
    }

    return 1;
}