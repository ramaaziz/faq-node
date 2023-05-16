import Articles from "../models/KnowledgeBase.js"
import categories from "../models/CategoriesModel.js"
import Views from "../models/ViewsModel.js"
import { Sequelize } from "sequelize";

export const list = async (req, res) => {
    try {
        const articles = await Articles.findAll({ where: { status: 'active' },
            
          });
        res.json({
            message: "Success get all articles",
            data: articles,
        });
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}

export const detail = async (req, res) => {
    try {
      const article = await Articles.findOne({
        attributes: ["id", "title", "description", "category", "content", "tags", "keywords", "status", "created_at", "updated_at", "created_by", "updated_by",
        [Sequelize.col('Category.label'), 'category_label'],
        [Sequelize.col('Category.code'), 'category_code'],
        [Sequelize.col('views.counter'), 'total_view'],],
        where: { id: req.params.id, status: 'active' },
        include: [
            { model: categories, as: 'Category', attributes: []},
            { model: Views, as: 'views', attributes: []},
          ]
      });

      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }
      res.json({
        message: "Success get article detail",
        data: article,
      });
    } catch (err) {
      res.json({ message: err.message });
    }
  };

  export const view = async (req, res) => {
    try {
      const article = await Articles.findOne({
        attributes: ["id", "title", "description", "category", "content", "tags", "keywords", "status", "created_at", "updated_at", "created_by", "updated_by",
        [Sequelize.col('Category.label'), 'category_label'],
        [Sequelize.col('Category.code'), 'category_code'],
        [Sequelize.col('views.counter'), 'total_view'],],
        where: { id: req.params.id, status: 'active' },
        include: [
            { model: categories, as: 'Category', attributes: []},
            { model: Views, as: 'views', attributes: []},
          ]
      });
      const views = await Views.findOne({
        where: { id: req.params.id },
        });
        views.counter = views.counter + 1;
        views.save();

      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }
      res.json({
        message: "Success get article detail",
        data: article,
      });
    } catch (err) {
      res.json({ message: err.message });
    }
  };

export const add = async (req, res) => {
    console.log(req.body);
    try {
        if (!req.body.title) {
            res.status(400).json({
                message: "Content can not be empty!"
            });
        }
        const article = await Articles.create({
            title: req.body.title,
            description:  req.body.description,
            category:  req.body.category,
            content:  req.body.content,
            tags:  req.body.tags,
            keywords:  req.body.keywords,
            status:  'active',
            created_by:  req.body.created_by,
        });
        res.json({
            message: "Success add new article",
            data: article,
        }
        );
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}

export const update = async (req, res) => {
    try {
        const article = await Articles.update({
            title: req.body.title,
            description:  req.body.description,
            category:  req.body.category,
            content:  req.body.content,
            tags:  req.body.tags,
            keywords:  req.body.keywords,
            status:  'active',
            updated_by:  req.body.updated_by,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Success update article",
            data: article,
        });
    } catch (err) {
        res.json({
            message: err
        })
    }
}

export const remove = async (req, res) => {
    try {
        const article = await Articles.update({
            status: 'inactive'
        }, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Success delete article",
            data: article,
        });

    } catch (err) {
        res.json({
            message: err
        })
    }
}
  
  
  
  
