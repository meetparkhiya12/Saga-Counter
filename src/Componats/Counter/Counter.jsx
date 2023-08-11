import React from 'react'
import { useDispatch } from 'react-redux'
import { Counteradd } from '../Services/Counteraction/Counter.action'

function Counter() {

const dispatch = useDispatch()

const handleadd = () => {

    dispatch(Counteradd())
}



  return (
    <>
    <div className='text-center my-3'><h1>Saga Counter</h1>

    <h2>
        0
    </h2>
    
    <button className='btn btn-primary p-2 my-3' onClick={handleadd}> Add </button>
    </div>
    
    </>


  )
}

export default Counter