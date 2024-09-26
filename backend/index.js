import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import bookRouter from "./route/book.route.js" ;
import userRouter from "./route/user.route.js" ;
dotenv.config();


const app = new express();

const port = process.env.PORT || 4000;
// const URI = process.env.MONGOURI;
const ATLASURI = process.env.ATLASURL ;

//MongoDB
main()
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
async function main() {
  await mongoose.connect(ATLASURI);
}


app.use(express.json()) ;
app.use(cors()) ;

//Routes
app.use("/book",bookRouter) ;
app.use("/user",userRouter) ;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
