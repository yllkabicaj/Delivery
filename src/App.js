import './App.css';
import Navigation from './components/navigation/Navigation';
import './reset.css';
import SectionOne from './components/section/section1/SectionOne';
import SectionTwo from './components/section/section2/SectionTwo';
import SectionThree from './components/section/section3/SectionThree';
import SectionFour from './components/section/section4/SectionFour';
import SectionFive from './components/section/section5/SectionFive';
import SectionSix from './components/section/section6/SectionSix';
import SectionSeven from './components/section/section7/SectionSeven';


function App() {
  return (
    <div className='div'>

      <Navigation></Navigation>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <SectionFive></SectionFive>
      <SectionSix></SectionSix>
      <SectionSeven></SectionSeven>
    </div>
  );
}

export default App;
