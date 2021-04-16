"use strict";
exports.__esModule = true;
const { firebase, database } = require("../../firebase")
var db = database.ref("/reviews");
var ReviewsDataService = /** @class */ (function () {
    function ReviewsDataService() {
    }
    ReviewsDataService.prototype.getAllReviews = function (roomID) {
        return db;
    };
    ReviewsDataService.prototype.getReview = function (key, roomID) {
        return db.child(key);
    };
    ReviewsDataService.prototype.createReview = function (review) {
        return db.push(review);
    };
    ReviewsDataService.prototype.updateReview = function (key, value) {
        return db.child(key).update(value);
    };
    ReviewsDataService.prototype.deleteReview = function (key) {
        return db.child(key).remove();
    };
    ReviewsDataService.prototype.deleteAllReviews = function () {
        return db.remove();
    };
    return ReviewsDataService;
}());
exports["default"] = new ReviewsDataService();
// let reviews: Reviews = {
//     1: {
//         reviewID: 1,
//         roomID: 1,
//         rating: 4,
//         comments: "Great room"
//     }
// }
// export const getReview = async (id: number): Promise<Review> => reviews[id];
// export const createReview = async (newReview: BaseReview, roomID: number): Promise<Review> => {
//     const reviewID = new Date().valueOf();
//     reviews[reviewID] = {
//         reviewID,
//         roomID,
//         ...newReview
//     };
//     return reviews[reviewID];
// }
// export const updateReview = async (reviewID: number, reviewUpdate: BaseReview, roomID: number): Promise<Review | null> => {
//     const review = await getReview(reviewID);
//     if (!review) {
//         return null;
//     }
//     reviews[reviewID] = { reviewID, roomID, ...reviewUpdate };
//     return reviews[reviewID];
// }
// export const removeReview = async (reviewID: number): Promise<null | void> => {
//     const review = await getReview(reviewID);
//     if (!review) {
//         return null;
//     }
//     delete reviews[reviewID];
// }
