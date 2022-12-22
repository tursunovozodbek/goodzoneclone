import './CardCarusel2.css';
import Card2 from './Card2';
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
    items: 5
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
        name: "Monitor",
        price: "1 570 000 so'm",
        kredit: "300 000 so'm / 5 oy",
        img: "https://cdn.goodzone.uz/goodzone/1445e8c9-d646-4736-ae62-2c0c8aeca1c8",
    },
    {
        id: 2,
        name: "Quloqchin",
        price: "310 000",
        kredit: "103 000 so'mdan / 3 oy",
        img: "https://cdn.goodzone.uz/goodzone/81adb994-9d07-458e-a9b6-69aa67d5d860",
    },
    {
        id: 3,
        name: "Gaz Plita",
        price: "2 156 000",
        kredit: "235 000 so'mdan / 12 oy",
        img: "https://cdn.goodzone.uz/goodzone/ec3cae30-3504-4baf-87f7-6d4f34c735d3",
    },
    {
        id: 4,
        name: "Soat",
        price: "890 000",
        kredit: "110 000 so\'mdan / 8 oy",
        img: "https://cdn.goodzone.uz/goodzone/0e834d62-1dbd-47c8-8b01-ff0f9a581e76",
    },
    {
        id: 5,
        name: "Qozon",
        price: "300 000 so'm",
        kredit: "23 000 so'mdan / 12 oy", 
        img: "https://cdn.goodzone.uz/goodzone/3aa9ce4e-0780-439f-8b14-52763648bd4d",
    },
    {
        id: 6,
        name: "Elektro Skuter",
        price: "1 200 000 so'm",
        kredit: '100 000 so\'dan / 12 oy',
        img: "https://cdn.goodzone.uz/goodzone/6e217a92-1b7c-4542-9570-99cedc6c1d8a",
    },
    {
        id: 7,
        name: "Printer 3D",
        price: "1 800 000 so'm",
        kredit: '150 000 so\'dan / 12 oy',
        img: "https://cdn.goodzone.uz/goodzone/5ada6d7f-2ac3-4c45-99fb-5c2806074311",
    },
]

function CardCarusel() {
    return (
        <>
            <div className='Card-Carusel2-goodzone'>
                <h2 style={{marginBottom:'20px'}}>Siz uchun yoqqan mahsulotlar</h2>
                <Carousel responsive={responsive}>
                    {data.map(item=>{
                        return (
                            <Card2 img={item.img} name={item.name} price={item.price} kredit={item.kredit}/>
                        )
                    })}
                </Carousel>
            </div>
        </>
    )
}


export default CardCarusel