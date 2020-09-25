import React, {useState, useEffect} from 'react';
import Frase from './components/Frase';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

//styled component
const Container = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem;
  font-size: 2rem;
  border: 2px solid #000;
  cursor:pointer;
  transition: all .8s ease;

  :hover {
    background-size: 400px;
  }
`;

function App() {

  //state de frase
  const [frase, setFrase] = useState({});

  //state de loading
  const [loading, setLoading] = useState(false);

  async function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  const consultarApi = async () => {
      setLoading(true);
      const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      const frase = await api.json();
      await wait(1500);
      setLoading(false);
      setFrase(frase[0]);
  }

  //cargar la frase al cargar el componente
  useEffect(() => {
    consultarApi();
  },[])

  return (
    <Container>
       { loading? <Spinner></Spinner> : 
      <Frase
        frase={frase}
      ></Frase> }
      <Boton
        onClick={consultarApi}
        type="button"
      >Obtener Frase</Boton>
    </Container>
  );
}

export default App;
