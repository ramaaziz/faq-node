import { Sequelize } from "sequelize";
import db from "../config/db.config.js";

const DataTypes = Sequelize;

const categories = db.define('category', {
    code:DataTypes.STRING,
    label:DataTypes.STRING,
    status:DataTypes.STRING,
    created_by:DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updated_by:DataTypes.STRING,
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    },
}, {
    freezeTableName: true,
});

export default categories;

(async () => {
    await db.sync({ force: false });
}
)();