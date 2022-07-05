import exprees from "express";
import "../configurations/config_env";
import routerPerson from "../routes/person.routes";
import routerPet from "../routes/pet.routes"

const app = exprees();

app.use(exprees.json());
app.use("/api/persons", routerPerson);
app.use("/api/tasks", routerPet);

export { app };
