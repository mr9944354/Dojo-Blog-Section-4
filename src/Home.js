import React, { useState } from 'react'

function Home() {
    const [name, setName] = useState("Mohan");
    const [age, setAge] = useState(22);

    const handleclick = () => {
        setName("Bharani");
        setAge(23)    
    }
   
    return (
        <div className='home'>
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleclick}>click me</button>
    
        </div>
    );
}
export default Home;