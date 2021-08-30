
import { useState } from "react"
import Icon from "../../icons/thumbsup"
import './Feature.css'

export function Feature({feature}) {

    const[likes,setLikes] = useState(feature[1])
    const [isIncremented,setIsIncremented] = useState(false)


async function handleLikeClicked() {


    const response =  await fetch('/features/like', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({feature: feature[0], incrementBy: isIncremented ? -1 : 1}) // body data type must match "Content-Type" header
    })

    
    if (response.ok){

        const json = await response.json()
        isIncremented ? setIsIncremented(false) : setIsIncremented(true)            
        setLikes(json)

    }



    }


return (
<div className='feature' >

<p className='feature-description'>{feature[0]}</p>
<Icon isIncremented={isIncremented} feature={feature[0]} handleLikeClicked={handleLikeClicked}/>
<p className='likes'>{likes}</p>
</div>) 



}