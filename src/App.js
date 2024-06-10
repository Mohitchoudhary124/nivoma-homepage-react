import './App.css';
import Ceosection from './assests/components/Ceosection';
import Faqsection from './assests/components/Faqsection';
import Footersection from './assests/components/Footersection';
import Fourcardsection from './assests/components/Fourcardsection';
import Headermainsection from './assests/components/Headermainsection';
import Headermainsection2 from './assests/components/Headermainsection2';
import Slider1section from './assests/components/Slider1section';
import Slider2section from './assests/components/Slider2section';
import Thirdlastsection from './assests/components/Thirdlastsection';
import Threecardsection from './assests/components/Threecardsection';

function App() {
  return (
    <div>
      <Headermainsection/>
      <Headermainsection2/>
      <Slider1section/>
      <Threecardsection/>
      <Fourcardsection/>
      <Slider2section/>
      <Ceosection/>
      <Thirdlastsection/>
      <Faqsection/>
      <Footersection/>
    </div>
  );
}

export default App;
