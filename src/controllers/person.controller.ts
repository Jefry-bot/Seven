import { Response, Request } from "express";
import * as builder from "../utilities/response_builder";
import { PersonService } from "../services/person.service";

const service = new PersonService();

export const findAll = (_: Request, res: Response): void => {  
  service.findAll().then((persons) => {
    res.json(builder.success(persons));
  });
};

export const save = (req: Request, res: Response): void => {
  service.save(req.body).then((person) => res.json(builder.success(person)));
};

export const findById = (req: Request, res: Response): void => {
  service
    .findById(+req.params.id)
    .then((person) => res.json(builder.success(person)));
};

export const deleteById = (req: Request, res: Response): void => {
  service.deleteById(+req.params.id);
  res.json(builder.success(null));
};

export const update = (req: Request, res: Response) => {
  service
    .update(+req.params.id, req.body)
    .then((person) => res.json(builder.success(person)));
};
