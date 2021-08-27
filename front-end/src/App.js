import "./App.css";
import FeatureAdd from './components/feature-add/FeatureAdd'
import {useState, useEffect} from 'react'
import Features from "./components/feature-add/features/Features";

function App() {

const [features,setFeatures] = useState([]);


useEffect(() => {


console.log(features)

})

function addFeature(feature){

setFeatures(prev => [...prev,feature])


}


return (<div className='App'>

<FeatureAdd addFeature={addFeature}/>
<Features features={features}/>
</div>)





}



export default App;