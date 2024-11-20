import React, { useEffect, useState } from "react";
const API=process.env.REACT_APP_API_URL



const Home =()=>{

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const getPosts =()=>{
        setLoading(true)
        console.log(API)
        fetch(API)
        .then((response)=> response.json())
        .then((json)=> setData(json))
        .then(()=> setLoading(false))
        .catch((error)=> console.log(error)
        )
    }

    useEffect(()=>{
        getPosts()
    },[])
    return (
        <div>
            
            <h4>Home Page</h4>
            {loading && <div>Loading...</div>}
            {data.map((item)=> <div key={item.id}>{item.title}</div>)}

        </div>
    )
}

export default Home