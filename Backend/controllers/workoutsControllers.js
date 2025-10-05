const Workout = require('../models/Workout')
const mongoose = require('mongoose')

//get all workourts
const getallWorkouts = async (req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}


//get s single workouts
const getWorkout = async (req,res) =>{
    const {id} = req.params


    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error:"No such Workout"})

    }

    res.status(200).json(workout)

}

//create a new workout
const createWorkout =  async (req,res) =>{
    const {title,load,reps} = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push('Title')

    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in all missing fields",emptyFields})
    }


    //add a doc to DB
    try{
        const workout =  await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch (er){
        res.status(400).json({error: er.message})
    }
}

//delete workoit
const deleteWorkout = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(404).json({error:"No such Workout"})

    }
    res.status(200).json(workout)

}

const updateWorkout = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findByIdAndUpdate(
        id,                 // can just pass id directly
        { ...req.body },
        { new: true }       // return updated document
    );


    if(!workout){
        return res.status(404).json({error:"No such Workout"})

    }
    res.status(200).json(workout)


}

//update a workout
module.exports = {
    createWorkout,
    getWorkout,
    getallWorkouts,
    updateWorkout,
    deleteWorkout


}