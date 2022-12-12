import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function useUserWallet() {
    const [walletAddress, setWalletAddress] = useState("");

    useEffect(() => {
        getCurrentWalletConnected();
        addWalletListener();

    }, [walletAddress]);

    const connectWallet = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                /* MetaMask is installed */
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);

            } catch (err) {
                console.error(err.message);
            }
        } else {
            /* MetaMask is not installed */
            console.log("Please install MetaMask");
        }
    };

    const getCurrentWalletConnected = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);

                } else {
                    console.log("Connect to MetaMask using the Connect button");
                }
            } catch (err) {
                console.error(err.message);
            }
        } else {
            /* MetaMask is not installed */
            console.log("Please install MetaMask");
        }
    };

    const addWalletListener = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            window.ethereum.on("accountsChanged", (accounts) => {
                setWalletAddress(accounts[0]);
            });
        } else {
            /* MetaMask is not installed */
            setWalletAddress("");
            console.log("Please install MetaMask");
        }
    };



    return (


        <button
            onClick={connectWallet}
        >
            <span className={
                "text-sm py-2 px-4 text-green-700 font-bold block w-full whitespace-nowrap bg-transparent "
            }>
                {walletAddress && walletAddress.length > 0
                    ? ` Connected: ${walletAddress.substring(
                        0,
                        6
                    )}...${walletAddress.substring(38)}`
                    : <p className="text-blueGray-500"><FontAwesomeIcon icon="fa-solid fa-wallet" />Connect Wallet</p>}
            </span>
        </button>


    );
}

