const express = require("express");
const router = express.Router();
const Card = require("../db/models/Card.js");

router
  .route("/")
  .get((req, res) => {
    return Card.fetchAll()
      .then(result => {
        console.log("ALL THEM CARDS", result);
        return res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .post((req, res) => {
    return new Card({
      title: req.body.title,
      priority: req.body.priority,
      status: req.body.status,
      created_by: req.body.created_by,
      assigned_to: req.body.assigned_to
    })
      .save()
      .then(result => {
        console.log("ADDED NEW CARD", result);
        return res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  });

router
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;
    console.log("get card by id", id);
    return Card.where({ id })
      .fetch()
      .then(result => {
        console.log("THIS CARD", result);
        return res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .put((req, res) => {
    console.log(req.params.id);
    return new Card({ id: req.params.id })
      .save({
        title: req.body.title,
        priority: req.body.priority,
        status: req.body.status,
        created_by: req.body.created_by,
        assigned_to: req.body.assigned_to
      })
      .then(result => {
        console.log("THIS CARD", result);
        return res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .delete((req, res) => {
    console.log("delete photo by id");
    const id = req.params.id;
    return Card.where({ id })
      .destroy()
      .then(result => {
        return res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  });

module.exports = router;
