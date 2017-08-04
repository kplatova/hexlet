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

// Функция wordsCount, которая считает количество одинаковых слов в предложении. 
// Результатом функции является ассоциативный массив, в ключах которого слова из исходного текста, 
// а значения это количество повторений.
function wordsCount($sentence)
{
    $words = explode(" ", $sentence);
    $result = [];
    foreach ($words as $word) {
        if (empty($word)) {
            continue;
        }
        if (!array_key_exists($word, $result)) {
            $result[$word] = 1;
        } else {
            $result[$word]++;
        }
    }

    return $result;
}
