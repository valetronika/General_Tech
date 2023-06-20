-- 1) вывести название продукта, который чаще всего встречается в заказах

select 
	title
from products 
where id =(
	select 
		product_id 
	from  orders 
	group by product_id 
	order by 	count(product_id)  desc 
	limit 1);


-- 2) вывести название продукта, который покупают чаще всего (нужно посчитать общее количество купленных единиц)

select 
	title
from products 
where id =(
	select 
		product_id 	
	from orders 
	group by product_id 
	order  by sum(product_count)  desc 
	limit 1);

-- 3) вывести общую выручку магазина. Сумма всех купленных единиц товара.
select 
	sum(total_price_by_product) as total_sum
from(
	select 
		t1.title ,
		t2.product_count *t1.price as total_price_by_product
	from  products t1
	inner join orders t2
	on t1.id =t2.product_id 
	group  by t2.product_id ,total_price_by_product) t2;
	

-- 4) определить сумму выручки за онлайн продажи (online) и за продажи в магазине (direct)
select 
	order_type,
	sum(sum_) sum_total
from(
	select 
		t1.order_type ,
		t1.product_count *t2.price  as sum_ 
	from  orders t1
	inner join products t2
	on t1.product_id =t2.id ) orders_sum
	group by order_type;



