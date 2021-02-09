#include <stdlib.h>
#include "run-tests.h"

int main()
{
    int runTestsStatus = runTests();

    if (runTestsStatus == 1)
    {
        return EXIT_SUCCESS;
    }
    else if (runTestsStatus == -1)
    {
        return EXIT_SUCCESS;
    }
    else
    {
        fprintf(stderr, "%s: error: %d\n", __func__, runTestsStatus);

        exit(EXIT_FAILURE);
    }
}