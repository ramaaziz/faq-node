import express from 'express';
import articles from './KnowledgeRoute.js';
import categories from './CategoriesRoute.js';

const router = express.Router();

router.use('/articles', articles);
router.use('/categories', categories);

export default router;