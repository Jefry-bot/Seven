import { app } from "./app";
import { sequelize } from "./database";

const main = async () => {
  try {
    await sequelize.sync({force: false})

    app.listen(process.env.APP_PORT, () => {
      console.log(`Servidor running at port ${process.env.APP_PORT}`);
    });
  } catch (error) {
    console.log("Error " + error)
  }
};

main();