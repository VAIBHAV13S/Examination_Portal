import React, { useState, useEffect } from 'react';
import getWeb3 from './getWeb3';
import ExamPlatform from './contracts/ExamPlatform.json';

function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = ExamPlatform.networks[networkId];
        if (deployedNetwork) {
          const instance = new web3.eth.Contract(
            ExamPlatform.abi,
            deployedNetwork && deployedNetwork.address,
          );
          setWeb3(web3);
          setContract(instance);
        } else {
          alert("Smart contract not deployed to the current network.");
        }
      } catch (error) {
        console.error("Error initializing web3 or contract:", error);
        alert("Failed to load web3, accounts, or contract. Check console for details.");
      }
    };

    init();
  }, []);

  const handleRegister = async () => {
    if (contract) {
      try {
        await contract.methods.registerUser(userName, userRole).send({ from: web3.currentProvider.selectedAddress });
        alert("User registered successfully!");
      } catch (error) {
        console.error("Error registering user:", error);
        alert("Failed to register user. Check console for details.");
      }
    } else {
      alert("Contract not loaded yet. Please wait a moment.");
    }
  };

  return (
    <div className="App">
      <h1>Exam Platform</h1>
      <input type="text" placeholder="Enter Name" onChange={(e) => setUserName(e.target.value)} />
      <input type="text" placeholder="Enter Role" onChange={(e) => setUserRole(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default App;
