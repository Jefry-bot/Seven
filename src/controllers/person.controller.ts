import { Response, Request } from "express";
import * as builder from "../utilities/response_builder";
import { PersonService } from "../services/person.service";

const service = new PersonService();

export const findAll = (_: Request, res: Response) => {
  service.findAll().then((persons) => {
    res.json(persons);
  });
};

export const save = (req: Request, res: Response) => {
  service.save(req.body).then((person) => res.json(builder.success(person)));
};

export const findById = (req: Request, res: Response) => {
  service
    .findById(+req.params.id)
    .then((person) => res.json(builder.success(person)));
};

export const deleteById = (req: Request, res: Response) => {
  service.deleteById(+req.params.id);
  res.json(builder.success(null));
};

export const update = (req: Request, res: Response) => {
  service
    .update(+req.params.id, req.body)
    .then((person) => res.json(builder.success(person)));
};
