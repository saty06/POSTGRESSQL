SELECT * FROM STUDENT.DEMO
 CREATE  FUNCTION STUDENT.SUM_DATA(A INT , B INT)
RETURNS INT AS $$
BEGIN 
RETURN A+B;
END;
$$ LANGUAGE PLPGSQL;

SELECT SUM_DATA(2,4) AS RESULT 

CREATE OR REPLACE FUNCTION STUDENT.SUB_DATA(A INT, B INT)
RETURNS  INT AS $$
BEGIN 
RETURN A-B;
END;
$$ LANGUAGE PLPGSQL
SELECT  STUDENT.SUB_DATA(29,10) AS RESULT 

CREATE OR REPLACE FUNCTION  STUDENT.MULTI_DATA(A INT, B INT)
RETURNS INT AS $$
BEGIN
RETURN A*B;
END;
$$ LANGUAGE PLPGSQL;
 SELECT  STUDENT.MULTI_DATA(12,23) AS RESULT 

