export const callFetch = (path, queryParams) => {
  const apiKey = `${process.env.REACT_APP_API_KEY}`;
  let domain = new URL("https://dataservice.accuweather.com/");
  let params = new URLSearchParams(domain.search);
  params.append("apikey", apiKey);
  if (queryParams) {
    let keys = Object.keys(queryParams);
    keys.forEach((key) => {
      params.append(key, queryParams[key]);
    });
  }
  return fetch(`${domain}${path}?${params}`).then((res) =>
    Promise[res.ok ? "resolve" : "reject"](res.json())
  );
};
