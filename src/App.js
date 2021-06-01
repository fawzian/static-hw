import Nav from "./components/nav";
import Reviews from "./components/reviews";
import Rating from "./components/rating";
import Analysis from "./components/analysis";
import Visitors from "./components/visitors";

import './style.css';

function App() {
 return (<div className="wrapper">
<Nav />
<div className="box">
<Reviews />
<Rating />
<Analysis />
<Visitors />
</div>
 </div>);
}

export default App;
