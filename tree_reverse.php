function reverse($list)
{
    $iter = function ($items, $acc) use (&$iter) {
        if ($items === null) {
            return $acc;
        } else {
            $element = car($items);
            if (isPair($element)) {
                $result = reverse($element);
            } else {
                $result = $element;
            }
            return $iter(cdr($items), cons($result, $acc));
        }
    };

    return $iter($list, null);
}
