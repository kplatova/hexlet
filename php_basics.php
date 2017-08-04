// reverse string
function reverse($str)
{
    $result = '';

    for ($i = strlen($str) - 1; $i >= 0; $i--) {
        $result .= $str[$i];
    }

    return $result;
}
