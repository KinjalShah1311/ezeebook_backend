import express, { Response, Request } from "express";
import ReviewsDataService from "../controllers/reviews.service";
import { BaseReview } from "../models/reviews.interface";
import RoomsDataService from "../controllers/rooms.service";

export const reviewRouter = express.Router();

reviewRouter.get("/:roomID/reviews", async (req: Request, res: Response) => {
  const roomID = req.params.roomID;
  try {
    const room = await RoomsDataService.getRoom(roomID);
    if (!room) {
      res.status(404).send("Room not found");
    } else {
      room.on(
        "value",
        function (snapshot) {
          console.log(snapshot.val());
        },
        function (e) {
          console.log("The read failed: " + e);
        }
      );
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

reviewRouter.get(
  "/:roomID/reviews/:id",
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const roomID = req.params.roomID;
    try {
      const review = await ReviewsDataService.getReview(id, roomID);
      if (!review) {
        res.status(404).send("Review not found");
      } else {
        review.on(
          "value",
          function (snapshot) {
            res.status(200).send(snapshot.val());
          },
          function (e) {
            res.status(404).send(e);
          }
        );
      }
    } catch (e) {
      console.log("Error happened: ", e.message);
      //res.status(500).send(e.message);
    }
  }
);

reviewRouter.post("/:roomID/reviews/", async (req: Request, res: Response) => {
  try {
    const basereview: BaseReview = req.body;
    const roomID = req.params.roomID;
    const postedOn = new Date().valueOf();
    console.log(postedOn);

    const review = { ...basereview, roomID, postedOn };

    const newReview = await ReviewsDataService.createReview(review);

    newReview.on(
      "value",
      function (snapshot) {
        res.status(201).send(snapshot.val());
      },
      function (e) {
        console.log("The read failed: " + e);
      }
    );
  } catch (e) {
    res.status(500).send(e.message);
  }
});

reviewRouter.put(
  "/:roomID/reviews/:id",
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const roomID = req.params.roomID;
    try {
      const reviewUpdate: BaseReview = req.body;

      const existingReview = await ReviewsDataService.getReview(id, roomID);

      if (!existingReview) {
        const newReview = await ReviewsDataService.createReview(reviewUpdate);
        res.status(201).json(newReview);
      } else {
        const updatedReview = await ReviewsDataService.updateReview(
          id,
          reviewUpdate
        );
        return res.status(200).json(updatedReview);
      }
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
);

reviewRouter.delete(
  "/:roomID/reviews/:id",
  async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await ReviewsDataService.deleteReview(id);

      res.sendStatus(204);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
);
