import './SectionFive.css';
import SectionFiveImg from '../../../images/Group 13.png';

function SectionFive(){
    return(
        
    <div class="align-app">
    <div class="app">
        <div class="app-left"><img src={SectionFiveImg} alt=""/></div>
        <div class="app-right">
            <p class="header">Watch Your Delivery At Any Time</p>
            <p>With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!</p>
            <div>
               <button><a href=""><i class="fa-brands fa-apple"></i> App Store</a></button>
                <button><a href=""><i class="fa-brands fa-google-play"></i> Google App</a></button>
            </div>
        </div>
    </div>
</div>
    );

}
export default SectionFive;