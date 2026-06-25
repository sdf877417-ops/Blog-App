import app from "./src/app.js";
import dotenv from "dotenv"
dotenv.config()

app.listen(process.env.PORT, () => {
  console.log(`server listening on PORT : ${process.env.PORT}`);
});
