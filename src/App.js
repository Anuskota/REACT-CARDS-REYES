import sisebuto from "./img/rey_sisebuto.png"
import leogivildo from "./img/rey_leogivildo.png"
import atanagildo from "./img/rey_atanagildo.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={sisebuto} alt="rey Sisebuto" />
        <p className="name">Sisebuto</p>
      </div>
      <div className="card">
        <img src={leogivildo} alt="rey Sisebuto" />
        <p className="name">Leogivildo</p>
      </div>
      <div className="card">
        <img src={atanagildo} alt="rey Sisebuto" />
        <p className="name">Atanagildo</p>
      </div>
    </div>
  );
}

export default App;
