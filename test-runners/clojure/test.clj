(defn tstHelper
    "@param fs Functions, each of which represents a tests, takes no argument,
        and returns true if the test passes and false if it does not.
    @param cur An integer number from 0 (including) to inifinity; always 0;
        an auxiliary variable; between consecutive recursive invokations
        of the function, it represents the number of the test being currently
        checked for passing.
    @sideeffects Prints to the output stream."
    [fs cur]
    (if (not (= cur (count fs)))
        (if (= ((nth fs cur)) false)
            (println "At least one test failed:" cur)
            (tstHelper fs (inc cur)))))

(defn tst
    "@param fs Functions, each of which represents a tests, takes no arument,
        and returns true if the test passes and false if it does not.
    @sideeffects Prints to the output stream."
    [fs]
    (tstHelper fs 0))
