import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { FC, useEffect, useState } from 'react'

export const BalanceDisplay: FC = () => {
    const [balance, setBalance] = useState(0);
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    useEffect(() => {
        if (!connection || !publicKey) {
            return;
        }

        connection.onAccountChange(
            publicKey,
            updatedAccountInfo => {
                setBalance(updatedAccountInfo.lamports)
            },
            "confirmed",
        );

        connection.getAccountInfo(publicKey).then(info => {
            if (info) {
                setBalance(info.lamports);
            } else {
                setBalance(0); // Default to 0 if account doesn't exist
            }
        }).catch(error => {
            console.log("Failed to fetch account info:", error);
        });
    }, [connection, publicKey]);

    return (
        <div>
            <p>{publicKey ? `Balance ${balance / LAMPORTS_PER_SOL}` : ""} </p>
        </div>
    )
}