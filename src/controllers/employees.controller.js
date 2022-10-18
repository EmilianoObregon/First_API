import {pool} from '../db.js'

export const getEmployees = async (req, res, next) => {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.json(rows);
};

export const getEmployeebyId = async (req, res, next) => {
    console.log(req.params)
    const [rows] = await pool.query(`SELECT * FROM employee WHERE id = ${req.params.id}`);
    
    if(rows.length == 0){
        return res.status(404).json({message: 'Employee not found'});
    }
    
    res.json(rows);
}

export const createEmployee = async(req, res, next) => {
    const {name, salary} = req.body;
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    res.send({ 
        id: rows.insertId8,
        name,
        salary,
    })
};
export const deleteEmployee = async(req, res, next) => {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);
    console.log(result);

    if(result.affectedRows === 0) return res.status(404).json({ message : 'Employee not found' });

    res.sendStatus(204);

};
export const updateEmployee = async (req, res, next) => {
    const {id} = req.params;
    const {name, salary} = req.body;
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary)  WHERE id = ?', [name, salary, id])

    if(result.affectedRows === 0) return res.status(404).json({ message : 'Employee not found' });

    const [rows] = await pool.query('SELECT * FROM Employee WHERE id = ?', [id]);

    res.json(rows[0]);

};
