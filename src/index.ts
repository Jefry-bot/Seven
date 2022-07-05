import { app } from "./app";
import 'colors'

const main = async () => {
  try {
    app.listen(process.env.APP_PORT, () => {
      console.clear()
      console.log(`Servidor running at port ${process.env.APP_PORT}`.green);
    });
  } catch (error) {
    console.log("Error " + error)
  }
};

main();