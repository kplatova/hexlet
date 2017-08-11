// Как использовать вместо foreach() => array_reduce()
// Подсчет сумм value в массиве

// foreach()
$sum = 0;
foreach ($cart->items as $name => $price) {
    $sum += $price;
}
return $sum;

// array_reduce()
return array_reduce($cart->items, function ($sum, $item) {
    return $sum + $item->price;
}, 0);

