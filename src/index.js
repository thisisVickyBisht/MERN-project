import dotenv from "dotenv";
import { connectDB } from "./db/dbConnection.js";
import { app } from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

//connect MONGODB
connectDB()
  .then(() =>
    console.log("MONGODB Connected!")
  )
  .catch((error) =>
    console.log("MongoDB Connection Failed !!!", error.message)
  );

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
