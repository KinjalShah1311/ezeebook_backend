"use strict";
exports.__esModule = true;
const { firebase, database } = require("../../firebase")
var db = database.ref("/images");
var ImagesDataService = /** @class */ (function () {
    function ImagesDataService() {
    }
    ImagesDataService.prototype.getAllImages = function () {
        return db;
    };
    ImagesDataService.prototype.getImage = function (key) {
        return db.child(key);
    };
    ImagesDataService.prototype.createImage = function (image) {
        return db.push(image);
    };
    ImagesDataService.prototype.updateImage = function (key, value) {
        return db.child(key).update(value);
    };
    ImagesDataService.prototype.deleteImage = function (key) {
        return db.child(key).remove();
    };
    ImagesDataService.prototype.deleteAllImages = function () {
        return db.remove();
    };
    return ImagesDataService;
}());
exports["default"] = new ImagesDataService();
