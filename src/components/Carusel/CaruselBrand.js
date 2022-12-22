import React from "react";
import './CaruselBrand.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

let data = [
  {
    id:1,
    img: 'https://cdn.goodzone.uz/goodzone/3ce7d2ba-f19f-49fd-8ce5-f1de69e5c719',
  },
  {
    id:2,
    img: 'https://cdn.goodzone.uz/goodzone/fb8adf74-e0e5-4c4b-9e60-8a5405b87e01',
  },
  {
    id:3,
    img: 'https://cdn.goodzone.uz/goodzone/6d2bf781-696f-4473-a7b0-df346bfe49c4',
  },
  {
    id:4,
    img: 'https://cdn.goodzone.uz/goodzone/185fbea1-7f2d-48d5-8e5c-4b6f78a4a97a',
  },
  {
    id:5,
    img: 'https://cdn.goodzone.uz/goodzone/2c1ad3c3-3a70-41c9-b826-bdd604c03d10',
  },
  {
    id:6,
    img: 'https://cdn.goodzone.uz/goodzone/adcf6f86-bb31-44fb-8fde-d3e9c18398cc',
  },
  {
    id:7,
    img: 'https://cdn.goodzone.uz/goodzone/a2deece2-4ba3-4a9a-8be1-4a7e0c4136e1',
  },
  {
    id:8,
    img: 'https://cdn.goodzone.uz/goodzone/1bd36862-c524-4dfa-95fc-216188e45d74',
  },
  {
    id:9,
    img: 'https://cdn.goodzone.uz/goodzone/c59c1988-f03b-4294-a848-7a530cb7c855',
  }
]

let data1 = [
  {
    id:1,
    img: 'https://cdn.goodzone.uz/goodzone/5917ef3a-ae3d-4722-a83f-3622e43e6048',
  },
  {
    id:2,
    img: 'https://cdn.goodzone.uz/goodzone/4bf8d132-0061-4515-8cc7-734ead0e177f',
  },
  {
    id:3,
    img: 'https://cdn.goodzone.uz/goodzone/cc21a87b-4c39-4353-ac31-9a0dc259325b',
  },
  {
    id:4,
    img: 'https://cdn.goodzone.uz/goodzone/4ea4f2cb-6996-4ad5-b524-f8b7d98773d7',
  },
  {
    id:5,
    img: 'https://cdn.goodzone.uz/goodzone/2afc239a-13db-4564-afed-f7aacc050228',
  },
  {
    id:6,
    img: 'https://cdn.goodzone.uz/goodzone/d52012de-95bb-4ff3-86e8-919a5c4921f7',
  },
  {
    id:7,
    img: 'https://cdn.goodzone.uz/goodzone/b69007f5-2a75-46ef-890f-04317d9485fb',
  },
  {
    id:8,
    img: 'https://cdn.goodzone.uz/goodzone/52565009-f72e-4e5e-92a4-c4aaef9bdd4c',
  },
  {
    id:9,
    img: 'https://cdn.goodzone.uz/goodzone/2c67f050-50bf-4df3-a4ec-1b7f467ca96c',
  }
]

const CardBrand = ({img}) =>{
    return (
        <div className="card-brand">
          <img src={img}  />
        </div>     
    )
}

export default function CaruselBrand() {
    return (
        <div>
            <Carousel arrows={false} className="carusel1" responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={0} customTransition={'transform 40000ms linear'}>
                {/* <CardBrand  /> */}
                  {data.map(item=>{
                      return (
                        <div className="card-brand">
                          <img  src={item.img} />
                        </div>
                      )
                  })}
            </Carousel>
            <Carousel arrows={false} rtl={true} className="carusel2" responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={0} customTransition={'transform 40000ms linear'}>
                {/* <CardBrand  /> */}
                  {data1.map(item=>{
                      return (
                        <div className="card-brand">
                          <img  src={item.img} />
                        </div>
                      )
                  })}
            </Carousel>
        </div>
    )
}