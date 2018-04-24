// Map с помощью итеративного процесса
$iter = function ($list, $acc) use (&$iter, $func) {
    if ($list === null) {
        return reverse($acc);
    }

    return $iter(cdr($list), cons($func(car($list)), $acc));
};

return $iter($list, null);
// END
