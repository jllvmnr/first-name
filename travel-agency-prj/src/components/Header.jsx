import skyBg from '../images/sky.png'
import bgmount from '../images/bgmount.png'
import logo from '../images/logo.png'

export default function Header(){

    function HeaderCard(props){
        return(
            <div className='headerCard2'>
                <p>{props.title}</p>
            <div className='headerCard1'>
                <p>{props.value}</p>
            </div>
            </div>
        )
    }

    return(
        <>
        <div className='gradientEnd'></div>
        <header>
          <div className="container">
            <div className="header-start">
                <img src={logo} className="logo" alt="logo" />
                <button className="join-travel-btn cta">
                    <ion-icon name="person-add-outline"></ion-icon>
                    <p>Join traveller</p>
                </button>
                <div class="join-travel-btn number">(996) 777-000000</div>
            </div>
            <img src={skyBg} alt="sky" className='skyBg'/>
            <div className="header-content">
                <p className='header-content-find'>find</p>
                <p className='header-content-your'>your</p>
                <p className='header-content-trail'>trail</p>
            </div>
            <div className='headerCard'>
                <HeaderCard title="Satisfied Clients" value="32541+" />
                <HeaderCard title="Camps organized" value="524+" />
                <HeaderCard title="Incident happened" value="0" />
            </div>
            <div className='headerSecondCard'>
                <img src={bgmount} alt="" />
                <p>we organize professional adventures in the most dangerous corners of our planet.People change after our tours.Forever.</p>
            </div>
            <button className='btnHeadCard'><ion-icon name="arrow-forward-outline"></ion-icon></button>
            <p className='headerCardImgText'>the himalayas mountain</p>
          </div>
        </header>
        </>
    )
}