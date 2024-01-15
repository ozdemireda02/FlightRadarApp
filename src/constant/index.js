export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.54769',
    bl_lng: '25.595906',
    tr_lat: '43.240654',
    tr_lng: '44.541519',
    limit: '300'
  },
  headers: {
    'X-RapidAPI-Key': 'c703c7899cmshc08b786e1d4a078p187dc4jsn96cce40263c4',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};

 export const options2 = {
    headers: {
      'X-RapidAPI-Key': 'c703c7899cmshc08b786e1d4a078p187dc4jsn96cce40263c4',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com' 
    }
  };