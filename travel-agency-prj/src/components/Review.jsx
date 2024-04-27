

export default function Review(){

    function ReviewRate(props){
        return(
            <>
            <p className="reviewRate">{props.rate} {props.rate} {props.rate} {props.rate} {props.rate}</p>
            </>
        )
    }

    return(
        <>
        <section className="reviewSection">
            <div className="container">
                <h2>Review</h2>
                <h1>What our client says</h1>
                <p className="reviewP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus at facilis consectetur magnam omnis, atque quam nobis provident reiciendis praesentium illum esse corrupti officiis, voluptate dolorum voluptatem ipsum. In, facere, atque quam nobis provident reiciendis praesentium illum esse corrupti officiis, voluptate dolorum voluptatem ipsum. In, facere</p>
                <ReviewRate rate={<ion-icon name="star-sharp" style={{color:'yellow'}}></ion-icon>} />
                <p className="reviewName">Eva Chance</p>
            </div>
        </section>
        </>
    )
}