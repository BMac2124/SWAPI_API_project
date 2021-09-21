import React, { useState, useEffect } from 'react'

import { fetchSwapi } from '../actions'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        swapi: state.swapiReducer.swapiData

    }
}

const Project = (props) => {
    const [people, setPeople] = useState('');

    useEffect(() => {
        props.fetchSwapi()

        // const helperFunction = async () => {
        //     try {
        //         const res = await axios.get(`https://swapi.dev/api/people`)
        //         setPeople(res.data.results)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        // helperFunction()
        console.log(props)
    }, [])


    console.log(people)

    // const peopleList = (props) => {
    return (
        <div className='project__parent'>
            <div className='pics__project'>
                <img src="/images/luke-darth.jpg" alt='' height={150} width={150} />
                <br/>
                <img src="/images/C-3PO.jpg" alt='' height={150} width={150} />
                <br/>
                <img src="/images/R2-D2.jpg" alt='' height={150} width={150} />

                

            </div>

            {/* {()=>props.fetchSwapi()} */}
            <div>{props.swapi.length > 0 ? props.swapi.map(swapi =>
                <div className='project'>
                            {/* work on the placment of images. using css  grid. look into bootstrap */}
                    <ul className='people-info'>
                        <li>
                            Name: {swapi.name}
                            <br />
                            Height: {swapi.height}
                            <br />
                            Mass: {swapi.mass}
                            <br />
                            Hair color: {swapi.hair_color}
                            <br />
                            Eye color: {swapi.eye_color}
                            <br />
                        </li>
                    </ul>
                </div>
            ) : null}</div>
        </div>
    )
}

//     return (
//         <div>
//             {peopleList}
//         </div>
//     )
// }

export default connect(mapStateToProps, { fetchSwapi })(Project)
