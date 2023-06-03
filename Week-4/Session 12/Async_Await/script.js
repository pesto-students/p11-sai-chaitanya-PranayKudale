async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch("https://api.exchangerate.host/latest");
    const data = await response.json();

    if (!data.rates.hasOwnProperty(currencyCode)) {
      return null; // Currency code not found in the response
    }

    const exchangeRate = data.rates[currencyCode];
    return Number(exchangeRate.toFixed(4));
  } catch (error) {
    throw new Error("Failed to fetch exchange rates.");
  }
}

getExchangeRate("USD")
  .then((rate) => {
    console.log(rate); // Output
  })
  .catch((error) => {
    console.error(error);
  });
