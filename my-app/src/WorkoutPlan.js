import React, { Component } from 'react'
import Exercise from './Exercise';
import WorkoutPlanCreator from './WorkoutPlanCreator';

export default class WorkoutPlan extends Component {
    //returns what exercises at which weight/rep level i need to complete today
    // the exercises returned are fixed but the weight/reps are editable
    //workoutplan includes a submit button to confirm the completion of that day's workouts
    constructor(props) {
        super(props);
        this.state = {
            exercises: []
            //list of Exercises
            //base case: 0 exercises, button to create workoutplan
        };
    }
    createWorkoutPlan = () => {
        this.setState({exercises : ["hello"]});
        //plus button
        //Workout A
            //form: type exercise, add current weight
                //checkmark for Rep based exercise - type exercise, add 3 rep input
        //Workout B
            //same form
    }

    getDate() {
        return Date();
    }

    addExercise(name, workoutId, type, value) {
        return <Exercise name={name} workoutId={workoutId} type={type} value={value} />;
    }

    render() {
        const exercises = this.state.exercises;
        if (!exercises.length > 0){
            console.log("here")
            return (
                <WorkoutPlanCreator createWorkoutPlan={this.createWorkoutPlan} />
            )
        }
        else {
            return ( //box will be drawn within the fragment
            <>
                <div>{this.getDate()}</div>
                <div>{exercises}</div>
                <div>{this.addExercise("sqats", "A", "weighted", 69)}</div>
                <div>associated weights/rep requirements for each of the exercises</div>
                <div>checkbox for EZ (if EZ then up 2.5lb next day)</div>
                <input type="text" />
                <button>submit</button>
            </>
            )
        }
    }

    //based on date and state output today's workout plan
    getPlan(date, workoutState) {
        //if mwf, show workoutplan; else REST
        //if i did squats,bench,pullups last time, then this time i do deadlifts,rows,presses
        //plan is: exercise : weight   
    }
}
