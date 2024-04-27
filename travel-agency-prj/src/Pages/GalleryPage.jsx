import './styles/GalleryPage.css'
import imgCard from '../images/popular_place5.jpg'
import imgCard2 from '../images/popular_place1.jpg'

export default function GalleryPage(){

    function GalleryCard(props){
        return(
            <>
            <div className='galleryEveryCard'>
                <img src={props.img} className='galleryImg' alt="galleryImg" />
                <p className='galleryTitle'>{props.title}</p>
                <p className='galleryTime'><ion-icon name="time-outline"></ion-icon>{props.time}</p>
                <p className='galleryPlace'><ion-icon name="pin-outline"></ion-icon>{props.place}</p>
            </div>
            </>
        )
    }

    return(
        <>
        <section className='galleryPage'>
            <h1>Top Destinations</h1>
            <div className='galleryCard'>
                <GalleryCard img={imgCard} title='The Kesugi Ridge Trail' time='3 to 4 days' place='Alaska, USA' />
                <GalleryCard img={imgCard2} title='The Name of the Place' time='x to x days' place='City, Country' />
                <GalleryCard img={imgCard} title='The Name of the Place' time='x to x days' place='City, Country' />
                <GalleryCard img={imgCard2} title='The Name of the Place' time='x to x days' place='City, Country' />
            </div>
        </section>
        <section className='galleryPage'>
            <h1>Find Popular tours</h1>
            <div className='galleryCard'>
                <GalleryCard img={imgCard} title='The Kesugi Ridge Trail' time='3 to 4 days' place='Alaska, USA' />
                <GalleryCard img={imgCard2} title='The Name of the Place' time='x to x days' place='City, Country' />
                <GalleryCard img={imgCard} title='The Name of the Place' time='x to x days' place='City, Country' />
                <GalleryCard img={imgCard2} title='The Name of the Place' time='x to x days' place='City, Country' />
            </div>
        </section>
        <section className='galleryPage'>
            <h1>Top Deals Worldwide</h1>
            <div className='galleryCard'>
                <GalleryCard img={imgCard} title='The Kesugi Ridge Trail' time='3 to 4 days' place='Alaska, USA' />
                <GalleryCard img={imgCard2} title='The Name of the Place' time='x to x days' place='City, Country' />
                <GalleryCard img={imgCard2} title='The Name of the Place' time='x to x days' place='City, Country' />
                <GalleryCard img={imgCard2} title='The Name of the Place' time='x to x days' place='City, Country' />
            </div>
        </section>
        </>
    )
}