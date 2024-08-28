'use server'

export const getCoinData = async () => {
  try {
    const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '3d010422-112a-4949-80f6-ceaa7661eaf4',
      },
    });
    const data = await res.json();
    return data
    // setPrice(response.data.data.BTC.quote.USD.price);
  } catch (err) {
    console.error(err);
  }
}