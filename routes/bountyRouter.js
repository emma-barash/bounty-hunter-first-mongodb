const express = require("express");
const bountyRouter = express.Router();
const Bounty = require("../models/characters.js");


// GET ALL AND POST
bountyRouter.route("/")
.get((req, res, next) => {
  Bounty.find((err, characters) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(characters);
  });
})
.post((req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, newSavedCharacter) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedCharacter)
    })
})

// DELETE ONE
bountyRouter.delete('/:_id',
(req, res, next) => {
    Bounty.findOneAndRemove(
        {_id : req.params._id},
        (err, deleteChar) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(deleteChar)
    })
})

// PUT REQUEST
bountyRouter.put('/:_id', (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id : req.params._id },
        req.body,
        (err, updateBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updateBounty)
        }
    )
})

// GET ONE
bountyRouter.get('/:_id', (req, res, next) => {
    Bounty.find(
        { _id : req.params._id },
        (err, getOneBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(getOneBounty)
        }
    )
})


module.exports = bountyRouter;