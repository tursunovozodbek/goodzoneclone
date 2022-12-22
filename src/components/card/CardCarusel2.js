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
        name: "Smartfon",
        price: "1 570 000 so'm",
        kredit: "300 000 so'm / 5 oy",
        img: "https://cdn.goodzone.uz/goodzone/c40a3638-65b2-4bc6-82b4-0fa4a4b873d5",
    },
    {
        id: 2,
        name: "Multivarka",
        price: "1 310 000",
        kredit: "403 000 so'mdan / 3 oy",
        img: "https://cdn.goodzone.uz/goodzone/614c72b5-e149-4e21-a8f0-87d6bddf0e11",
    },
    {
        id: 3,
        name: "Noutbuk Lenovo",
        price: "2 156 000",
        kredit: "235 000 so'mdan / 12 oy",
        img: "https://cdn.goodzone.uz/goodzone/621cc528-f78e-4703-b500-49bc2b06e057",
    },
    {
        id: 4,
        name: "Konditsioner",
        price: "2 890 000",
        kredit: "520 000 so\'mdan / 8 oy",
        img: "https://cdn.goodzone.uz/goodzone/0e834d62-1dbd-47c8-8b01-ff0f9a581e76",
    },
    {
        id: 5,
        name: "Kofemashina",
        price: "300 000 so'm",
        kredit: "23 000 so'mdan / 12 oy", 
        img: "https://cdn.goodzone.uz/goodzone/448a7f3e-0732-4172-bb86-ab8bc0138457",
    },
    {
        id: 6,
        name: "Naushnik F16",
        price: " 200 000 so'm",
        kredit: '100 000 so\'dan / 2 oy',
        img: "https://cdn.goodzone.uz/goodzone/d7c4174d-0136-4151-9728-79cf3dc6e94c",
    },
    {
        id: 7,
        name: "Kolonki Remax WB-3",
        price: "1 800 000 so'm",
        kredit: '150 000 so\'dan / 12 oy',
        img: "https://cdn.goodzone.uz/goodzone/abf6cd80-3342-45f3-87fd-a41f2353c933",
    },
]

function CardCarusel() {
    return (
        <>
            <div className='Card-Carusel2-goodzone'>
                <h2> Ommabop Mahsulotlar</h2>
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