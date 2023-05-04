import { createContext, useState } from "react"
import Table from "./Table"
import Form from "./Form"
import './App.css'

const NumberContext = createContext()

function App() {
  var [lotteryReward , setLotteryReward] = useState({
    Reward1: '',
    closeReward1: '',
    closeReward2: '',
    Reward2No1: '',
    Reward2No2: '',
    Reward2No3: '',
    Reward2digits: '',
  })
  function generate2digits() {
    let randomNumber = Math.random() * 100;
    if (randomNumber < 10) {
      return randomNumber = "0" + randomNumber.toFixed(0);
    } else {
      return randomNumber = randomNumber.toFixed(0);
    }
  }
  var newRandomNumber=()=> {
    var Number1 = Math.floor(100 + Math.random() * 900) //6
    var Number2 = Number1+1 //6
    var Number3 = Number1-1 //6
    var Number4 = Math.floor(100 + Math.random() * 900) //6
    var Number5 = Math.floor(100 + Math.random() * 900) //6
    var Number6 = Math.floor(100 + Math.random() * 900) //6
    var Number7 = generate2digits()
    setLotteryReward({
      Reward1:Number1,
      closeReward1:Number2,
      closeReward2:Number3,
      Reward2No1: Number4,
      Reward2No2: Number5,
      Reward2No3: Number6,
      Reward2digits: Number7
    })
  }
  return (
    <NumberContext.Provider value={{lotteryReward, setLotteryReward}}>
      <div className="body">
        <div className="header-bar">
            <p style={{margin: 0}} className="header-bg">รางวัลล็อตเตอรี่ Diversition</p>
        </div>
        <div className="main-bg">
          <div className="container-lg" style={{marginBottom: '10px'}}>
            <p className="text-title">ผลการออกรางวัลล็อตเตอรี่ Diversition</p>
            <button className="btn btn-success" onClick={newRandomNumber} style={{fontSize: 16}}>ดำเนินการสุ่มรางวัล</button>
          </div>
          <div className="container-lg">
            <Table></Table>
            <Form></Form>
          </div>
        </div>
      </div>
    </NumberContext.Provider>
  )
}

export { NumberContext }
export default App
