import React from "react"
import ads from "../../Constants/ads.json"
import Classified from "../../Components/Classified/Classified"


class Classifieds extends React.Component{
    render(){
        const classified = ads.map(ad => 
            
            <Classified key={ad.id} name={ad.name} description={ad.description} image={ad.img} location={ad.location} city = {ad.city} />)
        return (
            <div>{classified}</div>
          

        )}
    }

export default Classifieds
