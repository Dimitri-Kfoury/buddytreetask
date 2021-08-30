import { useState, useEffect } from 'react'
import './FeatureAdd.css'


function FeatureAdd({ addFeature }) {


    const [feature, setFeature] = useState('')


    useEffect(() => {

        



    })


    async function handleSubmit(e) {

        e.preventDefault();

        setFeature('');


        fetch('/features/add_feature', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({feature}) // body data type must match "Content-Type" header
        })

    }

    function handleInputChange({ target }) {

        setFeature(target.value)

    }

    return (<div className='feature-add'>

        <form onSubmit={handleSubmit}>
            <input type='text' name='feature' value={feature} onChange={handleInputChange} placeholder='add a new feature'></input>
            <input type='submit' value='Add'></input>
        </form>

    </div>)



}

export default FeatureAdd;