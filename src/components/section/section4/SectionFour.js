import './SectionFour.css';
import SectionThreeImg1 from '../../../images/Group 3.png';
import SectionThreeImg2 from '../../../images/Group 4.png';
import SectionThreeImg3 from '../../../images/Group 5.png';


function SectionFour(){
    return(
        
    <div class="servicesalign">
    <div class="services">
        <div class="services-title">Some Services We
            Offer</div>
        <div class="services-boxes">
            <div class="service-box">
                <h3>Payment Done</h3>
                <img src={SectionThreeImg1} alt=""/>
                <p>Pay with a Visa or PayPal card and without much ado.</p>
                <a href="">Learn More</a>
            </div>

            <div class="service-box">
                <h3>Find Your Product</h3>
                <img src={SectionThreeImg2} alt=""/>
                <p>We offer sale of products through the Internet.</p>
                <a href="">Learn More</a>
            </div>
            <div class="service-box">                    
                <h3>Payment Done</h3>
                <img src={SectionThreeImg3} alt=""/>
                <p>In our app you can see the delay time of your order.</p>
                <a href="">Learn More</a></div>
        </div>
    </div>
</div>
    );
}
export default SectionFour;