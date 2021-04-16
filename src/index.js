"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var express_1 = require("express");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
var users_router_1 = require("./routes/users.router");
var rooms_router_1 = require("./routes/rooms.router");
var reviews_router_1 = require("./routes/reviews.router");
var reservations_router_1 = require("./routes/reservations.router");
var images_router_1 = require("./routes/images.router");
dotenv.config();
if (!process.env.API_PORT) {
    process.exit(1);
}
var API_PORT = parseInt(process.env.API_PORT, 10) || 7000;
var app = express_1["default"]();
app.use(helmet_1["default"]());
app.use(cors_1["default"]());
app.use(express_1["default"].json());
app.use("/api/users", users_router_1.userRouter);
app.use("/api/rooms", rooms_router_1.roomRouter);
app.use("/api/rooms", reviews_router_1.reviewRouter);
app.use("/api/reservations", reservations_router_1.reservationRouter);
app.use("/api/rooms", images_router_1.imageRouter);
app.listen(process.env.API_PORT || 7000, function () {
    console.log("Listening on port 7000");
});
