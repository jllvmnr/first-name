import './styles/FeaturePage.css'
import imgFeature from '../images/popular_place5.jpg'
import imgFeature2 from '../images/popular_place4.jpg'
import iconDef from '../images/no_icon.png'

export default function FeaturePage(){
    return(
        <>
        <div className='container'>
    <div className="contentFeature">
      <div className="cont_bx">
        <h1>The right desitination for you and your family</h1>
        <p>
          Creative taglines have the capability of capturing the attention of
          potential custumer.
        </p>
        <button>Start your search</button>
      </div>
      <div className="trip_bx">
        <div className="search_bx">
          <div className="card">
            <h4>
              Location <i className="bi bi-caret-down-fill" />
            </h4>
            <input type="text" placeholder="Enter your destination" />
          </div>
          <div className="card">
            <h4>
              Date <i className="bi bi-caret-down-fill" />
            </h4>
            <input type="date" />
          </div>
          <div className="card">
            <h4>
              People
              <i className="bi bi-caret-down-fill" />
            </h4>
            <input type="number" placeholder="How many People?" />
          </div>
          <input type="button" defaultValue="Explore Now" />
        </div>
        <div className="travel_bx">
          <h4>Countries to travel</h4>
          <div className="cards">
            <div className="card">
              <h3>
                INDIA <img src={iconDef} alt="" />
              </h3>
              <img src={imgFeature2} alt="" />
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>
                  Mumbai Central <br /> <span>$460</span>
                </h5>
              </div>
            </div>
            <div className="card">
              <h3>
                TURKEY <img src={iconDef} alt="" />
              </h3>
              <img src={imgFeature} alt="" />
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>
                  Istanbul <br /> <span>$420</span>
                </h5>
              </div>
            </div>
            <div className="card">
              <h3> DUBAI{" "}
                <img src={iconDef} alt=""/>
              </h3>
              <img src={imgFeature2} alt="" />
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>
                  Burj Khalifa <br /> <span>$520</span>
                </h5>
              </div>
            </div>
            <div className="card">
              <h3>
                SPAIN <img src={iconDef} alt="" />
              </h3>
              <img src={imgFeature} alt="" />
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>
                  Madrid <br /> <span>$740</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div className="offers">
    <h1>Best tour Package offers for You</h1>
    <p>choose your next destination</p>
    <div className="cards">
      <div className="card">
        <h3>Mecca-Saudi Arabia</h3>
        <div className="img_text">
          <img src={imgFeature} alt="" />
          <h4>
            Inclded: Air ticket, Hotel, Breakfast, Tours, Airport Transfer
          </h4>
        </div>
        <div className="cont_bx">
          <div className="price">
            <div className="heart_chat">
              <i className="bi bi-heart-fill">
                <span>86415</span>
              </i>
              <i className="bi bi-chat-fill">
                <span>4586</span>
              </i>
            </div>
            <div className="info_price">
              <a href="">More Info</a>
              <h4>$1350</h4>
            </div>
          </div>
          <div className="dayes">
            30 Days <br /> Mecca{" "}
          </div>
        </div>
      </div>
      <div className="card">
        <h3>Tashkent-Uzbekistan</h3>
        <div className="img_text">
          <img src={imgFeature2} alt="" />
          <h4>
            Inclded: Air ticket, Hotel, Breakfast, Tours, Airport Transfer
          </h4>
        </div>
        <div className="cont_bx">
          <div className="price">
            <div className="heart_chat">
              <i className="bi bi-heart-fill">
                <span>8650</span>
              </i>
              <i className="bi bi-chat-fill">
                <span>4006</span>
              </i>
            </div>
            <div className="info_price">
              <a href="">More Info</a>
              <h4>$150</h4>
            </div>
          </div>
          <div className="dayes">
            5 Days <br /> Uzbekistan{" "}
          </div>
        </div>
      </div>
      <div className="card">
        <h3>Astana-Kazakhstan</h3>
        <div className="img_text">
          <img src={imgFeature} alt="" />
          <h4>
            Inclded: Air ticket, Hotel, Breakfast, Tours, Airport Transfer
          </h4>
        </div>
        <div className="cont_bx">
          <div className="price">
            <div className="heart_chat">
              <i className="bi bi-heart-fill">
                <span>4500</span>
              </i>
              <i className="bi bi-chat-fill">
                <span>2100</span>
              </i>
            </div>
            <div className="info_price">
              <a href="">More Info</a>
              <h4>$180</h4>
            </div>
          </div>
          <div className="dayes">
            5 Days <br /> Kazakhstan{" "}
          </div>
        </div>
      </div>
      <div className="card">
        <h3>Male-Maldivi</h3>
        <div className="img_text">
          <img src={imgFeature2} alt="" />
          <h4>
            Inclded: Air ticket, Hotel, Breakfast, Tours, Airport Transfer
          </h4>
        </div>
        <div className="cont_bx">
          <div className="price">
            <div className="heart_chat">
              <i className="bi bi-heart-fill">
                <span>8641</span>
              </i>
              <i className="bi bi-chat-fill">
                <span>4586</span>
              </i>
            </div>
            <div className="info_price">
              <a href="">More Info</a>
              <h4>$520</h4>
            </div>
          </div>
          <div className="dayes">
            5 Days <br /> Maldivi{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</>

    )
}