import { useContext, useState } from 'react'
import { NumberContext } from './App'
import './css/form.css'
const Form = () => {
  var [lotValue, setLotValue] = useState(null);
  var [inputValue, setInputValue] = useState(false)
  var [lotterLogic, setLotterLogic] = useState(null);
  var [RewardString, setRewardString] = useState(null);
  var { lotteryReward, setLotteryReward} = useContext(NumberContext)
  var inputCheck = (e) => {
    if(e.target.value){
      setInputValue(true)
      setLotValue(e.target.value)
    } else {
      setInputValue(false)
    }
  }
  var {
    Reward1,
    closeReward1,
    closeReward2,
    Reward2No1,
    Reward2No2,
    Reward2No3,
    Reward2digits
  } = lotteryReward
  const checkReward = () => {
    setLotterLogic(false)
    setRewardString(null)
    if(lotValue == Reward1) {
      var numberReward1 = JSON.stringify(Reward1).slice(1,3)
      if(numberReward1 == Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลที่ 1 และถูกรางวัลเลขท้าย 2 ตัว');
      } else if (numberReward1 != Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลที่ 1');
      }
    } else if (lotValue == closeReward1 || lotValue == closeReward2) {
      var numbercloseReward1 = JSON.stringify(closeReward1).slice(1,3)
      var numbercloseReward2 = JSON.stringify(closeReward2).slice(1,3)
      if(numbercloseReward1 == Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลใกล้เคียงรางวัลที่ 1 และถูกรางวัลเลขท้าย 2 ตัว');
      } else if (numbercloseReward1 != Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลใกล้เคียงรางวัลที่ 1');
      } else if(numbercloseReward2 == Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลใกล้เคียงรางวัลที่ 1 และถูกรางวัลเลขท้าย 2 ตัว');
      } else if (numbercloseReward2 != Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลใกล้เคียงรางวัลที่ 1');
      }
    } else if (lotValue == Reward2No1) {
      var numberReward2No1 = JSON.stringify(Reward2No1).slice(1,3)
      if(numberReward2No1 == Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลที่ 2 และถูกรางวัลเลขท้าย 2 ตัว');
      } else if (numberReward2No1 != Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลที่ 2');
      }
    } else if (lotValue == Reward2No2) {
      var numberReward2No2 = JSON.stringify(Reward2No2).slice(1,3)
      if(numberReward2No2 == Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลที่ 2 และถูกรางวัลเลขท้าย 2 ตัว');
      } else if (numberReward2No2 != Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลที่ 2');
      }
    } else if (lotValue == Reward2No3) {
      var numberReward2No3 = JSON.stringify(Reward2No3).slice(1,3)
      if(numberReward2No3 == Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลที่ 2 และถูกรางวัลเลขท้าย 2 ตัว');
      } else if (numberReward2No3 != Reward2digits) {
        setLotterLogic(true)
        setRewardString('ท่านถูกรางวัลที่ 2');
      }
    } else if (lotValue == Reward2digits ) {
      setLotterLogic(true)
      setRewardString('ท่านถูกรางวัลเลขท้าย 2 ตัว');
    } else {
      setLotterLogic(true)
      setRewardString('ไม่ถูกรางวัลใดเลย');
    }
  }
  return (
    <div id='form'>
      <div className="header-form-text">
        <p className="header-form-bg">รางวัลล็อตเตอรี่ Diversition</p>
      </div>
      <form className="row g-3">
        <div className="col-auto">
          <label>เลขล็อตเตอรี่ : </label>
        </div>
        <div className="col-auto" style={{marginBottom: '5px'}}>
          <input className='inputClass form-control-lg'
            onChange={(e) => inputCheck(e)}
          type="number" min="0" max="999" required/>
        </div>
      </form>
      {
        lotterLogic ? 
        <div className='rewardBord' style={{marginBottom: '5px'}}>
          <div className="row justify-content-start">
            <div className="col col-md-6" style={{paddingTop: '15px'}}>
              {lotValue} {RewardString}
            </div>
          </div>
        </div>
        : <></>
      }
      {
        inputValue ? 
        <button  onClick={() => checkReward()}  className='btn btn-outline-info'>ตรวจรางวัล</button>
        : <></>
      }
      <div style={{marginBottom: '5px'}}></div>
    </div>
  )
}

export default Form