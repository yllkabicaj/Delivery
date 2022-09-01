import './SectionThree.css';
import SectionThreeImg from '../../../images/Group 6.png';
function SectionThree(){
    return(
        
        <div className="align-safety">
            <div className="safety">
                <div className="safety-left">
                    <p className="header hh">Your Safety Is Important</p>
                    <p>When your order reaches you, we have the health safety protocols, so that you are protected from any disease. Watch the video of how the delivery is made.</p>
                </div>
                <div className="safety-right"><img src={SectionThreeImg} alt=""/></div>
            </div>
        </div>
    );
}

export default SectionThree;