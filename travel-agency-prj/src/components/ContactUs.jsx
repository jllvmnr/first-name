import FormContact from "./FormConatact"

export default function Contacts(){

    function ContactValue(props){
        return(
            <>
            <div className="contactValues">
                <p className="ContactIcon">{props.icon}</p>
                <p className="ContactTitle">{props.title}</p>
                <p className="ContactDesc">{props.desc}</p>
            </div>
            </>
        )
    }

    return(
        <>
        <section className="contactsSection">
            <div className="container">
                <ContactValue icon={<ion-icon name="mail-unread-outline"></ion-icon>} title='Email' desc='Contact@trailmakers.com' />
                <ContactValue icon={<ion-icon name="call-outline"></ion-icon>} title='Call us' desc='+996 777-00-00-00' />
                <ContactValue icon={<ion-icon name="location-outline"></ion-icon>} title='Head Office' desc='st. Lenin 000 Osh c.,Kyrgyzstan' />
            </div>
        </section>
        </> 
    )
}