import './SectionOne.css';
import firstSectionImg from '../../../images/Group.png';

function SectionOne(){
return(
    
         <div className="align-home">
            <div className="home">
                <div className="home-left">
                    <h1>Order Products Faster Easier</h1>
                    <p>Order your favorite foods at any time and we will deliver them right to where you are.</p>
                    <button>Get Started</button>
                </div>
                <div className="home-right"><img src={firstSectionImg} alt="" /></div>
            </div>
        </div>
   
);
}
export default SectionOne;
