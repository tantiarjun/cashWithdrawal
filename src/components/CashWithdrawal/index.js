import {Component} from 'react'

import Denomination from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {totalBalance: 2000}

  amount = value => {
    this.setState(prevState => ({totalBalance: prevState.totalBalance - value}))
  }

  render() {
    const {denominationsList} = this.props

    const {totalBalance} = this.state

    return (
      <div className="bgContainer">
        <div className="card">
          <div className="nameAndLogoContainer">
            <h1 className="nameFirstLetter">A</h1>
            <h1 className="fullName">Arjun Tanti</h1>
          </div>
          <div className="balanceContainer">
            <p className="yourBalance">Your Balance</p>
            <div className="amountContainer">
              <p className="amount">{totalBalance}</p>
              <p className="inRupees">In Rupees</p>
            </div>
          </div>
          <p className="withDraw">Withdraw</p>
          <p className="chooseLine">CHOOSE SUM (IN RUPEES)</p>
          <div className="denominationContainer">
            <ul className="denominationList">
              {denominationsList.map(eachItem => (
                <Denomination
                  denominationDetails={eachItem}
                  key={eachItem.id}
                  amount={this.amount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
