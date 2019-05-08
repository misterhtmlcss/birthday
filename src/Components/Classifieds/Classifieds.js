import React from "react"
import ads from "../../Constants/ads.json"
import Classified from "../../Components/Classified/Classified"


const Classifieds = () => {
  const classified = ads.map( (ad, i) => (
    <Classified
      key={i}
      name={ad.name}
      description={ad.description}
      image={ad.img}
      location={ad.location}
      city={ad.city}
    />
    )
  )
  return (
    <>{classified}</>
  )
}

export default Classifieds
