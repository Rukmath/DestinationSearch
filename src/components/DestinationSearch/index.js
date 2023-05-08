import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchItem = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            className="search-element"
            type="search"
            placeholder="Search"
            onChange={this.searchItem}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>
        <ul className="places-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              destinationItem={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
