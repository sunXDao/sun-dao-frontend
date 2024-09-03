'use server'

export const getCoinData = async () => {
  try {
    const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.API_KEY || "" as string,
      },
    });
    const data = await res.json();
    return data
  } catch (err) {
    console.error(err);
  }
}