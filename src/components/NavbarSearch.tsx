import React,{useState} from 'react';
import { fetchCity } from '../script';
import { fetchPhotoCity } from '../scriptPhotoCity';
import '@fortawesome/fontawesome-free/css/all.min.css';


interface weatherData{
    city:string,
    temperature:string
    weatherCondition:string,
    weatherDescription:string,
    humidity:string,
    windSpeed:string,
    countryCode:string,
    iconConditionCode:string,
}


function NavbarSearch(){

    const[city,setCity]=useState('');
    const[weatherData,setWeatherData]=useState <weatherData| null>(null);
    const handleSearch= async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const data= await fetchCity(city);
        const imageURL=await fetchPhotoCity(city);

        try{
            if(data){
            const dataSearch={
                city:data.city,
                temperature:data.temperature,
                weatherCondition:data.weatherCondition,
                weatherDescription:data.weatherDescription,
                humidity:data.humidity,
                windSpeed:data.windSpeed,
                countryCode:data.countryCode,
                iconConditionCode:data.iconConditionCode,
            }

            setWeatherData(dataSearch);
            }

            if(imageURL){
                const backgroundContainer= document.getElementById('background-container');
                if(backgroundContainer){
                    backgroundContainer.style.backgroundImage = `url(${imageURL})`;
                    backgroundContainer.style.backgroundSize = 'cover'; // Certifique-se de cobrir a área toda
                    backgroundContainer.style.backgroundPosition = 'center'; // Centralize a imagem
                }
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
                        <div style={{display:'flex', justifyContent:'space-around'}}>
                        <i className="fa-solid fa-location-dot"></i>
                        <span id="city" style={{marginLeft:'0.5em',marginRight:'1em'}}>{weatherData && weatherData.city}</span>
                        <img src={`https://flagcdn.com/${weatherData && weatherData.countryCode.toLowerCase()}.svg`} alt="" id='country' style={{ width: '32px', height: 'auto' }} />
                        {weatherData &&  weatherData.city &&//se não forem vazias
                        (<button onClick={() => {
                            const encodedCity = encodeURIComponent(city);
                            window.open(`https://www.google.com/maps/search/?api=1&query=${encodedCity}`, '_blank');
                          }}
                        style={{minWidth:'60px',marginLeft:'2em',backgroundColor:'#8dd0f5',borderRadius:'0.5em', }}>
                            <img src="/2642502.webp" alt="Google Maps" style={{width: '24px', height: '24px'}} />
                             </button>)}
                        

                        </div>
                        
                        <p id="temperature"><span> {weatherData && weatherData.temperature}</span>&deg;C </p>
                        <div id="description-container">
                            <p>{weatherData && weatherData.weatherDescription}</p>
                            {weatherData && weatherData.iconConditionCode && (
                            <img src={`http://openweathermap.org/img/wn/${weatherData.iconConditionCode}.png`} alt={weatherData.weatherDescription}
                             id="weather-icon" />
    )}
                        </div>

                        <div id="details-container" style={{
                            display: 'flex', justifyContent: "center", alignItems: "center",gap: '20px' // Espaço entre os contêineres 
                        }}>
                        <div style={{borderRight: '1px solid #FFF',paddingRight: '10px'}}>
                            <p id="humidity">
                                <i className="fa-solid fa-droplet"></i>
                                <span>{weatherData && `${weatherData.humidity}%`}</span>
                            </p>
                        </div>
    <div> {/* Contêiner para o segundo <p> */}
        <p id="wind">
            <i className="fa-solid fa-wind"></i>
            <span>{weatherData && `${weatherData.windSpeed} km/h`}</span>
        </p>
    </div>
</div>
                    </h2>
                </div>
            </div>
        </nav>
        
        )
}

export default NavbarSearch;
    