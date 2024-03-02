import { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api';


function App() {

  const [input, setInput] = useState('')


  async function handleSearch(){
    
    if(input === ''){
      alert("preencha alguma fruta")
      return;
    }

    try{
      const response = await api.get(`/VitaminasC/frutas?nome=${input}`);
      console.log(response.data);

    }catch{
      alert("erro ao buscar");

    }
    
  }

  return (
    <div className="container">
      <h1 className="title">Vitaminas/C</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite uma fruta..."
        value={input}
        onChange={(e) => setInput (e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      
      <main className="main">
        <h2>LARANJA</h2>

        <h3>53.20mg</h3>

      </main>
    
    </div>
  );
}

export default App;
