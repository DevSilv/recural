(ns clojureLikeToJavaScriptTests
    (require [../../../../test-runners/clojure/test.clj])
    (require [clojureLikeToJavaScript.clj]))

(tst [
    #(nil? (cloLikToJav/transpile ""))
    #(nil? (cloLikToJav/transpile " "))
    #(= (cloLikToJav/transpile "()") "();")
    #(nil? (cloLikToJav/transpile " ()"))
    #(= (cloLikToJav/transpile "( )") "();")
    #(= (cloLikToJav/transpile "(f)") "f();")
    #(= (cloLikToJav/transpile "(f a)") "f(a);")
    #(= (cloLikToJav/transpile "(f a b)") "f(a,b);")
    #(= (cloLikToJav/transpile "(f a b)(g c d)") "g(c,d);f(a,b);")])
