import { useContext } from 'react'
import { NumberContext } from './App'
import './css/table.css'

const Table = () => {
    const { lotteryReward, setLotteryReward} = useContext(NumberContext)
  return (
    <>
        <div className="table-responsive-md table-flex">
            <table className="table table-bordered">
                <tbody>
                    <tr className="align-middle text-center">
                        <th className="table-dark" colSpan="2" >
                        รางวัลที่ 1
                        </th>
                        <td colSpan="2" >
                        {lotteryReward.Reward1}
                        </td>
                    </tr>
                    <tr className="align-middle text-center">
                        <th className="table-dark" colSpan="2" id="titleName">
                        รางวัลเลขใกล้เคียงรางวัลที่ 1
                        </th>
                        <td>
                            {lotteryReward.closeReward2}
                        </td>
                        <td >
                            {lotteryReward.closeReward1}
                        </td>
                    </tr>
                    <tr className="align-middle text-center">
                        <th className="table-dark" >
                            รางวัลที่ 2
                        </th>
                        <td >
                            {lotteryReward.Reward2No1}
                        </td>
                        <td >
                            {lotteryReward.Reward2No2}
                        </td>
                        <td >
                            {lotteryReward.Reward2No3}
                        </td>
                    </tr>
                    <tr className="align-middle text-center">
                        <th className="table-dark" colSpan="2">
                        รางวัลเลขท้าย 2 ตัว
                        </th>
                        <td colSpan="2">
                            {lotteryReward.Reward2digits}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>

  )
}

export default Table