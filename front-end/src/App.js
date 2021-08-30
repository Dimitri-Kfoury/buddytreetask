import "./App.css";
import FeatureAdd from './components/feature-add/FeatureAdd'
import { useState, useEffect } from 'react'
import Features from "./components/features/Features";

function App() {

    const [features, setFeatures] = useState([]);


    useEffect(() => {


        fetch('/features').then(response => {

            if (response.ok) { return response.json() }

        }).then(json => {
            
            if(json){
            setFeatures(json)}
            
            else{

                console.log("couldn't fetch features")

            }
        
        })



    }
        , [])



    function addFeature(feature) {

        setFeatures(prev => [...prev, feature])


    }


    return (<div className='App'>

        <FeatureAdd addFeature={addFeature} />
        <Features features={features} />
    </div>)





}



export default App;