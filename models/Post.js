const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title_head: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    content_box: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
})


module.exports = Post;