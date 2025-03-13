const { DataTypes } = require('sequelize');
const sequelizeDb = require('../config/db')

const Task = sequelizeDb.define('tasks', {
        task_id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    },{
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
)

module.exports = Task