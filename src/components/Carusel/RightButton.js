import React from 'react';
import './Rightbutton.css';
import {FaShoppingBag} from 'react-icons/fa';
import {useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';

function RightShop({right=false, onChange}) {
    const [count,setCount] = useState(0)
    const increase = () =>{
        setCount(count+1)
    }
    const decrease = () =>{
        if (count>0) {
            setCount(count-1)
        }
    }

// let CloseItem = document.querySelector('.buyitem_container');
// CloseItem.addEventListener('click', function(){
//     document.classList.remove('buyitem_container')
//     document.classList.add('buy-item-container-hidden');
// });

    return (
        <div className={`right-shop-box ${right && 'right-shop-box-true'}`}>
            <div style={{display:'flex', alignItems:'center', marginBottom:20, justifyContent: 'space-between',fontSize: '20px',padding:15, borderBottom: '1px solid lightgray'}}>
                <div style={{color:'red', display: 'flex',alignItems: 'center', fontWeight: 700}}> <FaShoppingBag /> <span> 1 dona</span></div>
                <AiOutlineClose style={{cursor:'pointer', color: 'lightgray', fontSize: '21px'}}  onClick={onChange}/>
            </div>
            <div className="buyitem_container buy-item-container-hidden">
                <div className='shopping-cart'>
                    <div className='shopping-cart-box'>
                        <button onClick={increase}>+</button>
                        <span style={{display: 'block', fontSize: '20px'}}>{count}</span>
                        <button onClick={decrease}>-</button>                    
                    </div>
                </div>
                <div className="buyitem">
                    <img src="https://cdn.goodzone.uz/goodzone/81adb994-9d07-458e-a9b6-69aa67d5d860" alt="headphones" />
                    <div className="infor_item">
                        <p>Наушники Apple AirPods Pro <br /> A2083 A2084 A2190</p>
                        <p>2 503 060 so'm</p>
                    </div>
                    <AiOutlineClose style={{cursor:'pointer', color:'lightgray', fontSize:'22px', fontWeight:'bold'}}  onClick={onChange}/>
                </div>                
            </div>

            <div className='shopping'>
                <button className='shopping-button' >Bo'lib to'lash</button>
                <div className='shopping-bill'>
                    <button>Buyurtma qilmoq</button>
                    <button>618 240 so'm</button>
                </div>                
            </div> 

        </div>
    )
}


export default function RightButton() {
    const [right, setright] = useState(false);

    const changeRight= () => {
        setright(!right)
    }

    return (<>
        <div className='right-button-box' onClick={changeRight}>
            <div style={{display:'flex', alignItems:'center', marginBottom:20}}>
                <FaShoppingBag /> <span>1 dona</span>
            </div>
            <button>268 240 so'm</button>
        </div>
        <RightShop right={right} onChange={changeRight} />
    </>)
}