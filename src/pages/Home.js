import React, {useState} from 'react';
import {Box} from '@mui/material';

import Banner from '../components/Banner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    //console.log(bodyPart);
    return (
        <Box>
            <Banner />
            <SearchExercises 
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            setExercises={setExercises}
            />
            <Exercises 
            bodyPart={bodyPart}
            exercises={exercises}
            setExercises={setExercises}
            />
        </Box>
    );
}

export default Home;