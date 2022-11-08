const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    }
}, 
    {
        hooks: {
            async beforeCreate(newReader) {
                newReader.password = await bcrypt.hash(newReader.password, 10);
                return newReader;
            },
            async beforeUpdate(updatedReader) {
                updatedReader.password = await bcrypt.hash(updatedReader.password, 10);
                return updatedReader;
            }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments'
})


module.exports = User;