import Categories from '../models/CategoriesModel.js';

export const list = async (req, res) => {
    try {
        const categories = await Categories.findAll({ where: { status: 'active' },
            attributes: ["id", "code", "label", "status", "created_at", "updated_at", "created_by", "updated_by"]
          });
        res.json({
            message: "Success get all categories",
            data: categories,
        });
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}

export const detail = async (req, res) => {
    try {
      const category = await Categories.findOne({
        where: { id: req.params.id, status: 'active' },
        attributes: ["id", "code", "label", "status", "created_at", "updated_at", "created_by", "updated_by"]
      });
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.json({
        message: "Success get category detail",
        data: category,
      });
    } catch (err) {
      res.json({ message: err.message });
    }
  }

export const add = async (req, res) => {
    console.log(req.body);
    try {
        if (!req.body.label) {
            res.status(400).json({
                message: "Content can not be empty!"
            });
        }
        const category = await Categories.create({
            code: req.body.code,
            label:  req.body.label,
            status:  'active',
        });
        res.json({
            message: "Success add new category",
            data: category,
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
        const category = await Categories.findOne({ where: { id: req.params.id } });
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }
        const updatedCategory = await Categories.update({
            code: req.body.code,
            label:  req.body.label,
            status:  req.body.status,
        }, {
            where: { id: req.params.id }
        });
        res.json({
            message: "Success update category",
            data: updatedCategory,
        });
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}

export const remove = async (req, res) => {
    try {
        const category = await Categories.findOne({ where: { id: req.params.id } });
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }
        const updatedCategory = await Categories.update({
            status:  'inactive',
        }, {
            where: { id: req.params.id }
        });
        res.json({
            message: "Success delete category",
            data: updatedCategory,
        });
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}