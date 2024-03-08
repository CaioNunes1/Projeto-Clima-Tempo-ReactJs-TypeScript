function NavbarSearch(){
    return(
        <nav style={{fontFamily:'Ubuntu,sans-serif'}}>
        <div style={{display:'flex',justifyContent:'center',}}>
            <h2>Confira o clima de uma cidade</h2>
        </div>
            <form action="" style={{display:'grid',gridTemplateColumns:'9fr 3fr', gap:'1em'}}>
                <input type="text" placeholder="Digite o nome de uma cidade" style={{color:'#black',padding:'1em 0.5em',backgroundColor:'#D3D3D3',
          border:'none',borderRadius:'0.5em',outline:'none'}} />
                <button id='search' style={{backgroundColor:'#D3D3D3',borderRadius:'0.5em'}}>
                    <i className="fa-solid fa-magnifying-glass" ></i>
                </button>
            </form>

            <div>
                <h2>
                    <i className="fa-solid fa-location-dot"></i>
                    <span id="city" style={{marginLeft:'0.5em'}}>Recife</span>
                    <img src="" alt="Bandeira do país" id='country' />
                    <p id="temperature"><span> 31</span>&deg;C </p>
                    <div id="description-container">
                        <p>Nublado</p>
                        <img src="" alt="Condições do tempo" id="weather-icon" />
                    </div>
                    <div id="details-container">
                        <p id="humidity">
                            <i className="fa-solid fa-droplet"></i>
                            <span>50%</span>
                        </p>
                        <p id="wind">
                            <i className="fa-solid fa-wind"></i>
                            <span>10km/h</span>
                        </p>
                    </div>
                </h2>
            </div>
        </nav>
        
        )
}

export default NavbarSearch;
    