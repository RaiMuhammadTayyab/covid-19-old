import React,{useState,useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import styles  from './CountryPicker.module.css'
import {countrydata} from '../../Api'
const CountryPicker =({handlecountrychange}) => 
{
  /* const [countdata,setcountdata]=useState([]);
   useEffect ( ()=>{
       const fetchapi=async()=>{
           setcountdata(await countrydata());
       }

       fetchapi()
},[setcountdata]);
   return(
   <div>
       <FormControl className={styles.formcontrol} >
           <NativeSelect defaultValue=" " onChange={(e)=> handlecountrychange(e.target.Value)}>
               <option value="global"> Global</option>
               {countdata.map((country,i)=><option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
   /* </div>);
}

export default CountryPicker;