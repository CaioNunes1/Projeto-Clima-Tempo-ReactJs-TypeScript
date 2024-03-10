import axios from "axios";
 
const accessKey='3VZH7bO_GbdRV5UJVzP2BIqYihbiHh7cPDg6acpCZuE';

export const fetchPhotoCity= async(cityName:string)=>{
    try{
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
              query: cityName,
              client_id: accessKey,
              orientation: 'landscape',
              per_page: 1,
            },
          });

          const imageURL=response.data.results[0].urls?.regular;
          return imageURL;
    }
    catch(error){
        console.log("erro ao procurar foto da cidade");
        return null;
    }
}