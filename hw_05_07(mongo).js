use mydatabase;
db.products.insertMany([
  {
    id: 1,
    title: "Product 1",
    price: 9.99,
    marks: [4, 3, 5, 2],
    countOfOrderedUnits: 10,
    count: 0,
    category: "sport"
  },
  {
    id: 2,
    title: "Product 2",
    price: 19.99,
    marks: [3, 4, 4, 2],
    countOfOrderedUnits: 5,
    count: 0,
    category: "music"
  },
  {
    id: 3,
    title: "Product 3",
    price: 14.99,
    marks: [4, 5, 4, 3],
    countOfOrderedUnits: 12,
    count: 0,
    category: "home"
  },
  {
    id: 4,
    title: "Product 4",
    price: 24.99,
    marks: [5, 4, 5, 5],
    countOfOrderedUnits: 3,
    count: 0,
    category: "electronics"
  },
  {
    id: 5,
    title: "Product 5",
    price: 39.99,
    marks: [3, 3, 4, 2],
    countOfOrderedUnits: 7,
    count: 0,
    category: "sport"
  },
  {
    id: 6,
    title: "Product 6",
    price: 49.99,
    marks: [4, 4, 4, 3],
    countOfOrderedUnits: 2,
    count: 0,
    category: "music"
  },
  {
    id: 7,
    title: "Product 7",
    price: 29.99,
    marks: [4, 5, 5, 4],
    countOfOrderedUnits: 15,
    count: 0,
    category: "home"
  },
  {
    id: 8,
    title: "Product 8",
    price: 14.99,
    marks: [5, 4, 4, 2],
    countOfOrderedUnits: 9,
    count: 0,
    category: "electronics"
  },
  {
    id: 9,
    title: "Product 9",
    price: 9.99,
    marks: [3, 3, 3, 4],
    countOfOrderedUnits: 6,
    count: 0,
    category: "sport"
  },
  {
    id: 10,
    title: "Product 10",
    price: 19.99,
    marks: [4, 5, 5, 3],
    countOfOrderedUnits: 4,
    count: 0,
    category: "music"
  },
  {
    id: 11,
    title: "Product 11",
    price: 24.99,
    marks: [4, 4, 4, 2],
    countOfOrderedUnits: 11,
    count: 0,
    category: "home"
  },
  {
    id:  12,
    title: "Product 12",
    price: 34.99,
    marks: [5, 5, 5, 4],
    countOfOrderedUnits: 7,
    count: 0,
    category: "electronics"
  },
  {
    id: 13,
    title: "Product 13",
    price: 9.99,
    marks: [3, 3, 4, 2],
    countOfOrderedUnits: 9,
    count: 0,
    category: "sport"
  },
  {
    id: 14,
    title: "Product 14",
    price: 29.99,
    marks: [4, 4, 4, 3],
    countOfOrderedUnits: 6,
    count: 0,
    category: "music"
  },
  {
    id: 15,
    title: "Product 15",
    price: 39.99,
    marks: [5, 5, 5, 5],
    countOfOrderedUnits: 3,
    count: 0,
    category: "home"
  }
]);

//Найти все товары с ценой больше 30

db.products.find(
{  price:{$gt:30}},
{_id:0,title:1,price:1}
)

//Задать значение 10 для свойства "count" у товара с идентификатором 5
//
db.products.updateOne(
{id:3},
{$inc:{
    count:10
}}
)

db.products.find(
{id:3})
//
//Найти все товары с категорией "electronics" или "home"
//

db.products.find(
    {category:
        {$in:
            ['electronics','home']
            }
    }
)
//
//Увеличить на 1 поле "countOfOrderedUnits" у всех товаров с категорией "music"
//

db.products.updateMany(
{
    category:'music'
},
{
    $inc:{
        countOfOrderedUnits:1
    }
}
);
db.products.find();
//
//Найти все товары, у которых поле "marks" содержит значения 4 и 5
//
db.products.find(
{marks:
    {$in:
        [4,5]
        }
}
);
//
//Обновить поле "category" на "sports" для всех товаров, у которых поле "category" равно "sport"

db.products.updateMany(
{category:'sport'},
{$set:
    {
        category:'sports'
    }}
)
//Найти все товары, у которых поле "marks" не содержит значение 3
//
db.products.find(
{
    marks:{
        $ne:3
    }
}
)
//
//Обновить поле "marks" у товара с идентификатором 8, добавив значение 5
//
db.products.updateOne(
{id:8},
{$push:{marks:5}}
)
//
//Найти все товары, у которых поле "marks" содержит ровно 4 элемента
//
db.products.find(
{ marks:{$size:4}}
)
//
//Обновить поле "price" у всех товаров с категорией "home", увеличив цену на 10%
//
db.products.updateMany(
{category:'home'},
{ $mul:
    { price:1.1}
    }
)
//
//Найти все товары, у которых поле "countOfOrderedUnits" больше или равно 10
//
db.products.find(
{ countOfOrderedUnits:{$gte:10}  }
)
//
//Обновить поле "count" у всех товаров с категорией "music", увеличив его на 5
//
db.products.updateMany(
{ category:'music'},
{ $inc:
    { count: 5}}
)
//
//Найти все товары, у которых поле "marks" содержит все значения [4, 5]
//
db.products.find(
{ marks:{$in:[4,5]}}
)
db.products.find({ marks: { $all: [4, 5] } });

//
//Обновить поле "category" у всех товаров, у которых поле "category" равно "sport", заменив его на "outdoor"
//
db.products.updateMany(
{ category:'sport'},
{ $set:{category:'outdoor'}}
)
//
//Найти все товары, у которых поле "marks" содержит значения [3, 4, 5]
db.products.find({
    marks:{
        $in:[3,4,5]
    }
})
