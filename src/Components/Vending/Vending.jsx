import React, { useState, useCallback, useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { VendingContext } from "./Context/VendingContext";

const Vending = (props) => {
  const { wallet } = props;
  const { products, cart } = useContext(VendingContext);
  const [arrProducts, setArrProducts] = useState([]);

  const changeShowOptions = async () => {
    let productsCopy = (wallet ? [...products] : [...cart]).filter(
      (elem) => elem.Quantity > 0
    );
    let newArr = [];

    while (productsCopy.length > 0) {
      newArr.push(productsCopy.splice(0, 3));
    }
    console.log(newArr);
    await setArrProducts((prev) => newArr);
  };
  useEffect(() => {
    changeShowOptions();
  }, [products]);
  useEffect(() => {
    changeShowOptions();
  }, [cart]);
  useEffect(() => {
    changeShowOptions();
  }, [wallet]);
  return (
    <Table striped bordered>
      <tbody>
        {arrProducts &&
          arrProducts.map((line, id) => {
            return (
              <tr key={id} className="d-flex text-center">
                {line
                  .filter((elem) => elem.Quantity > 0)
                  .map((elem) => {
                    return (
                      <td key={elem.Id} className="col-4">
                        <div>
                          <div>
                            <b
                              style={{
                                textAlign: "left",
                                float: "left",
                                width: "50%",
                              }}
                            >
                              Code: {elem.Id}
                            </b>
                            <b
                              style={{
                                textAlign: "right",
                                width: "50%",
                                float: "left",
                              }}
                            >
                              Price: {elem.Price}
                            </b>
                          </div>
                          <div>{elem.Name}</div>
                          <br></br>
                          <div test-id={elem.Id}>
                            Quantity : {elem.Quantity}
                          </div>
                        </div>
                      </td>
                    );
                  })}
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default Vending;
