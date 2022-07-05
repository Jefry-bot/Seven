import { Router } from "express";
import { update, deleteById, findAll, findById, save } from "../controllers/person.controller";

const router = Router()

router.get('/', findAll)
router.get('/:id', findById)
router.post('/', save)
router.delete('/:id', deleteById)
router.put('/:id', update)

export default router 