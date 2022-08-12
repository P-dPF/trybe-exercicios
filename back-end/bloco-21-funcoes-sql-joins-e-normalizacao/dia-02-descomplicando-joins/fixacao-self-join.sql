# 1- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.

SELECT 
	CONCAT(Employees.first_name, '', Employees.last_name) Employees,
    CONCAT(Managers.first_name, '', Managers.last_name) Managers
FROM hr.employees AS Employees
INNER JOIN hr.employees AS Managers ON Employees.manager_id = Managers.employee_id
AND Employees.department_id <> Managers.department_id;

# 2- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.

SELECT
	CONCAT(Managers.first_name, '', Managers.last_name) Managers,
    COUNT(*) AS qtde_liderados
FROM hr.employees AS Managers
INNER JOIN hr.employees AS Employees ON Employees.manager_id = Managers.employee_id
GROUP BY Managers.employee_id;