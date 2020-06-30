import axios from 'axios';

const url = 'https://covid19.mathdro.id/api/daily';
const url2 ='https://api.covid19api.com'
           

//const url2 = 'https://covid19.mathdro.id/api/countries';
  //const url1 ='https://covid19.mathdro.id/api/daily'
//const url3='https://covid19.mathdro.id/api/countries/country'
/*export const fetchdata1 = async ()=>{ 
  try
  {
const {data:{confirmed,deaths,recovered,lastUpdate}} = await axios.get(url3)
return {confirmed,deaths,recovered, lastUpdate}
}
catch(error) {
  console.error();
}
 }/*/

 export const fetchdata = async ()=>{
   //let changurl= url;
   //if (country){

    //changurl = '${url}/countries/${country}'};
     try
     {
  const {data}= await axios.get(url2)
   const moddata={
       confirmed:data.TotalConfirmed,
       deaths:    data.TotalDeaths,
        recovered:  data.TotalRecovered,
        latestDate: data.Date,
   }
    
    return moddata
}

catch (error) {

  
}
 }

export const fetchdailydata = async()=>{
  try 
  { const {data}= await axios.get(url);
const modifieddata= data.map((dailydata)=>({
    confirmed: dailydata.confirmed.total,
    deaths:  dailydata.deaths.total,
    recovered: dailydata.recovered.total,
    date: dailydata.reportDate,

}));
//console.log(data)
return modifieddata;
}

catch(error){
  console.error();
  
};

}
/*export const countrydata= async()=>{

  try {
    const {data:{countries}} = await axios.get('${url}/countries')
  
  //  const modCountries=data.map((countdata) =>( {
    //  Country:countdata.Countries}));
      //console.log (modCounties)
      return countries.map((country) =>country.name);
 
  } 
  catch(error){
   /* console.error();
    

  }
  
}