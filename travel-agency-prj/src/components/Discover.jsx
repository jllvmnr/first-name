import DiscoverImg from '../images/discover.jpg'

export default function Discover(){
    return(
        <>
        <section className="discoverSection">
            <div className="container">
                <h2>Discover</h2>
                <p>Discover the world through our eyes</p>
            </div>
            <img src={DiscoverImg} className='discoverImg' alt="discover" />
            <button className='discoverBtn'>Book Now</button>
        </section>
        </>
    )
}