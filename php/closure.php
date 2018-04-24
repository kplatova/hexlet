// BEGIN length
if ($items === null) {
    return 0;
} else {
    return 1 + length(cdr($items));
}
// END

// BEGIN append
if ($list1 === null) {
    return $list2;
} else {
    return cons(car($list1), append(cdr($list1), $list2));
}
// END

// BEGIN reverse
$iter = function ($items, $acc) use (&$iter) {
    if ($items === null) {
        return $acc;
    } else {
        return $iter(cdr($items), cons(car($items), $acc));
    }
};

return $iter($list, null);
// END
