import React from 'react'
import {Cards, Charts, CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchdata} from './Api'


 class App extends React.Component{
  state = {
    data:{},
  //  country:'',
  }
  async componentDidMount(){
     const fetcheddata= await fetchdata();
     console.log(fetcheddata);
     this.setState({data:fetcheddata});
     }

handlecountrychange= async (country) => {
  const fetcheddata = await fetchdata(country);
  console.log (fetcheddata)

}
render() {
  //const {data} = this.state,
  return (
    <div className={styles.container}>
       <Cards data={this.state.data}/>
       < CountryPicker handlecountrychange={this.handlecountrychange}/>
        < Charts/> 
        

    </div>
  );
}}

export default App;
