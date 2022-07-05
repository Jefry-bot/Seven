import { Request, Response } from "express";
import * as builder from "../utilities/response_builder";
import { PetService } from "../services/pet.service";

const service = new PetService();

const findAll = (_: Request, res: Response): void => {
  service.findAll().then((pets) => res.json(builder.success(pets)));
};

const findById = (req: Request, res: Response): void => {
  service
    .findById(+req.params.id)
    .then((pet) => res.json(builder.success(pet)));
};

const save = (req: Request, res: Response): void => {
  service.save(req.body).then((pet) => res.json(builder.success(pet)));
};

export { findAll, findById, save };