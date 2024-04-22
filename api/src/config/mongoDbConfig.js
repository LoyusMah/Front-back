import mongoose from "mongoose";

export const connectMongo = () => {
  const uri = "mongodb://localhost:27017/feb-ntdl24";
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((erro) => console.log(erro));
};
