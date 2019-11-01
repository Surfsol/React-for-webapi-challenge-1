import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Project from './Project'



const Projects = () => {
    const[list, setList]=useState([])

    useEffect(()=> {
        axios
            .get('http://localhost:5000/project')
                    .then(res => setList(res.data))
                    .catch(error =>
                        console.log(error))
            }, []);


    return(
        <>
        {list.map(e => (
            < Project
            key={e.id}
            item={e}
            />
        ))}
        </>
    )
}
export default Projects;