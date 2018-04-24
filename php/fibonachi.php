function fib($num)
{
    $fibSum = 0;
    $fib1 = 0;
    $fib2 = 1;

    for ($i = 0; $i < $num; $i++) {
        $fib1 = $fib2;
        $fib2 = $fibSum;
        $fibSum = $fib2 + $fib1;
    }

    return $fibSum;
}
