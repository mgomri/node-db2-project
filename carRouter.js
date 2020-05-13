const express = require('express');
const router = express.Router();
const cars = require('./data/db');

//Get cars
router.get('/', (req, res) => {
    cars.find(req.query)
        .then(car =>{
            res.status(200).json(car);
        })
        .catch(err => {
            res.status(500).json('Records unavailable')
        });
});

//Get by id
router.get('/:id', validateCarId, (req, res) => {
    cars.findById(req.params.id)
    .then(car => res.status(200).json(car))
    .catch(err => res.status(500).json('the car with that id couldn\'t be retrieved'));
});

//Add cars
router.post('/', validateCar, (req, res) =>{
    cars.insert(req.body)
    .then(car => {
        res.status(201).json(car)
    })
    .catch(err =>{
        res.status(500).json('Unable to save car info');
    })
});

//Delete cars
router.delete('/:id', validateCarId, (req, res) => {
    cars
    .remove(req.params.id)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500)
        .json('An error occured while removing that car')
    });
  });
  
  
  //Update car
  router.put('/:id', validateCarId, validateCar, (req, res) => {
    cars
      .update(req.params.id, req.body)
      .then(car => {
        res.status(200).json(car)
      })
      .catch(res =>{
          res.status(500).json('The user info couldn\'t be changed');
      })
  });
  





function validateCarId(req, res, next) {
    cars.findById(req.params.id)
         .then(car => {
           if(!car){
             res.status(400).json('MiddleWare validateUserId says: invalid car id');
           }
         });  
    next();
  }

function validateCar(req, res, next) {
    if(req.body === {}){
        res.status(400).json('missing car info')
    }else if(!req.body.VIN || !req.body.make || !req.body.model || !req.body.milage){
        res.status(400).json('missing required fields');
    };
    next();
}
 

module.exports = router;