import {useState, useEffect} from 'react'

function FeatureAdd({addFeature}) {


const [feature,setFeature] = useState('')


useEffect(() => {


})


function handleClick(){


addFeature({name: feature, likes: 0})
setFeature('');


}

function handleInputChange({target}){

setFeature(target.value)

}

return(<div className='feature-add'>


<input type='text' value={feature} onChange={handleInputChange} placeholder='add a new feature'></input>
<button onClick={handleClick}>Add</button>


</div>)



}

export default FeatureAdd;