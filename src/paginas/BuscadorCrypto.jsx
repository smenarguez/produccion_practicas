import React, {useState, useEffect} from "react";
import VistaCrypto from "../componentes/VistaCrypto";
import axios from 'axios';

const BuscadorCrypto = () => {
    // 1 - Setear el Hook
    const [cryptos, setCryptos] = useState([{}]);

    // 2 - Función para traer los datos
    const endPoint = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc';

    const showData = async () => {

        try{
            await axios.get(endPoint).then((res) => {
                setCryptos(res.data);
           })
        }catch(error){
            console.log(error);
        }
           
    }

    useEffect(() => {
        showData();
    }, []);

    return ( 
        <VistaCrypto cryptos={cryptos} />
     );
}
 
export default BuscadorCrypto;