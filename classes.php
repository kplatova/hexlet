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

// BEGIN
  public function add(Item $item)
  {
    $this->items[] = $item;
  }

  public function count()
  {
    return count($this->items);
  }

  public function total()
  {
    return array_reduce($this->items, function ($sum, $item) {
      return $sum + $item->price;
    }, 0);
  }

  public function remove($id)
  {
    $this->items = array_values(array_filter($this->items, function (Item $item) use ($id) {
      return $id !== $item->id;
    }));
  }

  public function clear()
  {
    $this->items = [];
  }
  // END
