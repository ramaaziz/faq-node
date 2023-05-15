import express from 'express';
import articles from './KnowledgeRoute.js';
import categories from './CategoriesRoute.js';
import {token} from '../controllers/AuthController.js'


const router = express.Router();

router.post('/token', token);
router.use('/articles', articles);
router.use('/categories', categories);

export default router;