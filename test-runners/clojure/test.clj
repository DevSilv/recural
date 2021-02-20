(defn tstHelper [fs cur]
    (if (not (= cur (count fs)))
        (if (= ((nth fs cur)) false)
            (println "At least one test failed:" cur)
            (tstHelper fs (inc cur)))))

(defn tst [fs]
    (tstHelper fs 0))
