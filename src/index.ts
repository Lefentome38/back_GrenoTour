import express from "express";
import 'dotenv/config';
import cors from "cors";
import bodyParser from "body-parser";
import { DataTypes, Sequelize } from "sequelize";
import { UserModel } from "./model/User";
import { authRouter } from "./router/authentification";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT ? parseInt(process.env.PORT as string) : 3000

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite",
  })

// Conserver mes données
 sequelize.sync()
// Reset des données
//sequelize.sync({ force: true })

export const User = UserModel(sequelize);
const apiRouter = express.Router();
apiRouter.use('/auth', authRouter);

app.use("/api", apiRouter);

app.listen(port, () => {
    console.log('serveur running on port : ' + port);
})