import './styles/AboutPage.css'
import imgMission from '../images/no_icon.png'

export default function AboutPage(){

    function OurLeader(props){
        return(
            <>
            <div className='aboutPageLeaders'>
                <img src={props.img} alt="Leaders" />
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
                <p><ion-icon name="logo-instagram"></ion-icon></p>
            </div>
            </>
        )
    }

    function WhatWeDo(props){
        return(
            <>
            <div className='WeDoCard'>
                <p  className='weDoIcon'>{props.icon}</p>
                <h4 className='weDoTitle'>{props.title}</h4>
                <p  className='weDoDesc'>{props.desc}</p>
            </div>
            </>
        )
    }

    return(
        <>
        <div className='container'>
        <section className='aboutPageStart'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat vero itaque obcaecati. Eaque alias excepturi veniam. At, aut sequi esse facilis consequatur nisi repellat praesentium soluta modi, animi fugiat ducimus?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat vero itaque obcaecati. Eaque alias excepturi veniam. At, aut sequi esse facilis consequatur nisi repellat praesentium soluta modi, animi fugiat ducimus?</p>
        </section>
        <h1 style={{color:'#fff', textAlign:'center'}}>Meet our team</h1>
        <p style={{color:'#fff', textAlign:'center'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <section className='aboutLeaders'>
            <OurLeader img={imgMission} title='Jonathan Warner' desc='CEO' />
            <OurLeader img={imgMission} title='Tammy Johnson' desc='Manager' />
            <OurLeader img={imgMission} title='David Hacket' desc='Smm' />
            <OurLeader img={imgMission} title='Pamela Wagner' desc='Agent' />
        </section>
        <h1 style={{color:'#fff', textAlign:'center'}}>What we do</h1>
        <section className='WhatWeDo'>
            <WhatWeDo icon={<ion-icon name="bonfire-outline"></ion-icon>} title='Lorem Ipsum' desc='Lorem ipsum dolor, sit amet consectetur.' />
            <WhatWeDo icon={<ion-icon name="earth-outline"></ion-icon>} title='Dotor Amet' desc='Lorem ipsum dolor, sit amet consectetur.' />
            <WhatWeDo icon={<ion-icon name="flower-outline"></ion-icon>} title='Sit Consistence' desc='Lorem ipsum dolor, sit amet consectetur.' />
        </section>
        </div>
        </>
    )
}