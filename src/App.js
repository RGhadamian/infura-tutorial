import React from 'react';
import './App.css';
import { useWeb3 } from '@openzeppelin/network/react';
const infuraProjectId = '7ce03792cece4bea8cf80968050a3f57';
function App() {
const web3Context = useWeb3(`wss://rinkeby.infura.io/ws/v3/${infuraProjectId}`);
const { networkId, networkName, providerName } = web3Context;
return (
<div className="App">
	<div>
	<h1>Infura/MetaMask/OpenZeppelin Dapp</h1>
		<div>
    	Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}
		</div>
		<div>
		Provider: {providerName}
		</div>
	</div>
</div>
);
}
export default App;