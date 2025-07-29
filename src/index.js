import app from "./app.js";
import { sequelize } from "./database/database.js";

//MODELOS
// import "./models/User.js";
// import "./models/Product.js";
// import "./models/Cart.js";
// import "./models/index.js";

//FUNCION QUE CONECTA A LA BD
async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida con la base de datos");

    await sequelize.sync({ force: false });
    console.log("Tablas sincronizadas");

    app.listen(3000);
    console.log("Servidor escuchando en el puerto 3000");
  } catch (error) {
    console.error("Error al conectar con la base:", error);
  }
}

main();
