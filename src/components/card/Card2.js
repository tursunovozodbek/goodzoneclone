import React from "react";
import './Card2.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AiOutlineHeart} from 'react-icons/ai'
import {GiScales} from 'react-icons/gi';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';


function Card2({img,name, price, kredit}) {
    return (
        <div className="primary-box">
            <Card style={{ width: '14.5rem', height: '25rem' }}>
                <Card.Img className="card-img1" style={{width:"170px"}} variant="top" src={img} />
                <Card.Body>
                    <h3 className="name-product">{name}</h3>   
                    <div className="stars">
                        <span>< AiFillStar/></span>
                        <span>< AiFillStar/></span>
                        <span>< AiFillStar/></span>
                        <span>< AiFillStar/></span>
                        <span>< AiOutlineStar/></span>
                    </div>
                    <span className="price-product">{price}</span><br />
                    <small className="kredit-product">{kredit}</small>
                    <div className="extra">
                        <button>Sotib Olish</button>
                        <span><GiScales style={{marginLeft:'1rem'}} /></span>
                        <span><AiOutlineHeart style={{marginLeft:'0.5rem'}} />  </span>                        

                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default Card2;
