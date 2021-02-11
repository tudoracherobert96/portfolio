import React, { useState, useCallback, useContext } from "react";
import { Table } from "react-bootstrap";
import { VendingContext } from "./Context/VendingContext";

const Wallet = () => {
  const { products, setProducts, money, setMoney, cart, setCart } = useContext(
    VendingContext
  );

  const addCode = (e) => {
    document.getElementById("inputCode").value += e.target.innerHTML;
  };
  const buyItems = () => {
    const itemCode = document.getElementById("inputCode").value;
    if (
      itemCode < products[0].Id ||
      itemCode > products[products.length - 1].Id
    ) {
      alert("Product invalid");
    } else if (products[itemCode].Quantity === 0) {
      alert("Insufficient quantity");
    } else if (products[itemCode].Price > money) {
      alert("Insufficient money");
    } else {
      const productsCopy = [...products];
      const cartCopy = [...cart];
      productsCopy[itemCode].Quantity--;
      cartCopy[itemCode].Quantity++;
      setProducts(productsCopy);
      setCart(cartCopy);
      setMoney((prevMoney) => prevMoney - productsCopy[itemCode].Price);
    }
    document.getElementById("inputCode").value = "";
  };
  return (
    <div>
      <div className="text-center">
        <h5 test-id="walletHeader">Money : {money}</h5>
      </div>
      <div className="text-center">
        <input
          id="inputCode"
          style={{ width: "100%", textAlign: "center" }}
        ></input>
      </div>
      <Table striped bordered hover>
        <tbody>
          <tr className="d-flex text-center">
            <td id="btnOne" className="col-4" onClick={(e) => addCode(e)}>
              1
            </td>
            <td id="2" className="col-4" onClick={(e) => addCode(e)}>
              2
            </td>
            <td id="3" className="col-4" onClick={(e) => addCode(e)}>
              3
            </td>
          </tr>
          <tr className="d-flex text-center">
            <td id="4" className="col-4" onClick={(e) => addCode(e)}>
              4
            </td>
            <td id="5" className="col-4" onClick={(e) => addCode(e)}>
              5
            </td>
            <td id="6" className="col-4" onClick={(e) => addCode(e)}>
              6
            </td>
          </tr>
          <tr className="d-flex text-center">
            <td id="7" className="col-4" onClick={(e) => addCode(e)}>
              7
            </td>
            <td id="8" className="col-4" onClick={(e) => addCode(e)}>
              8
            </td>
            <td id="9" className="col-4" onClick={(e) => addCode(e)}>
              9
            </td>
          </tr>
          <tr className="d-flex text-center">
            <td
              id="del"
              className="col-4 alert-danger"
              onClick={() => (document.getElementById("inputCode").value = "")}
            >
              Del
            </td>
            <td id="0" className="col-4" onClick={(e) => addCode(e)}>
              0
            </td>
            <td
              id="pay"
              className="col-4 alert-success"
              onClick={() => buyItems()}
            >
              Pay
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Wallet;
