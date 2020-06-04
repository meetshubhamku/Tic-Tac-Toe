import React,{useState} from 'react';
import Icon from './components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const arrayItems = new Array(9).fill("empty");


function App() {


  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const updateItem = (index)=>
  {
    
    
    if(arrayItems[index]==="empty")
    {
      
      arrayItems[index] = isCross ? "Cross" : "Circle" ;
      setIsCross(!isCross);
      checkWinner(); 
       
    }
    else
    {
      return toast("Already Filled.", {type:"error"} );
    }

  }

  const checkWinner = () => 
  {
    if(arrayItems[0]===arrayItems[1] && arrayItems[0]===arrayItems[2] && arrayItems[0]!=="empty")
    {
      setWinMessage(arrayItems[0]+" Wins");
    }
    else if(arrayItems[3]===arrayItems[4] && arrayItems[3]===arrayItems[5] && arrayItems[3]!=="empty")
    {
      setWinMessage(arrayItems[3]+" Wins");
    } 
    else if(arrayItems[6]===arrayItems[7] && arrayItems[6]===arrayItems[8] && arrayItems[6]!=="empty")
    {
      setWinMessage(arrayItems[6]+" Wins");
    }
    else if(arrayItems[0]===arrayItems[3] && arrayItems[0]===arrayItems[6] && arrayItems[0]!=="empty")
    {
      setWinMessage(arrayItems[0]+" Wins");
    }
    else if(arrayItems[1]===arrayItems[4] && arrayItems[1]===arrayItems[7] && arrayItems[1]!=="empty")
    {
      setWinMessage(arrayItems[1]+" Wins");
    }
    else if(arrayItems[2]===arrayItems[5] && arrayItems[2]===arrayItems[8] && arrayItems[2]!=="empty")
    {
      setWinMessage(arrayItems[2]+" Wins");
    }
    else if(arrayItems[0]===arrayItems[4] && arrayItems[0]===arrayItems[8] && arrayItems[0]!=="empty")
    {
      setWinMessage(arrayItems[0]+" Wins");
    }
    else if(arrayItems[2]===arrayItems[4] && arrayItems[2]===arrayItems[6] && arrayItems[2]!=="empty")
    {
      setWinMessage(arrayItems[2]+" Wins");
    } 
  }

  const reloadGame = ()=>
  {
    toast("Please Wait", {type:'warning'});
    arrayItems.fill("empty",0,9);
    setIsCross(false);
    setWinMessage("");
  }


  return (
    <>
      <div className="container center-align">
      <h2 className="center">Tic-Tac-Toe</h2>
      <hr />
      <ToastContainer position="bottom-center" />
      {
        winMessage?
        ( <>
            <h3 className="green-text">{winMessage}</h3>
          </>
        )
        :
        (
          <>
            <h4  className="" >{isCross?"Cross":"Circle"}'s turn</h4>
          </>
        )
      }
        <div className="row">
          {
            arrayItems.map((item,index)=>(
              <div className="col l4 m4 s4" onClick={()=>{updateItem(index)}}>
                <Icon type={item} />
              </div>
            ))
          }
        </div>
        <button className="btn green" onClick={reloadGame}>Reload the Game</button>
      </div>
    </>
  );
}

export default App;
