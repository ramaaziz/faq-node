import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
import Articles from "./KnowledgeBase.js";

const DataTypes = Sequelize;

const Ratings = db.define('ratings', {
    article_id:DataTypes.INTEGER,
    rating:DataTypes.INTEGER,
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

Ratings.belongsTo(Articles, { foreignKey: 'article_id', as: 'Article' });
Articles.hasMany(Ratings, { foreignKey: 'id', as: 'ratings'});

export default Ratings;

(async () => {
    await db.sync({ force: false });
}
)();