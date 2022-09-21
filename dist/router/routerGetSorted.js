"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data/data");
const routerGetSorted = (0, express_1.Router)();
routerGetSorted.get("/", (req, res, next) => {
    const arrDataSort = data_1.playersData.sort((a, b) => (a.first_name[0] > b.first_name[0] ? 1 : -1));
    return res.send(arrDataSort);
});
exports.default = routerGetSorted;
