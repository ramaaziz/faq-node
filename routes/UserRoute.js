import express from "express";
import { list, detail, add, update, remove } from '../controllers/KnowledgeBaseController.js'
// import authentification from "../middleware/authentification.js";

const router = express.Router();

router.get('/articles/', list);
router.get('/articles/:id', detail);
router.post('/articles/add', add);
router.post('/articles/edit/:id', update);
router.post('/articles/remove/:id', remove);

export default router;