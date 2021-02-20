(ns clojureLikeToJavaScript)

(declare parse)

(defn parseFunctionCall
    "@param arr Characters representing the function call code to parse.
    @param part A string of characters; always an empty string; an auxiliary
        variable; between consecutive recursive invokations of the function,
        it represents an identifier currently being parsed.
    @param res A vector; always an empty vector; an auxiliary variable;
        between consecutive recursive invokations of the function, it represents
        the result of parsing the characters in arr computed so far.
    @returns nil if arr contains an invalid character; otherwise, the result
        of parsing the characters in arr."
    [arr part res]
    (if (or (= (count arr) 0) (= (first arr) ")"))
        (parse arr (conj (rest res) (conj (first res) part)))
        (if (re-matches #"^[a-zA-Z]+$" (first arr))
            (parseFunctionCall (rest arr) (str part (first arr)) res)
            (if (= (first arr) " ")
                (parseFunctionCall
                    (rest arr)
                    ""
                    (conj (rest res) (conj (first res) part)))
                nil))))

(defn parse
    "@param arr Characters representing the code to parse.
    @param res A vector; always an empty vector; an auxiliary variable;
        between consecutive recursive invokations of the function, it represents
        the result of parsing the characters in arr computed so far.
    @returns nil if arr contains an invalid character; otherwise, the result
        of parsing the characters in arr."
    [arr res]
    (if (= (count arr) 0)
        res
        (if (= (first arr) "(")
            (parseFunctionCall (rest arr) "" (conj res []))
            (if (= (first arr) ")")
                (parse (rest arr) res)
                nil))))

(defn transpileHelper
    "@param arr The result of parsing code.
    @param res A string of characters; always an empty string; an auxiliary
        variable; between consecutive recursive invokations of the function,
        it represents the code transpiled from the content of arr so far.
    @returns nil if arr is nil; otherwise, the code transpiled from the content
        of arr."
    [arr res]
    (if (= arr nil)
        arr
        (if (= (count arr) 0)
            res
            (transpileHelper
                (rest arr)
                (str
                    res
                    (first (first arr))
                    "("
                    (clojure.string/join "," (rest (first arr)))
                    ");")))))

(defn transpile
    "@param s A string of characters; the code to transpile.
    @returns nil or a string of characters; nil if s does not represent valid
        code; otherwise, the the code transpiled from the code represented
        by s."
    [s]
    (transpileHelper (parse (clojure.string/split s #"") []) ""))
