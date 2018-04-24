function solution($list)
{
    $result = filter($list, function ($item) {
        return $item % 3 === 0;
    });

    $result2 = map($result, function ($item) {
        return $item ** 2;
    });

    $result3 = accumulate($result2, function ($item, $acc) {
        return $acc + $item;
    }, 0);

    return $result3 / length($result2);
}
