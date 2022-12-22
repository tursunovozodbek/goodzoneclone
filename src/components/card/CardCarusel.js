import './CardCarusel.css';
import Card from './Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

let data = [
    {
        id: 1,
        title: "Yangi",
        name: "Monitor",
        price: "270$",
        img: "https://cdn.goodzone.uz/goodzone/89c1a3d7-7c9a-4c2f-9172-81c340b15fac",
    },
    {
        id: 2,
        title: "Yangi",
        name: "Planshet",
        price: "310$",
        img: "https://cdn.goodzone.uz/goodzone/d6d66ba0-51e4-4b21-94bc-da6382b19343",
    },
    {
        id: 3,
        title: "Yangi",
        name: "Xiomi 11",
        price: "460$",
        img: "https://cdn.goodzone.uz/goodzone/fd461b3a-c937-4ff0-be5e-4dd21af1d473",
    },
    {
        id: 4,
        title: "Yangi",
        name: "Elektro Skuter",
        price: "250%",
        img: "https://cdn.goodzone.uz/goodzone/6e217a92-1b7c-4542-9570-99cedc6c1d8a",
    }
]

const data2 = [
    {
        id:1,
        img: "https://cdn.goodzone.uz/goodzone/f249f0aa-1c3a-4cb0-acb6-304a3af9eb83"
    },
    {
        id:2,
        img: "https://cdn.goodzone.uz/goodzone/6473a94b-88ea-46b6-80ce-d6ed06fc5195"
    },
    {
        id:3,
        img: "https://cdn.goodzone.uz/goodzone/6a323497-906e-497f-8617-7cc5a50b82f5"
    },
    {
        id:4,
        img: "https://cdn.goodzone.uz/goodzone/06dc3dc6-b991-4456-885e-b3a22372d47e"
    },
    {
        id:5,
        img: "https://cdn.goodzone.uz/goodzone/1198572e-6ddb-40b8-9c31-8a7dca6ae2a3"
    },
]

function CardImage({img}) {
    return (
        <>
            <img src={img} width={220} height={90} style={{margin:20, borderRadius:10}}/>
        </>
        
    )
}

function CardCarusel() {
    return (
        <>
            <div className='Card-Carusel-goodzone'>
                <Carousel responsive={responsive}>
                    {data.map(item=>{
                        return (
                            <Card name={item.name} img={item.img} price={item.price} title={item.title} />
                        )
                    })}
                    <Card />
                </Carousel>
            </div>
            <h2 style={{marginLeft:20}}>Mashhur Kategoriyalar</h2>
            <div>
                {data2.map(item=>{
                    return <span className='Famous-category'><CardImage  img={item.img} /></span> 
                })}
            </div>
        </>
    )
}


export default CardCarusel