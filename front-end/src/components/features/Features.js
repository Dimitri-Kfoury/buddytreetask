import Icon from '../../icons/thumbsup';
import './Features.css'
import { Feature } from '../feature/Feature';


function Features({features}) {


return (<div className='features'>


{features.map((feature,index) => (<Feature  key={'feature' + index} feature={feature}/>))}


</div>)



}


export default Features;