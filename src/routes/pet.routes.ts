import { Router } from "express";
import {/*
    update,
    deleteById,*/
    findAll,
    findById,
    save
  } from "../controllers/pet.controller";

const router = Router();

router.get("/", findAll);
router.post("/", save);
router.get("/:id", findById);/*
router.delete("/:id", deleteById);
router.put("/:id", update);*/

export default router;
