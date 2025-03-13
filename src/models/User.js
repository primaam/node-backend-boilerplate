const { DataTypes } = require('sequelize');
const sequelizeDb = require('../config/db')

const User = sequelizeDb.define('users', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'admin',
        }
    },{
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
)

// User.hasMany(Task, {foreignKey: "id", as: 'user_id'})

// Task.BelongsTo(User, {foreignKey: "id", as: 'user_id'})

module.exports = User