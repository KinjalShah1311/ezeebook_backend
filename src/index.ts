import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { userRouter } from "./routes/users.router";
import { roomRouter } from "./routes/rooms.router";
import { reviewRouter } from "./routes/reviews.router";
import {reservationRouter} from "./routes/reservations.router";
import {imageRouter} from "./routes/images.router";
import path from "path";

dotenv.config();

if (!process.env.API_PORT) {
    process.exit(1);
}
// const API_PORT: number = parseInt(process.env.API_PORT as string, 10);
const API_PORT = process.env.API_PORT || 7000;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/rooms", reviewRouter);
app.use("/api/reservations", reservationRouter);
app.use("/api/rooms", imageRouter);

app.listen(API_PORT, () => {
    console.log(`Listening on port ${API_PORT}`);
});

app.use('/public', express.static(path.join(__dirname, 'public')));