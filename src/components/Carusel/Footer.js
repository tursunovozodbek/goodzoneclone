import React from 'react';
import './Footer.css';
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import {FaYoutubeSquare} from 'react-icons/fa'

function Footer() {
    return (
        <div className="f-container">
            <div className="container">
                <div className="question">
                    <h4>Savolingiz bormi? Qo'ng'iroq qiling</h4>
                    <p><BsTelephone /> +998 71 207 03 07</p>
                    <p><AiOutlineMail /> Info@goodzone.uz</p>
                    <div className="social-media">
                        <span><BsFacebook /></span>
                        <span><AiFillInstagram /></span>
                        <span><BsTelegram /></span>
                        <span><FaYoutubeSquare /></span>
                    </div>
                </div>
                <div className="Compania">
                    <h4>Kompaniya</h4>
                    <p>Kompaniya haqida</p>
                    <p>Do'kon manzillari</p>
                    <p>Vakansiyalar</p>
                </div>
                <div className="Costumer">
                    <h4>Xaridorga yordam</h4>
                    <p>Savol va Javob</p>
                    <p>Saytda qanday buyurtma berish kerak</p>
                    <p>Tovarlarni almashtirish, qaytarish va ta'mirlash</p>
                </div>
                <div className="information">
                    <h4>Ma'lumot</h4>
                    <p>Muddatli to'lov</p>
                    <p>Yetkazib berish</p>
                    <p>Izoh qoldirish</p>
                </div>
                <hr />
            </div>
            <div className='container-karta'>
                <div className="box-karta">
                    <div><img src="https://goodzone.uz/icons/payme.png" alt="" /></div>
                    <div><img src="https://goodzone.uz/icons/click.png" alt="" /></div>
                    <div><img src="https://goodzone.uz/icons/uzcard.png" alt="" /></div>
                    <div><img src="https://goodzone.uz/icons/apelsin.png" alt="" /></div>
                    <div><img src="https://goodzone.uz/icons/humo.png" alt="" /></div>
                    <div><img src="https://goodzone.uz/icons/paybox.svg" alt="" /></div>
                    <div><img src="https://goodzone.uz/icons/visa.svg" alt="" /></div>
                    <div><img src="https://goodzone.uz/icons/mastercard.svg" alt="" /></div>
                    <div><img src="https://goodzone.uz/icons/payze.svg" alt="" /></div>
                </div>
                <div className="box-payingapp">
                    <div><img src="https://goodzone.uz/icons/VIDJET.svg" alt="" /></div>
                    <div><img src="https://goodzone.uz/icons/alif-nasiya-logo-b.svg" alt="" /></div>
                    <div><img src="https://goodzone.uz/images/payment_logo/zoodpay.png" alt="" /></div>
                </div>
            </div>
            <div className='Copyright'>
                <p>2022 &#169;Goodzone.uz Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga amal qiladi. </p>
            </div>
        </div>
    );
}


export default Footer;