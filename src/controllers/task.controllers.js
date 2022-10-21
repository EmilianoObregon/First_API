import {pool} from '../db.js'

export const createTask = async(req, res, next) => {
    try{

        const {name , description} = req.body;
        const [rows] = await pool.query('INSERT INTO task (name, description) VALUES (?, ?)', [name, description]);
        res.send({
            id: rows.insertId8,
            name,
            description
        })
    }catch{
        return res.status(500).json({
            message : "some error occurred"
        })
    }
};


