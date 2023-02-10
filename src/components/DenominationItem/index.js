import './index.css'

const Denomination = props => {
  const {denominationDetails, amount} = props

  const {value} = denominationDetails

  const noteAmount = () => {
    amount(value)
  }

  return (
    <li>
      <button type="button" onClick={noteAmount} className="eachItem">
        {value}
      </button>
    </li>
  )
}

export default Denomination
