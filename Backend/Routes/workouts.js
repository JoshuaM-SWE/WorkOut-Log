const express = require('express');

const {
    createWorkout,
    getWorkout,
    getallWorkouts,
    updateWorkout,
    deleteWorkout

} = require('../controllers/workoutsControllers')


const router = express.Router();



//get all workouts
router.get('/',getallWorkouts)

//get a single workout
router.get('/:id',getWorkout)

//post a new work out
router.post('/',createWorkout)

//delete a workout

router.delete('/:id',deleteWorkout)

//update a work out

router.patch('/:id',updateWorkout)

module.exports = router
