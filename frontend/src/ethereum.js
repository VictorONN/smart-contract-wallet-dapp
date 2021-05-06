import { ethers, Contract } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import Wallet from './contracts/Wallet.json';
import addresses from './addresses.js';

// const getBlockchain = () =>
//   new Promise(async (resolve, reject) => {
//     window.addEventListener('load', async () => {
//       if(window.ethereum) {
//         await window.ethereum.enable();
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();

//         const wallet = new Contract(
//           Wallet.networks[window.ethereum.networkVersion].address,
//           Wallet.abi,
//           signer
//         );

//         const dai = new Contract(
//           addresses.dai,
//           ['function approve(address spender, uint amount) external'],
//           signer
//         );

//         resolve({signer, wallet, dai});
//       }
//       resolve({signer: undefined, wallet: undefined, dai: undefined});
//     });
//   });

// const CONTRACT_ADDRESS = Wallet.networks[].address;

  const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      const wallet = new Contract(
        Wallet.networks[5777].address,
        // 0xda96CaF05d3241927a3b0e3DaFD82318E3d742Df,
        Wallet.abi,
        signer
      );

      const dai = new Contract(
        addresses.dai,
        ['function approve(address spender, uint amount) external'],
        signer      
      );
      resolve({signer, wallet, dai});
      return;
    }
    reject('Install Metamask');
  });

export default getBlockchain;

