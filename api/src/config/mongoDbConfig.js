import mongoose from "mongoose";

export const connectMongo = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB connected"))
    .catch((erro) => console.log(erro));
};
