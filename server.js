const express = require('express')
const app = express()
const PORT = 8000

const workouts = {
    'biceps':{
        'reps' : 3,
        'excercise': 'bicep curls',
    },
    'legs':{
        'reps': 4,
        'excercise': 'leg curls',
    },
    'unknown':{
        'reps': 0,
        'excercise': 'unknown',
    }   
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:workoutName', (request, response)=>{
    const workoutNames = request.params.workoutName
    if(workouts[workoutNames]){
        response.json(workouts[workoutNames])
    }else{
        response.json(workouts['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`the server is running on ${PORT}! You better go catch it!`)
})