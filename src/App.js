import React from 'react';
import {Cards,Charts,CountryPicker}  from './components'
import styles from './App.module.css'
import {fetchCountryData, fetchData} from './api'
import coronaimage from './images/covid-19.PNG'

class App extends React.Component {
    state = {
        data:{},
        country:''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchCountryData(country);
        this.setState({data:fetchedData, country: country});
    }
    render(){
        const { data , country} = this.state;
        return (
            <div className = {styles.container}>
                <img src={coronaimage} alt="LOGO"></img>       
                <Cards data = {data}/>
                <CountryPicker handleCountryChange= {this.handleCountryChange}/>
                <Charts data = {data} country={country} />
                <div className={styles.footer}>
                <footer> Made with <span>♥</span> by codeFlayer <a href = "https://github.com/sohamsshah/"> ( Soham )</a>💻</footer>
                </div>
                
            </div>
        );
    }
}

export default App;