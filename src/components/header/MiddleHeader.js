import './MiddleHeader.css'
import { useState,useEffect } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {GiScales} from 'react-icons/gi'
import {HiShoppingCart} from 'react-icons/hi'
import {CiUser} from 'react-icons/ci'
import {BiSearch} from 'react-icons/bi'


function MiddleHeader() {
    const [nav,setnav] = useState(false)
    const onChangeBack=()=>{
        if(window.scrollY>66) {
            setnav(true)
        }else {
            setnav(false)
        }
    }

    useEffect(()=>{
        onChangeBack()
        window.addEventListener("scroll", onChangeBack)
    })
    return (
        <div className={`middle-header-container ${nav && 'middle-header-sticky'}`}>
            <img width={"160px"} src="https://goodzone.uz/logogz_ru.svg" alt="goodzone image" />
            <div className="middle-header-input">
                <input type="text" placeholder="Mahsulot bo'yicha qidirish" />
                <button>
                    <BiSearch/>
                </button>
            </div>
            <div className="middle-right-icons">
                <div>
                    <AiOutlineHeart/>
                    <span>Sevimlilar</span>
                </div>
                <div>
                    <GiScales/>
                    <span>Solishtirish</span>
                </div>
                <div>
                    <HiShoppingCart/>
                    <span>Savatcha</span>
                </div>
                <div>
                    <CiUser/>
                    <span>Kirish</span>
                </div>
            </div>
        </div>
    )
}

export default MiddleHeader