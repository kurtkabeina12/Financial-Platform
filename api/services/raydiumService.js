const raydiumSDK = require('@raydium-io/raydium-sdk');
const { Connection, PublicKey } = require('@solana/web3.js');

const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

exports.buyTokens = async (amountToken, assetId, userWallet) => {
    try {
        // Check if the swap function exists
        if (typeof raydiumSDK.swap !== 'function') {
            throw new Error('swap function is not available in raydiumSDK');
        }

        // Execute the swap
        const { transaction, signers } = await raydiumSDK.swap({
            connection,
            userWallet,
            amountIn: amountToken,
            assetIn: assetId,
        });

        // Send the transaction
        const signature = await connection.sendTransaction(transaction, signers);
        await connection.confirmTransaction(signature);

        return { success: true, signature };
    } catch (error) {
        console.error('Ошибка при покупке токенов:', error);
        return { success: false, error: error.message };
    }
};

exports.sellTokens = async (amountToken, assetId, userWallet) => {
    try {
        // Check if the swap function exists
        if (typeof raydiumSDK.swap !== 'function') {
            throw new Error('swap function is not available in raydiumSDK');
        }

        // Execute the swap
        const { transaction, signers } = await raydiumSDK.swap({
            connection,
            userWallet,
            amountIn: amountToken,
            assetIn: assetId,
        });

        // Send the transaction
        const signature = await connection.sendTransaction(transaction, signers);
        await connection.confirmTransaction(signature);

        return { success: true, signature };
    } catch (error) {
        console.error('Ошибка при продаже токенов:', error);
        return { success: false, error: error.message };
    }
};