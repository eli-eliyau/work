"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data/data");
// const routerGet: Router = Router();
const routerGet = (0, express_1.default)();
routerGet.get("/", (req, res, next) => {
    res.send(data_1.playersData);
});
exports.default = routerGet;
