

export default function Packages(){

    function PackagesCard(props){
        return(
            <div className={props.className}>
                <p className="packIonIcon">{props.rate} {props.rate}  {props.rate} {props.rate}</p>
                <p className="packTitle">{props.title}</p>
                <p className="packTime"><ion-icon name="time-outline"></ion-icon>{props.time}</p>
                <p className="packPlace"><ion-icon name="pin-outline"></ion-icon>{props.place}</p>
            </div>
        )
    }

    return(
        <>
        <section className="packagesSection">
            <div className="container">
                <h2>Packages</h2>
                <h1>Top packages that for you</h1>
                <PackagesCard className='PackagesCard card1' rate={<ion-icon name="star-sharp" style={{color:'yellow'}}></ion-icon>} title='The Kesugi Ridge Trail' time='3 to 4 days' place='Alaska, USA' />
                <PackagesCard className='PackagesCard card2' rate={<ion-icon name="star-sharp" style={{color:'yellow'}}></ion-icon>} title='The Santa Cruz Track' time='3 to 4 days' place='Peru' />
                <PackagesCard className='PackagesCard card3' rate={<ion-icon name="star-sharp" style={{color:'yellow'}}></ion-icon>} title='Tour Du Mont Blanc' time='7 to 11 days' place='Europe-France,Italy' />
                <PackagesCard className='PackagesCard card4' rate={<ion-icon name="star-sharp" style={{color:'yellow'}}></ion-icon>} title='The Kesugi Schame Route' time='3 to 4 days' place='Alaska, USA' />
                <PackagesCard className='PackagesCard card5' rate={<ion-icon name="star-sharp" style={{color:'yellow'}}></ion-icon>} title='The Kesugi Milford Track' time='8 to 11 days' place='South Island,New Zeland' />
            </div>
        </section>
        </>
    )
}