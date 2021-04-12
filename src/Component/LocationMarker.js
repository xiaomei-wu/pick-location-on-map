import React, {useState} from 'react'
import { useMapEvents, Marker, Tooltip } from 'react-leaflet'

const defaultPosition = { lat: 52.5200, lng: 13.4050 };

export const LocationMarker = () => {
  
  const [ position, setPosition ] = useState(defaultPosition)
  const [ house_number, setHouse_number ] = useState('');
  const [ postcode, setPostcode ] = useState('');
  const [ road, setRoad ] = useState('');
  const [ state, setState ] = useState('');
  const [ city, setCity ] = useState('');
  const [ country, setCountry ] = useState('');
  
  useMapEvents({
    click: (e) => {
      setPosition(e.latlng)
      getAddress(position)
    },
  })

  const getAddress = ({lat, lng}) => {
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=jsonv2`)
    .then( response => response.json())
    .then( data => {
      console.log(data);
      setCountry(data.address.country? data.address.country: "");
      setCity(data.address.city?data.address.city: "");
      setHouse_number(data.address.house_number? data.address.house_number : "");
      setPostcode(data.address.postcode? data.address.postcode : "");
      setRoad(data.address.road ? data.address.road : "");
      setState(data.address.state ? data.address.state : "");
  })
  }
  console.log(position)

  return position === null ? null : (
    <>
    <Marker position={ position }>
      <Tooltip>
      { road && <label> { road }</label>}
      { house_number && <label> { house_number }</label> }
      { postcode && <label> { postcode }</label>}
      { city && <label> { city } </label> }
      { state && <label> { state }</label>}
      { country && <label> { country }</label> }
      </Tooltip> 
    </Marker>
    <p>Hi</p>
    </>
  )
}