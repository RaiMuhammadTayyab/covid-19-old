import React,{useState, useEffect} from "react"
import { Bar, Line } from 'react-chartjs-2';
import {fetchdailydata} from '../../Api'
import styles from './Charts.module.css'

const Charts= ()=>{
    const [dailydata, setdailydata]=useState([]);
    useEffect ( () => {
        const fetchApi = async() => {

          setdailydata( await fetchdailydata());
        }
       console.log(fetchdailydata)
        fetchApi();
    
    });

        const linechart = (
        dailydata.length

        ?   <Line data = {{
                labels:dailydata.map(({date})=>date),
                datasets: [{
                    data: dailydata.map(({confirmed})=>confirmed),
                    label: 'infected',
                    bordercolor: '#3333ff',
                    fill: true

                },{data: dailydata.map(({deaths})=>deaths),
                label: 'Deaths',
                bordercolor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true
},{data: dailydata.map(({recovered})=>recovered),
label: 'Recovered',
bordercolor: 'green',
backgroundColor: 'rgba( 0,255,0,0.5)',
fill: true


}],
}}
/>
: null
)


   return(
   <div className={styles.container}>

      {linechart} 
       
    </div>
    );
   }

export default Charts