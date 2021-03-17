import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/bg.png'
import {HelpCard} from '../HelpCard/'
import {SixCard} from '../SixCard'
import klub from '../../images/klub.png'

export const MainPage = () => {

    const data = [
        {
            title:"Weight Lifting",
            bg:"#FFE2DE",
            id:1
        },{
            title:"Running  & Spinning",
            bg:"#C4E769",
            id:1
        },{
            title:"Pumping Iron",
            bg:"#62D0DF",
            id:1
        },{
            title:"Pumping Iron",
            bg:"#0052C1E",
            id:1
        },
    ]


const data1 = [
    {
     title:'Physical Health' ,
     bg:'#22356F',
     id:1
    },{
     title:'Mental Health' ,
     bg:'#0052C1',
     id:2
    },{
     title:'Nutrition' ,
     img:{klub},
     id:3
    },{
     title:'Gymnastics' ,
     bg:'#62D0DF',
     id:4
    },{
     title:'Crossfit' ,
     bg:'#DEE1FF',
     id:1
    },{
     title:'Aerobics' ,
     bg: '#8F00FF',
     id:1
    },
]


    return <div className={css.mainPage}>
        <div className={css.container}>   

            <nav>
                <span>Thrivetalk</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <button className={css.mainButton}>CONTACT US</button>
            </nav>
            <div className={css.mainBlock}>
                <div >
                    <p className={css.mainBlocP}>Thrivetalk</p>
                    <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                    <p  className={css.mainBlocP1}>Our highly talented therapists can help you with a range of
                    issues including relationships, sex, PTSD, depression, social
              anxiety, or even just caring for yourself more.</p>
                    <div>
                        <button className={css.mainBlockButton1}>WHO AM I</button>
                        <button className={css.mainBlockButoon2}>WHAT DO I DO</button>
                    </div>
                </div>
                <div>
                    <img src={mainPic} alt="" />
                </div>
            </div>



        </div>
<div>
    <h5> WE CAN HELP YOU WITH </h5>

    {
     data.map((el, id) => {
         return <HelpCard
         title={el.title}
         bg={el.bg}
         id={el.id}
         key={id}
         
         />
     })
    }

    {
        data1.map((item,id) => {
            return <SixCard
            title={item.title}
            bg={item.bg}
            id={item.id}
            key={id}
            
            
            />
        })
    }

    <div>

    </div>



</div>

    </div>
}