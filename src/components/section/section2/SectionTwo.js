import './SectionTwo.css';
import SectionTwoImg from '../../../images/Untitled.png';

function SectionTwo(){
    return(
       
        <div className="align-about">
            <div className="about">
                <div className="about-left"><img src={SectionTwoImg} alt=""/></div>
                <div className="about-right">
                    <p className="header hh">Find Out a Little More About Us</p>
                    <p>We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.</p>
                </div>
            </div>
        </div>

    );
}
export default SectionTwo;