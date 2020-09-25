import React, {useState, useEffect} from 'react';
import Frase from './components/Frase';
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
`;

function App() {

  //state de frase
  const [frase, setFrase] = useState({});


  const consultarApi = async () => {

      const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      const frase = await api.json();
      console.log(frase);
      setFrase(frase[0]);
  }

  //cargar la frase al cargar el componente
  useEffect(() => {
    consultarApi();
  },[])

  return (
    <Container>
      <Frase
        frase={frase}
      ></Frase>
      <Boton
        onClick={consultarApi}
        type="button"
      >Obtener Frase</Boton>
    </Container>
  );
}

export default App;
