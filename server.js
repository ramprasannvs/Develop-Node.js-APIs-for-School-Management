import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import schoolRoute from "./routes/school.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use("/", schoolRoute);
// default route
app.get("/", (req, res) => {
    res.send(
        "School Management API Running"
    );
});
// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(
        `Server Running On Port ${PORT}`
    );

});