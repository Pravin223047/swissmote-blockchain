# ConnectWallet Component

## Overview

The `ConnectWallet` component is a React application for connecting and managing different blockchain wallets. It supports Ethereum, Polygon, Solana, and Bitcoin networks, and allows users to switch between real and dummy accounts. The component also includes a simple coin flip game where users can wager and see the results based on real or dummy balances.

## Features

- **Blockchain Selection**: Users can select between Ethereum, Polygon, Solana, and Bitcoin.
- **Connect Real Account**: Connects to a real wallet for the selected blockchain.
- **Connect Dummy Account**: Switches to a dummy account with a preset balance.
- **Balance Display**: Shows the balance of the connected account (real or dummy).
- **Wager Input**: Allows users to enter a wager amount for the coin flip game.
- **Coin Flip Game**: Users can flip a coin and win or lose based on their wager and the result.
- **Responsive UI**: Designed to be professional and visually appealing with Tailwind CSS.

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/your-repository.git
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd your-repository
    ```

3. **Install Dependencies**:

    ```bash
    npm install
    ```

4. **Run the Development Server**:

    ```bash
    npm run dev
    ```

5. **Open the Application**:

    Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. **Select Blockchain**:
   - Choose the blockchain you want to connect to from the dropdown menu.

2. **Connect to Wallet**:
   - Click "Connect RealAccount" to connect your real wallet or "Connect DummyAccount" to connect a dummy account.

3. **View Balance**:
   - The balance of the connected account will be displayed.

4. **Enter Wager**:
   - Input the amount you want to wager for the coin flip game.

5. **Flip Coin**:
   - Choose "Heads" or "Tails" and click "Flip Coin" to play the game. The result will show whether you won or lost the flip.

## Configuration

- **Ethereum and Polygon**: Uses MetaMask for connecting wallets.
- **Solana**: Requires a Solana wallet extension.
- **Bitcoin**: Currently a placeholder implementation; replace with actual connection logic if needed.

## Code Structure

- **`ConnectWallet.tsx`**: Main component file containing logic for connecting wallets, displaying balances, and handling the coin flip game.
- **`web3`**: Used for interacting with Ethereum and Polygon networks.
- **`solana`**: Used for interacting with Solana network.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements. Follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes.
- Push to your forked repository.
- Open a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the components.
- **Web3.js**: For interacting with Ethereum and Polygon.
- **Solana Web3.js**: For interacting with the Solana blockchain.
