import React, { useContext, useState } from "react";
import { VendingContext } from "./Context/VendingContext";

const AddMoney = () => {
  //   const { productsC, moneyC } = useContext(VendingContext);
  //   const [products, setProducts] = useState(...productsC);
  //   const [money, setMoney] = useState(...moneyC);
  const { products, setProducts, money, setMoney } = useContext(VendingContext);

  const addMoney = () => {
    if (document.getElementById("inputMoney").value > 0) {
      setMoney(money + parseInt(document.getElementById("inputMoney").value));
    } else {
      alert("Insert a positive value!");
    }
    document.getElementById("inputMoney").value = 0;
  };
  return (
    <div className="text-center">
      <h5 test-id="addMoneyHeader">Money : {money}</h5>
      <input
        id="inputMoney"
        type="number"
        defaultValue="0"
        className="text-center"
      ></input>
      <button id="btnAddMoney" onClick={() => addMoney()}>
        Add money
      </button>
    </div>
  );
};

export default AddMoney;
