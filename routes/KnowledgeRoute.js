import express from "express";
import { list, detail, add, update, remove, view, rating } from '../controllers/KnowledgeBaseController.js'
import authentification from "../middleware/authentification.js";

const router = express.Router();

router.get('/', authentification, list);
router.get('/:id', authentification, detail);
router.get('/detail/:id', authentification, view)
router.post('/add', authentification, add);
router.post('/edit/:id', authentification, update);
router.post('/remove/:id', authentification, remove);
router.post('/rating/:id', authentification, rating);


export default router;