import CardData from "./components/cardData";
import SearchBox from "./components/searchBox";
import DetailsViewer from "./components/detailsViewer";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [foodId, setFoodId] = useState("782585");
  const [errorr, setError] = useState(null);
  const [error, setErrors] = useState(null);
  const detailsUrl = `https://api.spoonacular.com/recipes/${foodId}/information`;

  //const apikeey = "7101900a2282406b9ff4351095d2477f";
  // const apikeeyTwo = "b4ff9213d30741c58ded7e68610a0596";
  // const apikeeyONE = "21dd500c65464c1cba1dc43449da9d0e";
  const url = "https://api.spoonacular.com/recipes/complexSearch";
  const apiKeys = [
    "7101900a2282406b9ff4351095d2477f",
    "b4ff9213d30741c58ded7e68610a0596",
    "21dd500c65464c1cba1dc43449da9d0e",
  ];
  return (
    <>
      {errorr === null ? (
        <>
          <p className="errorViewer redText">
            [ NOTE: Please do not over use this app.It was made for only
            education purpose.It has a limit for 200 search per day. ]
          </p>
          <SearchBox value={value} setValue={setValue} />
          <div className="container">
            <div className="childContainer">
              <CardData
                url={url}
                apiKeys={apiKeys}
                value={value}
                foodList={foodList}
                setFoodList={setFoodList}
                setFoodId={setFoodId}
                error={error}
                setErrors={setErrors}
              />
            </div>
            <div className="childContainer">
              <DetailsViewer
                detailsUrl={detailsUrl}
                foodId={foodId}
                apiKeys={apiKeys}
                errorr={errorr}
                setError={setError}
              />
            </div>
          </div>
        </>
      ) : (
        
      )}
    </>
  );
}

export default App;
