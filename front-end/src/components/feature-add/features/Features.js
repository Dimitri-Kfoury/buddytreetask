import './Features.css'
//import {useEffect, useState} from 'react'

function Features({features}) {


return (<div className='features'>


{features.map((feature,index) => (<div className='feature' key={'feature' + index} >


<p>{feature.name}</p>
<button>like</button>
<p>{feature.likes}</p>
</div>) )}


</div>)



}


export default Features;