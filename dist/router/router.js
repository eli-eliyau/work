"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data/data");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.send(data_1.playersData);
});
router.get("/sorted_by_name", (req, res, next) => {
    const arrData = data_1.playersData.sort((a, b) => (a.first_name[0] > b.first_name[0] ? 1 : -1));
    res.send(arrData);
});
router.post("/get_players_by_group_name", (req, res, next) => {
    const arrfindGroup = data_1.playersData.filter((i) => {
        if (i.team.full_name === req.body.full_name)
            return i;
    });
    res.send(arrfindGroup);
});
router.post("/get_players_by_weight_range", (req, res, next) => {
    const arrfind = data_1.playersData.filter((i) => {
        if (i.weight_pounds) {
            if (i.weight_pounds > req.body.weight_pounds1 && i.weight_pounds < req.body.weight_pounds2)
                return i;
        }
    });
    res.send(arrfind);
});
router.post("/is_exists", (req, res, next) => {
    let flag = false;
    data_1.playersData.find((i) => {
        if (i.first_name === req.body.first_name && i.last_name === req.body.last_name)
            flag = true;
    });
    res.send(flag);
});
exports.default = router;
