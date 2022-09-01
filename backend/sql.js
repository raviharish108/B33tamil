task1
SELECT title FROM movies;

SELECT director FROM movies;

SELECT title,director FROM movies;

SELECT title,year FROM movies;

SELECT * FROM movies;

task2
SELECT * FROM movies
where id=6;

SELECT * FROM movies
where year between 2000 and 2010;

SELECT * FROM movies
where year not between 2000 and 2010;

SELECT * FROM movies
order by year
limit 5;

task3
SELECT * FROM movies
where Title like "%Toy Story%";

SELECT * FROM movies
where director like "John Lasseter";

SELECT * FROM movies
where director not like "John Lasseter";

SELECT * FROM movies
where title  like "Wall-%";

task4
SELECT  distinct director FROM movies
ORDER BY director ;

SELECT * FROM movies
order by year desc
limit 4;

SELECT * FROM movies
order by title
limit 5;

SELECT * FROM movies
order by title
limit 5
offset 5;

task5
SELECT * FROM north_american_cities
where country like "canada";

SELECT * FROM north_american_cities
where country like "united states"
order by latitude desc;

SELECT * FROM North_american_cities
order by longitude 
limit 6;

SELECT * FROM North_american_cities
where country like "mexico"
order by population desc
limit 2;

SELECT * FROM North_american_cities
where country like "united states"
order by population desc
limit 2
offset 2;

task 6
SELECT title,domestic_sales,international_sales
FROM boxoffice
INNER JOIN Movies 
ON movies.id=boxoffice.movie_id;

SELECT title,domestic_sales,international_sales
FROM boxoffice
INNER JOIN Movies 
ON movies.id=boxoffice.movie_id
where domestic_sales<international_sales;

select title,rating from movies
inner join boxoffice
on movies.id=boxoffice.movie_id
order by rating desc;

task 7
SELECT distinct building FROM employees;

SELECT * FROM buildings;

select distinct building_name,role from (buildings
    left join employees
    on buildings.building_name=employees.building);

task8
SELECT role,name FROM employees
where building is null;

SELECT building_name FROM buildings 
left join employees
on buildings.building_name=employees.building
where role is null;

 task9  
 SELECT title,((domestic_sales+international_sales)*0.000001) FROM movies
left join boxoffice
on movies.id=boxoffice.movie_id;

select title,(rating*10) from movies
inner join boxoffice
on movies.id=boxoffice.movie_id

select title,year from movies
where year%2==0;

task 10
SELECT max(Years_employed) FROM employees;

SELECT role,avg(Years_employed)FROM employees
group by role;

select building,sum(Years_employed) from employees
group by building

task 11
SELECT count(role) FROM employees
where role like "artist";

SELECT role,count(role)FROM employees
group by role;

SELECT role,sum(Years_employed)FROM employees
where role like "engineer"
group by role;

task 12
SELECT director,count(title) FROM movies
group by director;

select director,sum(domestic_sales+international_sales) from movies
inner join boxoffice
on movies.id=boxoffice.movie_id
group by director;

task 13
INSERT INTO Movies
VALUES(4,"Toy Story 4","john",2020,90)

INSERT INTO Boxoffice
VALUES(4,8.7,340000000,270000000)

task 14
UPDATE Movies
SET director ="John Lasseter" 
WHERE id=2;

UPDATE Movies
SET year =1999 
WHERE title like "toy story 2";

task 15
DELETE FROM movies 
where year<=2005;

DELETE  from MOVIES
where director like "Andrew Stanton";

task 16
CREATE TABLE Database  (
    Name TEXT,
    Version FLOAT,
    Download_count INTEGER
    
 );

 task 17
 ALTER TABLE Movies
  ADD COLUMN Aspect_ratio FLOAT DEFAULT 3;

  ALTER TABLE Movies
ADD COLUMN Language TEXT  DEFAULT "English";

task 18
DROP TABLE Movies;

DROP TABLE Boxoffice;