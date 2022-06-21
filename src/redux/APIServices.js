const API = 'https://financialmodelingprep.com/api/v3/';

const APIQUOTES = 'https://financialmodelingprep.com/api/v3/quote/';

const KEY = '05a8b402aaa37e33f0952ec91077c9a1';

const getCompanyData = async (symbol) => {
  const companyAPI = `${API}${symbol}_constituent?apikey=${KEY}`;

  const response = await fetch(companyAPI, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const companySymbolData = await response.json();
  return companySymbolData;
};

const getCompanyQuotes = async (exchangeName, symbol) => {
  const companyQuotesAPI = `${APIQUOTES}${symbol}?apikey=${KEY}`;
  const response = await fetch(companyQuotesAPI, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const companySymbolData = await response.json();
  const exchange = exchangeName.toUpperCase();
  const companyDataWithExchange = companySymbolData.map((item) => ({ ...item, exchange }));
  return companyDataWithExchange;
};

export default { getCompanyData, getCompanyQuotes };
