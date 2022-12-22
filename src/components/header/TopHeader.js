import React from 'react'
import './TopHeader.css' 
import Dropdown from 'react-bootstrap/Dropdown';
import {BsFillTelephoneFill} from 'react-icons/bs'

let dataLang = ["Russian", "Uzbek"]
let dataCity = ["Samarqand", "Toshkent"]

function BasicExample({name,data}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data.map((item)=>{
                    return <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
        })}
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

function TopHeader () {
    return (
      <div className="cont">
        <div className='cont1'>
            <div className="h-left">
                <BasicExample name={"Til"} data={dataLang}/>
                <BasicExample name={"Shahar"} data={dataCity}/>                
            </div>
            <div className="h-middle">
                <ul>
                    <li><a href="#">Do'konlar</a></li>
                    <li><a href="#">Yetkazib berish</a></li>
                    <li><a href="#">Kompaniya haqida</a></li>
                </ul>
            </div>
            <div className="h-right">
              <BsFillTelephoneFill/>
                +998998887766
            </div>
        </div>

      </div>
    )
}

export default TopHeader