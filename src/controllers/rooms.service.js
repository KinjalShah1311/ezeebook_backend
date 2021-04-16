"use strict";
exports.__esModule = true;
var firebase_1 = require("../../firebase");
// let rooms: Rooms = {
//     1: {
//         roomID: 1,
//         roomType: "House",
//         rating:4.5,
//         totalOccupancy: 10,
//         totalBathrooms: 3,
//         totalBedrooms: 5,
//         summary: "This house has a great view",
//         address: "Address 1",
//         hasTV: true,
//         hasKitchen: true,
//         hasAirConditioner: true,
//         hasInternet: true,
//         price: 500,
//         longitude: -80.512658,
//         latitude: 43.413714
//     }
// }
var db = firebase_1["default"].database().ref("/rooms");
var RoomsDataService = /** @class */ (function () {
    function RoomsDataService() {
    }
    RoomsDataService.prototype.getAllRooms = function () {
        return db;
    };
    RoomsDataService.prototype.getRoom = function (key) {
        return db.child(key);
    };
    RoomsDataService.prototype.createRoom = function (room) {
        return db.push(room);
    };
    RoomsDataService.prototype.updateRoom = function (key, value) {
        return db.child(key).update(value);
    };
    RoomsDataService.prototype.deleteRoom = function (key) {
        return db.child(key).remove();
    };
    RoomsDataService.prototype.deleteAllRooms = function () {
        return db.remove();
    };
    return RoomsDataService;
}());
exports["default"] = new RoomsDataService();
// export const getAllRooms = async (): Promise<Room[]> => Object.values(rooms);
// export const getRoom = async (id: number): Promise<Room> => rooms[id];
// export const createRoom = async (newRoom: BaseRoom): Promise<Room> => {
//     const roomID= new Date().valueOf();
//     rooms[roomID] = {
//         roomID,
//         ...newRoom
//     };
//     return rooms[roomID];
// }
// export const updateRoom = async (roomID: number, roomUpdate: BaseRoom): Promise<Room | null> => {
//     const room = await getRoom(roomID);
//     if(!room) {
//         return null;
//     }
//     rooms[roomID] = {roomID, ...roomUpdate};
//     return rooms[roomID];
// }
// export const removeRoom = async (roomID: number): Promise<null | void> =>{
//     const room = await getRoom(roomID);
//     if(!room) {
//         return null;
//     }
//     delete rooms[roomID];
// }
