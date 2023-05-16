import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
import Articles from "./KnowledgeBase.js";

const DataTypes = Sequelize;

const Views = db.define('views', {
    article_id:DataTypes.INTEGER,
    counter:DataTypes.INTEGER,
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    },

}, {
    freezeTableName: true,
});

Views.belongsTo(Articles, { foreignKey: 'article_id', as: 'Article' });
Articles.hasMany(Views, { foreignKey: 'id', as: 'views' });

export default Views;

(async () => {
    await db.sync({ force: false });
}
)();