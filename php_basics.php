// reverse string
function reverse($str)
{
    $result = '';

    for ($i = strlen($str) - 1; $i >= 0; $i--) {
        $result .= $str[$i];
    }

    return $result;
}

// функция, которая берет массив и возвращает массив в котором оставлены только уникальные значения.
function uniq(array $arr)
{
    if (empty($arr)) {
        return [];
    }
    
    $resultArr = [];
    
    for ($i = 0; $i < sizeof($arr); $i++) {
        if (in_array($arr[$i], $resultArr)) {
          continue;
        } 
        $resultArr[] = $arr[$i];
    }
    
    return $resultArr;
}
