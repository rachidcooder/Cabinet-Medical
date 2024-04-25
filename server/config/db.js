import mongoose from "mongoose";

const ConnectDB = () => {
  mongoose.connect(process.env.MONGO_URL, {
  }).then(() => {
    console.log("DB connected");
  }).catch((err) => {
    console.log("Error DB :", err);
  })
}

export default ConnectDB