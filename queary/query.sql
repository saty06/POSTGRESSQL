--  ddl => data defination language  CATD=> c=create A=> alter T => truncate D=> drop
-- create schema 
create schema student;
-- create table with help of schema
create table student.studentInfoData(id int primary key,first_name varchar(50), last_name varchar(200), email varchar(20) not null primary key )
-- alter => to change something in table or modify 
alter table student.studentInfoData rename studentInfoData to studentInfoData

