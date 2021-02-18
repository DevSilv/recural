<?php

/**
 * @param mixed[] $arr The array to repeat.
 * @param int $cnt The number of times to repeat $arr.
 * @param int $cur Always 0; an auxiliary variable; between consecutive
 *  recursive invokations of the function, it represents how many times $arr
 *  has been repeated so far.
 * @param mixed[] $res Always []; an auxiliary variable; between consecutive
 *  recursive invokations of the function, it contains $cur elements, each
 *  of which is equal to $arr.
 * @return mixed[][] An array containing $cnt elements, each of which is equal
 *  to $arr.
 */
function repeat_arr($arr, $cnt, $cur, $res) {
    if ($cur === $cnt) {
        return $res;
    }

    return repeat_arr($arr, $cnt, $cur + 1, array_merge($res, [$arr]));
}
