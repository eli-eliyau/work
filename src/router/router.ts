import { Router, Request, Response, NextFunction } from "express";
import { playersData } from "../data/data";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(playersData);
});

router.get("/sorted_by_name", (req: Request, res: Response, next: NextFunction) => {
  const arrData = playersData.sort((a, b) => (a.first_name[0] > b.first_name[0] ? 1 : -1));
  res.send(arrData);
});

router.post("/get_players_by_group_name", (req: Request, res: Response, next: NextFunction) => {
  const arrfindGroup = playersData.filter((i) => {
    if (i.team.full_name === req.body.full_name) return i;
  });
  res.send(arrfindGroup);
});

router.post("/get_players_by_weight_range", (req: Request, res: Response, next: NextFunction) => {
  const arrfind = playersData.filter((i) => {
    if (i.weight_pounds) {
      if (i.weight_pounds > req.body.weight_pounds1 && i.weight_pounds < req.body.weight_pounds2)
        return i;
    }
  });
  res.send(arrfind);
});

router.post("/is_exists", (req: Request, res: Response, next: NextFunction) => {
  let flag: boolean = false;
  playersData.find((i) => {
    if (i.first_name === req.body.first_name && i.last_name === req.body.last_name) flag = true;
  });
  res.send(flag);
});

export default router;
