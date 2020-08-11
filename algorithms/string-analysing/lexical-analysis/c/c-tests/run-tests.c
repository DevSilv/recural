#include "run-tests.h"

int runTests()
{
    const char *testInput;
    int expectedStatus;
    int testTokenizeStatus;

    testInput = "";
    expectedStatus = 1;
    testTokenizeStatus = testTokenize(testInput, (int[]){}, 0, expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "(";
    expectedStatus = 1;

    testTokenizeStatus = testTokenize(testInput, (int[]){0}, 1, expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = ")";
    expectedStatus = 1;
    testTokenizeStatus = testTokenize(testInput, (int[]){1}, 1, expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "()";
    expectedStatus = 1;
    testTokenizeStatus = testTokenize(testInput,
                                      (int[]){0, 1},
                                      2,
                                      expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "(a)";
    expectedStatus = 1;
    testTokenizeStatus = testTokenize(testInput,
                                      (int[]){0, 3, 1},
                                      3,
                                      expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "(a,)";
    expectedStatus = 1;
    testTokenizeStatus = testTokenize(testInput,
                                      (int[]){0, 3, 2, 1},
                                      4,
                                      expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "(a,(";
    expectedStatus = 1;
    testTokenizeStatus = testTokenize(testInput,
                                      (int[]){0, 3, 2, 0},
                                      4,
                                      expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "(a,())";
    expectedStatus = 1;
    testTokenizeStatus = testTokenize(testInput,
                                      (int[]){0, 3, 2, 0, 1, 1},
                                      6,
                                      expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "(a,(b))";
    expectedStatus = 1;
    testTokenizeStatus = testTokenize(testInput,
                                      (int[]){0, 3, 2, 0, 3, 1, 1},
                                      7,
                                      expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "(a,(b,c))";
    expectedStatus = 1;
    testTokenizeStatus = testTokenize(testInput,
                                      (int[]){0, 3, 2, 0, 3, 2, 3, 1, 1},
                                      9,
                                      expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "(abc,(def,ghi))";
    expectedStatus = 1;
    testTokenizeStatus = testTokenize(testInput,
                                      (int[]){0,
                                              3,
                                              3,
                                              3,
                                              2,
                                              0,
                                              3,
                                              3,
                                              3,
                                              2,
                                              3,
                                              3,
                                              3,
                                              1,
                                              1},
                                      15,
                                      expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "#";
    expectedStatus = -1;
    testTokenizeStatus = testTokenize(testInput, (int[]){}, 0, expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "#(abc,(def,ghi))";
    expectedStatus = -1;
    testTokenizeStatus = testTokenize(testInput, (int[]){}, 0, expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "(abc,(#,ghi))";
    expectedStatus = -1;
    testTokenizeStatus = testTokenize(testInput,
                                      (int[]){0, 3, 3, 3, 2, 0},
                                      6,
                                      expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    testInput = "(abc,(def,ghi))#";
    expectedStatus = -1;
    testTokenizeStatus = testTokenize(testInput,
                                      (int[]){0,
                                              3,
                                              3,
                                              3,
                                              2,
                                              0,
                                              3,
                                              3,
                                              3,
                                              2,
                                              3,
                                              3,
                                              3,
                                              1,
                                              1},
                                      15,
                                      expectedStatus);
    if (testTokenizeStatus == -1)
    {
        return -1;
    }
    else if (testTokenizeStatus == 0)
    {
        return 0;
    }

    return 1;
}