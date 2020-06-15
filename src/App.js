import React from 'react'
import { Chart, Cards, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api';
import covidImage from './images/image.png'
class App extends React.Component {
  state = {
    data: {},
    country : ''
  }
  async componentDidMount () {
    const fetchedData = await fetchData()
    this.setState({data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({data: fetchedData, country: country })
    
    //fetch data 
    //setstate
  }
  render() {
    const { data, country } = this.state 
    return (
      <div className ={styles.container}>
        <img className={styles.image} src={covidImage} alt="Image"/>
        <Cards data={data} />
        <CountryPicker  handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        </div>
    )
  }
}

export default App;
