
-- Найти все заказы, содержащие продукт с id 1
select distinct 
    *
FROM w3schools.order_details
where  ProductID  =1;
-- Вывести ко-во заказов, закрепленных за каждым менеджером

select
	t3.ContactName, 
    t1.SupplierID,
    count(t2.OrderID) as deals
FROM products t1
left join order_details t2
on t1.ProductID = t2.ProductID 
left join  suppliers t3
on t1.SupplierID  = t3.SupplierID 
group by t1.SupplierID; 

-- Вывести стоимость и название двух самых дешевых товаров из Germany
select distinct 
	t1.ProductName ,
    t1.Price 
FROM products t1
left join  suppliers t2
on t1.SupplierID = t2.SupplierID 
where t2.Country = 'Germany' 
order by t1.Price 
limit 2;

-- Вывести ко-во заказов, которое компания Speedy Express доставила в Brazil


SELECT
    count(*)
from orders o 
left join shippers s
on o.ShipperID = s.ShipperID 
left join  customers c 
on c.CustomerID = o.CustomerID 
where s.ShipperName ='Speedy Express' 
and c.Country ='Brazil' ;

-- Вывести среднюю стоимость напитка из USA

SELECT
    avg(t1.price) 
FROM products t1
left join categories  t2
on t1.CategoryID = t2.CategoryID 
left join  suppliers t3
on t1.SupplierID = t3.SupplierID
where t3.Country ='USA' 
and t2.CategoryID  = 1;












