import express from "express";
import { list, detail, add, update, remove } from '../controllers/CategoriesController.js'

const router = express.Router();

router.get('/', list);
router.get('/:id', detail);
router.post('/add', add);
router.post('/edit/:id', update);
router.post('/remove/:id', remove);

export default router;