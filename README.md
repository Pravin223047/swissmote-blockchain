# My Crypto Wallet

My Crypto Wallet is a simple web application that allows users to connect their MetaMask wallet and view their Ethereum account balance. This project uses React and Web3.js for interacting with the Ethereum blockchain.

## Features

- Connects to MetaMask wallet.
- Displays Ethereum account address and balance.
- Responsive design for mobile and desktop devices.
- Provides feedback with toast messages.

## Getting Started

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (>=14.x)
- [MetaMask](https://metamask.io/) browser extension

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/my-crypto-wallet.git
   cd my-crypto-wallet
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   This will start the development server at `http://localhost:3000`.

### Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Ensure that you have the MetaMask extension installed and set up.
3. Click the "Connect Wallet" button.
4. MetaMask will prompt you to connect your account. Accept the request.
5. Once connected, your Ethereum account address and balance will be displayed on the page.

### Code Structure

- **`components/ConnectWallet/ConnectWallet.tsx`**: Contains the main logic for connecting to MetaMask and displaying account information.
- **`pages/_app.tsx`**: The main entry point for the Next.js application, rendering the `App` component.
- **`public/cryptoconnect.png`**: Logo image used in the application.
- **`styles/globals.css`**: Global CSS file for styling.

### Contributing

Feel free to open issues or submit pull requests if you find any bugs or have suggestions for improvements. Please ensure that your code adheres to the project's coding standards and includes appropriate tests.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Web3.js](https://web3js.readthedocs.io/en/v1.7.1/) - Ethereum JavaScript API
- [MetaMask](https://metamask.io/) - Cryptocurrency wallet and gateway to blockchain apps
