// filter by iteration
$iter = function ($list, $acc) use (&$iter, $func) {
    if ($list === null) {
        return reverse($acc);
    }

    $newAcc = $func(car($list)) ? cons(car($list), $acc) : $acc;
    return $iter(cdr($list), $newAcc);
};
return $iter($list, null);
