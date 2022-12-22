import React from 'react'
import "./BottomHeader.css"
import UIDropdown from 'react-multilevel-dropdown';

const data = [
    {
        id:1,
        name:"Chegirmalar",
        subminu:[]
    },
    {
        id:2,
        name:"Smartfon va gadjetlar",
        subminu:[
            {
                id:1,
                name:"Telefonlar"
            },
            {
                id:2,
                name:"Smartfonlar"
            },
            {
                id:3,
                name:"Planshetlar"
            },
            {
                id:4,
                name:"Quloqchinlar"
            },
            {
                id:5,
                name:"Powerbank"
            }
        ]
    },
    {
        id:3,
        name:"Televizor va audio",
        subminu:[
            {
                id:1,
                name:"Televizor",
                minu:[]
                
            },
            {
                id:2,
                name:"DVD playerlar",
                minu:[]
            },
            {
                id:3,
                name:"Uy jihozlari va WI-FI uskunalari",
                minu:[]
            },
            {
                id:4,
                name:"Raqamli TV",
                minu:[]
            },            {
                id:5,
                name:"Aksessuarlar",
                minu:[]
            },
            {
                id:6,
                name:"ITV Consollari",
                minu:[]
            }
        ]
    },
    {
        id:4,
        name:"Oshxona jihozlari",
        subminu:[
            {
                id:1,
                name: `Kichik Oshxona Jihozlari`,
                minu:[
                    {
                        id:1,
                        name:"Mikro to'lqinli pechlar"
                    },
                    {
                        id:2,
                        name:"Pasta mashinasi"
                    },
                    {
                        id:3,
                        name:"Mikserlar"
                    }
                ]
            },
            {
                id:2,
                name:"Katta Oshxona Jihozlari ",
                minu:[
                    {
                        id:1,
                        name:"Muzlatgichlar"
                    },
                    {
                        id:2,
                        name:"Pishirish Panellari"
                    }
                ]
            },
            {
                id:3,
                name:"Idishlar",
                minu:[
                    {
                        id:1,
                        name:"Qozonlar",
                        minu:[]
                    },
                    {
                        id:2,
                        name:"Kastryulkalar",
                        minu:[]
                    },
                    {
                        id:3,
                        name:"Tovalar",
                        minu:[]
                    },
                    {
                        id:4,
                        name:"Choynaklar",
                        minu:[]
                    }
                ]
            }
        ]
    },
    {
        id:5,
        name:"Go'zallik va Salomatlik",
        subminu:[
            {
                id:1,
                name:"Elektro britvalar"
            },
            {
                id:2,
                name:"Trimmerlar"
            },
            {
                id:3,
                name:"Sochlarni tekislash mashinkalari"
            },
            {
                id:4,
                name:"Fenlar"
            },
            {
                id:5,
                name:"Soch quritgich cho'tkalari"
            },
            {
                id:6,
                name:"Epilyatorlar"
            }
        ]
    },
    {
        id:6,
        name:"Uy uchun texnikalar",
        subminu:[
            {
                id:1,
                name:"Kichik Maishiy Texnikalar"
            },
            {
                id:2,
                name:"Katta Maishiy Texnikalar"
            },
            {
                id:3,
                name:"Sovutish uskunalari"
            },
            {
                id:4,
                name:"Avto Mahsulotlari"
            },
            {
                id:5,
                name:"Kreslolar"
            },
            {
                id:6,
                name: "Filtrlar"
            }
        ]
    },
    {
        id:7,
        name:"Kompyuter",
        subminu:[
            {
                id:1,
                name:"Komplekt qismlar"
            },
            {
                id:2,
                name:"O'yin uchun aksesseuarlar"
            },
            {
                id:3,
                name:"Kompyuter Jihozlar"
            },
            {
                id:4,
                name:"Monitorlar"
            },
            {
                id: 5,
                name:"Noutbuk Sumkalari"
            },
            {
                id: 6,
                name: "To'plamlar"
            },
            {
                id: 7,
                name: "Monobloklar"
            },
            {
                id:8,
                name: "Kompyuter sichqonchasi"
            },
            {
                id:9,
                name:"Noutbuklar"
            }

        ]
    
    }
]


export default function BottomHeader() {
  return (
    <div className='bottom-header-nav'>
        <button className='btn1'>Aksiyalar</button>
        <div>
            {data.map(item=>{
                return (
                   <>
                   {item.subminu.length==0?<UIDropdown className="btn"  title={<span>{item.name}</span>} buttonVariant='tertiary'></UIDropdown>
                   :<UIDropdown  className="btn" title={<span>{item.name}</span>} buttonVariant='tertiary' openOnHover={true}  >
                    {item.subminu.map(it=>{
                        return <UIDropdown.Item className='btn-items'>
                            {it.name}
                            {it.minu?.map(i=>{
                                return (
                                    <UIDropdown.Submenu position='right' style={{marginLeft:5}}>
                                    <UIDropdown.Item >
                                      {i.name}
                                    </UIDropdown.Item>
                                </UIDropdown.Submenu>
                                )
                            })}
                        </UIDropdown.Item>
                    })}
                    </UIDropdown>}
                   </>
                )
            })}
        </div>
    </div>
  )
}