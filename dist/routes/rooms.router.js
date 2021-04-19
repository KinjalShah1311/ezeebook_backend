"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.roomRouter = void 0;
var express_1 = require("express");
var rooms_service_1 = require("../controllers/rooms.service");
exports.roomRouter = express_1.Router();
exports.roomRouter.get("/", function (req, res) {
    return __awaiter(void 0, void 0, void 0, function () {
        var room, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, rooms_service_1["default"].getAllRooms()];
                case 1:
                    room = _a.sent();
                    if (!room) {
                        res.status(404).send("Room not found");
                    }
                    else {
                        room.on("value", function (snapshot) {
                            res.status(200).send(snapshot.val());
                        }, function (e) {
                            console.log("The read failed: " + e);
                        });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    res.status(500).send(e_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
exports.roomRouter.get("/:id", function (req, res) {
    return __awaiter(void 0, void 0, void 0, function () {
        var id, room, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, rooms_service_1["default"].getRoom(id)];
                case 2:
                    room = _a.sent();
                    if (!room) {
                        res.status(404).send("Room not found");
                    }
                    else {
                        room.on("value", function (snapshot) {
                            res.status(200).send(snapshot.val());
                        }, function (e) {
                            console.log("The read failed: " + e);
                        });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    //console.log('Error happened: ', e.message);
                    res.status(500).send(e_2.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
exports.roomRouter.post("/", function (req, res) {
    return __awaiter(void 0, void 0, void 0, function () {
        var room, newRoom, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    room = req.body;
                    return [4 /*yield*/, rooms_service_1["default"].createRoom(room)];
                case 1:
                    newRoom = _a.sent();
                    res.status(201).json(newRoom.on("value", function (snapshot) {
                        console.log(snapshot.val());
                    }, function (e) {
                        console.log("The read failed: " + e);
                    }));
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    res.status(500).send(e_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
exports.roomRouter.put("/:id", function (req, res) {
    return __awaiter(void 0, void 0, void 0, function () {
        var id, roomUpdate, existingRoom, newRoom, updatedRoom, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    roomUpdate = req.body;
                    return [4 /*yield*/, rooms_service_1["default"].getRoom(id)];
                case 2:
                    existingRoom = _a.sent();
                    if (!!existingRoom) return [3 /*break*/, 4];
                    return [4 /*yield*/, rooms_service_1["default"].createRoom(roomUpdate)];
                case 3:
                    newRoom = _a.sent();
                    res.status(201).json(newRoom);
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, rooms_service_1["default"].updateRoom(id, roomUpdate)];
                case 5:
                    updatedRoom = _a.sent();
                    return [2 /*return*/, res.status(200).json(updatedRoom)];
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_4 = _a.sent();
                    res.status(500).send(e_4.message);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
});
exports.roomRouter["delete"]("/:id", function (req, res) {
    return __awaiter(void 0, void 0, void 0, function () {
        var id, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, rooms_service_1["default"].deleteRoom(id)];
                case 1:
                    _a.sent();
                    res.status(204).send("Room successfully deleted.");
                    return [3 /*break*/, 3];
                case 2:
                    e_5 = _a.sent();
                    res.status(500).send(e_5.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
