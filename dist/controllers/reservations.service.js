"use strict";
exports.__esModule = true;
const { firebase, database } = require("../../firebase")
var db = database.ref("/reservations");
var ReservationsDataService = /** @class */ (function () {
    function ReservationsDataService() {
    }
    ReservationsDataService.prototype.getAllReservations = function () {
        return db;
    };
    ReservationsDataService.prototype.getReservation = function (key) {
        return db.child(key);
    };
    ReservationsDataService.prototype.createReservation = function (reservation) {
        return db.push(reservation);
    };
    ReservationsDataService.prototype.updateReservation = function (key, value) {
        return db.child(key).update(value);
    };
    ReservationsDataService.prototype.deleteReservation = function (key) {
        return db.child(key).remove();
    };
    ReservationsDataService.prototype.deleteAllReservations = function () {
        return db.remove();
    };
    return ReservationsDataService;
}());
exports["default"] = new ReservationsDataService();
