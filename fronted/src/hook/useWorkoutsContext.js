import {WorkoutContext} from "../context/WorkoutContext";
import {useContext} from "react";

export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutContext)

    if(!context){
        throw Error('userWorkoutContext must be used an workoutContextProvider')
    }

    return context
}