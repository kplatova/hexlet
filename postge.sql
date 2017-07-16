select category, count(id) from products group by category;
select category, count(id), avg(price) from products group by category;
select category, name, count(id), avg(price) from products group by category, name;
select category, name, max(id), min(price) from products group by category, name;

select category, count(id), avg(price) 
    from products 
        group by category 
            having count(id) > 1 
                AND avg(price) > 5;

SELECT goods.name as name, categories.name AS category_name FROM goods JOIN categories ON category_id = categories.id WHERE price > 2 ORDER BY name DESC LIMIT 2;
    where price;


select goods.name as good_name, categories.name as category_name 
    from goods join categories 
        group by price
        where price > 2
            order by DESC limit 2;

SELECT * FROM goods LEFT JOIN categories on category_id = categories.id; // left join
SELECT goods.name FROM goods LEFT JOIN categories ON category_id = categories.id WHERE categories.name IS NULL;

Выполните в psql запрос который выбирает из таблицы goods все названия товаров, 
которые находятся в опубликованных категориях (state имеет значение published);

SELECT name FROM goods WHERE id in (SELECT id FROM categories WHERE state = 'published');

SELECT name FROM (SELECT id FROM courses WHERE id > 2) AS cat;
