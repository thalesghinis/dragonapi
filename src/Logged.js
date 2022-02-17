import React, { useState, useEffect } from "react";
import CustomButton from './components/CustomButton'
import "./scss/styles.scss";
import Specified from "./Specified";
import { Link } from 'react-router-dom'

function Logged() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // const [data, setData] = useState([]);
    // const [sortType, setSortType] = useState('');
  
  
    // Nota: O array [] deps vazio significa
    // este useEffect será executado uma vez
    // semelhante ao componentDidMount()
    useEffect(() => {
      fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Nota: é importante lidar com errros aqui
          // em vez de um bloco catch() para não receber
          // exceções de erros reais nos componentes.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])


    // useEffect(() => {
    //     const sortArray = type => {
    //       const types = {
    //         name: 'name',
    //       };
    //       const sortProperty = types[type];
    //       const sorted = [...items].sort((a, b) => b[sortProperty] - a[sortProperty]);
    //       setData(sorted);
    //     };
    //     sortArray(sortType);
    //   }, [sortType]); 
    // const items = [...item].sort();

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        
      return (
          <>
        <ul className="dragonDiv">
          {items.sort((a, b) => a.name > b.name ? 1:-1).map(item => (
            <>
            <li className="nameDragon" key={item.id}>
                {item.name}
            </li>
            <li className="creation">
                {item.createdAt}
            </li>
            <li className="typeOf">
                {item.type}
            </li>
            <li>
                {item.histories}
            </li>
            </>
          ))}
        </ul>
        <div className="flexStyle">
            <CustomButton>
                <Link to='/specified'>
                    Veja um dragon especifico
                </Link>
            </CustomButton>
        </div>
        </>
      );
    }
  }

  export default Logged;
  