import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js';

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

User.sync({
    force: false
})

console.log('Tabla usuarios creada y sincronizada')
export default User;