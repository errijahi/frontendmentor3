import '../css/active.css'

import Facebook from '../images/icon-facebook.svg';
import Twiter from '../images/icon-twitter.svg';
import Pinterest from '../images/icon-pinterest.svg'

export default function Active() {
    return (
        <div className="box2">
            <div className="hover">
                   <p className="hovershare">Share</p>
                   <img className="Facebook" src={Facebook} alt="Facebook"/>
                   <img className="Twiter" src={Twiter} alt="Twiter"/>
                   <img className="Pinterest" src={Pinterest} alt="Pinterest"/>
                   
               </div> 
               <div className="arrow-down"></div>
        </div>
    )
}
