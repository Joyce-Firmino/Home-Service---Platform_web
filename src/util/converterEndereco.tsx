  const getAddressFromLatLon = async (latitude: number, longitude: number) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'YourAppName', // Nominatim recomenda incluir isso
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar o endereço: ${response.statusText}`);
        }

        const data = await response.json();

        const locCompleta = `${data.address.city_district} - ${data.address.state}`
        return locCompleta; // Retorna o endereço completo
    } catch (error) {
        console.error('Erro:', error);
        return 'Endereço indisponível';
    }
};


export async function fetchAddress (latitude: number, longitude: number)   {
  const address = await getAddressFromLatLon(latitude, longitude);
  console.log(address);
  
  return address as string;
  
};

