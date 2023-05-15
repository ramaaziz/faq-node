import {  Sequelize } from "sequelize";
import db from "../config/db.config.js";
import categories from "./CategoriesModel.js";

const { DataTypes } = Sequelize;

const Articles = db.define('articles', {
    // articleId: {
    //     type: DataTypes.INTEGER,
    //     field: 'id',
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    title:DataTypes.STRING,
    description:DataTypes.STRING,
    categoryId: {
        type: DataTypes.INTEGER,
        field: 'category',
    },
    content:DataTypes.STRING,
    tags:DataTypes.STRING,
    keywords:DataTypes.STRING,
    status:DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    created_by:DataTypes.STRING,
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    },
    updated_by:DataTypes.STRING,
}, {
    freezeTableName: true,
});

Articles.belongsTo(categories, { foreignKey: 'category', as: 'Category', targetKey: 'id' });
categories.hasMany(Articles);


export default Articles;

(async () => {
    await db.sync({ force: false });
}
)();

