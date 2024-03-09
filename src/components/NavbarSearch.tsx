import React,{useState} from 'react';
import { fetchCity } from '../script';

interface weatherData{
    city:string,
    temperature:string
    weatherCondition:string,
    weatherDescription:string,
    humidity:string,
    windSpeed:string,
}


function NavbarSearch(){

    const[city,setCity]=useState('');
    const[weatherData,setWeatherData]=useState <weatherData| null>(null);
    const handleSearch= async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const data= await fetchCity(city);

        try{
            if(data){
            const dataSearch={
                city:data.city,
                temperature:data.temperature,
                weatherCondition:data.weatherCondition,
                weatherDescription:data.weatherDescription,
                humidity:data.humidity,
                windSpeed:data.windSpeed
            }

            setWeatherData(dataSearch);
            }
            
            
        }catch(error){
            console.log("Falha ao buscar os dados metereológicos");
        }
    }

    return(
        <nav style={{fontFamily:'Ubuntu,sans-serif',color:'#fdfdfd'}}>
        <div style={{display:'flex',justifyContent:'center',}}>
            <h2>Confira o clima de uma cidade</h2>
        </div>
    
            <form action="" style={{display:'grid',gridTemplateColumns:'9fr 3fr', gap:'1em',paddingBottom:'1.5em'}} 
            onSubmit={handleSearch}>

                <input type="text" value={city} onChange={(e)=> setCity(e.target.value)} placeholder="Digite o nome de uma cidade" style={{color:'#black',padding:'1em 0.5em',backgroundColor:'#D3D3D3',
          border:'none',borderRadius:'0.5em',outline:'none'}} />

                <button id='search' type='submit' style={{backgroundColor:'#8dd0f5',borderRadius:'0.5em',minWidth:'50px'}}>
                    <i className="fa-solid fa-magnifying-glass" ></i>
                </button>
            </form>

            <div style={{display:'flex', justifyContent:'center', borderTop:'1px solid #fff',paddingTop:'1.5em'}}>

                <div>
                    <h2>
                        <div style={{display:'flex', justifyContent:''}}>
                        <i className="fa-solid fa-location-dot"></i>
                        <span id="city" style={{marginLeft:'0.5em',marginRight:'1em'}}>{weatherData && weatherData.city}</span>
                        <img src="https://flagsapi.com/BR/flat/32.png" alt="Bandeira do país" id='country' />
                        </div>
                        
                        <p id="temperature"><span> {weatherData && weatherData.temperature}</span>&deg;C </p>
                        <div id="description-container">
                            <p>{weatherData && weatherData.weatherCondition}</p>
                            <img src="" alt="Condições do tempo" id="weather-icon" />
                        </div>

                        <div id="details-container">
                            <p id="humidity">
                                <i className="fa-solid fa-droplet"></i>
                                <span>{weatherData && weatherData.humidity}</span>
                            </p>
                            <p id="wind">
                                <i className="fa-solid fa-wind"></i>
                                <span>{weatherData && weatherData.windSpeed}</span>
                            </p>
                        </div>
                    </h2>
                </div>
            </div>
        </nav>
        
        )
}

export default NavbarSearch;
    