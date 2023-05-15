import express from "express";
import { list, detail, add, update, remove } from '../controllers/KnowledgeBaseController.js'
import authentification from "../middleware/authentification.js";

const router = express.Router();

router.get('/', authentification, list);
router.get('/:id', authentification, detail);
router.post('/add', authentification, add);
router.post('/edit/:id', authentification, update);
router.post('/remove/:id', authentification, remove);

export default router;