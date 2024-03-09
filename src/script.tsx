import axios from "axios";

const keyAPI='116510ca0f709e1c2b0bcf230bcab1b0';
const baseURL="https://api.openweathermap.org/data/2.5/weather?"


export const fetchCity = async (cityName: string) => {
    try {
        // Remova o '?' duplicado na sua string de URL base, já que você adiciona outro '?' na construção da URL
        const url = `${baseURL}q=${cityName}&appid=${keyAPI}&units=metric`;
        const response = await axios.get(url);

        // Ajuste aqui: remova '.data[0]' para acessar corretamente os dados da resposta
        const data = response.data; // Agora 'data' contém diretamente os dados da resposta

        if (data) {
            return {
                city: data.name,
                temperature: data.main.temp,
                weatherCondition: data.weather[0].main,
                weatherDescription: data.weather[0].description,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed, // Corrija o erro de digitação de 'winfSpeed' para 'windSpeed'
            };
        }
        
    } catch (error) {
        console.log("Erro ao buscar a cidade:"); // Melhorar a mensagem de erro com detalhes específicos
        throw error;
    }
};