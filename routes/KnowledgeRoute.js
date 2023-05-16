import express from "express";
import {  list, detail, add, update, remove, view, rating, listPopular } from '../controllers/KnowledgeBaseController.js'
import authentification from "../middleware/authentification.js";

const router = express.Router();

router.get('/', authentification, list);
router.get('/detail/:id', authentification, detail);
router.get('/popular', authentification, listPopular);
router.get('/view/:id', authentification, view)
router.post('/add', authentification, add);
router.post('/edit/:id', authentification, update);
router.post('/remove/:id', authentification, remove);
router.post('/rating/:id', authentification, rating);


export default router;