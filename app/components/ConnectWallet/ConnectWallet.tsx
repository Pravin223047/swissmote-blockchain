"use client";

import React from "react";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastStyles.css"; // Import the custom CSS file

declare global {
  interface Window {
    ethereum: any;
  }
}

const ConnectWallet = () => {
  const [balance, setBalance] = useState<string | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        fetchBalance(accounts[0]);
      } else {
        setAccount(null);
        setBalance(null);
      }
    };

    const handleChainChanged = () => {
      window.location.reload();
    };

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      setLoading(true);
      setError(null);

      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        fetchBalance(accounts[0]);
        toast.success("Successfully connected to your wallet!");
      } catch (error) {
        console.error("Error connecting wallet:", error);
        setError("Failed to connect wallet. Please check your MetaMask setup.");
      } finally {
        setLoading(false);
      }
    } else {
      setError(
        "Please install MetaMask to use this feature. You can download MetaMask from the Chrome extension store."
      );
    }
  };

  const fetchBalance = async (account: string) => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        const balanceWei = await web3.eth.getBalance(account);
        const balanceEth = web3.utils.fromWei(balanceWei, "ether");
        setBalance(balanceEth);
      } catch (error) {
        console.error("Error fetching balance:", error);
        setError("Failed to fetch balance.");
      }
    }
  };

  const isDisabled = loading || !!account;

  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-full">
      <button
        onClick={connectWallet}
        className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out ${
          isDisabled ? "bg-gray-400 cursor-not-allowed" : ""
        }`}
        disabled={isDisabled}
      >
        {loading ? "Connecting..." : account ? "Connected" : "Connect Wallet"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {account && (
        <div className="mt-4">
          <div className="flex items-center gap-x-2 flex-col xl:flex-row">
            <p className="font-semibold text-blue-900">Account:</p>
            <p className="text-black text-sm lg:text-md">{account}</p>
          </div>
          <div className="flex items-center gap-x-2 flex-col xl:flex-row">
            <p className="font-semibold text-blue-900">Balance:</p>
            <p className="text-black">{balance} ETH</p>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ConnectWallet;
