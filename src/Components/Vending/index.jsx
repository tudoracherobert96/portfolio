import React, { useState } from "react";
import { VendingProvider } from "./Context/VendingContext";
import Vending from "./Vending";
import Wallet from "./Wallet";
import AddMoney from "./AddMoney";

const VendingMachine = () => {
  const [isWalletOpen, setIsWalletOpen] = useState(true);
  return (
    <VendingProvider>
      <div className="container-fluid">
        <div className="row">
          <div className="col offset-xl-8 offset-lg-8 offset-md-8 offset-sm-6 offset-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
            <div className="text-center">
              <button
                onClick={() => setIsWalletOpen(!isWalletOpen)}
                className="text-center"
                test-id="btnOpenWallet"
              >
                {isWalletOpen ? "Add Money" : "Buy Items"}
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
            <Vending wallet={isWalletOpen} />
          </div>
          <div className="col offset-xl-1 offset-lg-1 offset-md-1 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            {isWalletOpen && <Wallet />}
            {!isWalletOpen && <AddMoney />}
          </div>
        </div>
      </div>
    </VendingProvider>
  );
};

export default VendingMachine;
