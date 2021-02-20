(ns clojureLikeToJavaScript)

(declare parse)

(defn parseFunctionCall [arr part res]
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

(defn parse [arr res]
    (if (= (count arr) 0)
        res
        (if (= (first arr) "(")
            (parseFunctionCall (rest arr) "" (conj res []))
            (if (= (first arr) ")")
                (parse (rest arr) res)
                nil))))

(defn transpileHelper [arr res]
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

(defn transpile [s]
    (transpileHelper (parse (clojure.string/split s #"") []) ""))
