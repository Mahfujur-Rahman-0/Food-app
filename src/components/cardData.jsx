import { useEffect } from "react";

export default ({
  url,
  setErrors,
  error,
  apiKeys,
  value,
  foodList,
  setFoodList,
  setFoodId,
}) => {
  useEffect(() => {
    const callData = async () => {
      let dataCall = null;
      for (const apiKey of apiKeys) {
        try {
          //console.log(`Checking API key: ${apiKey}`);
          const response = await fetch(
            `${url}?value=${value}&apiKey=${apiKey}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          dataCall = await response.json();
          break; // If fetching is successful, exit the loop
        } catch (error) {
          //console.error(`Error fetching data with API key ${apiKey}:`, error);
        }
      }

      if (dataCall === null) {
        setErrors("Failed to fetch data");
        setFoodList([]);
      } else {
        setErrors(null);
        setFoodList(dataCall.results); // Assuming results is the key in the response containing foodList
      }
    };
    callData();
  }, [value]);

  return (
    <>
      {error && <p>Error: {error}</p>}

      {foodList.map((data) => (
        <div key={data.id} className="cardCointainer">
          <img className="cardImg" src={data.image} alt="" />
          <h4>{data.title}</h4>
          <div className="clickBtnContainer">
            <button
              onClick={() => {
                setFoodId(data.id);
              }}
              className="clickBtn"
            >
              Get Details
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
