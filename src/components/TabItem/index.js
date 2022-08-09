// Write your code here
import './index.css'

const TabItem = props => {
  console.log(props)
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const classTabName = isActive ? 'active' : ''

  const onClickTabButton = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTabButton}
        className={`tab-button ${classTabName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
