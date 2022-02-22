import React, { useState, useEffect } from "react";
import CustomButton from './components/CustomButton'
import "./scss/styles.scss";
import { Link } from 'react-router';

function Specified() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
      fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        
      return (
          <div className="specifiedDragon">
            <ul className="dragonDiv">
              {items.sort((a, b) => a.name > b.name ? 1:-1).slice(0, 1).map(item => (
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
                </>
              ))}
            </ul>
          <div className="flexStyle">
        </div>
        </div>
      );
    }
  }

  export default Specified;
  