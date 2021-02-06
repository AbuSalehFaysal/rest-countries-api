fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = (data) => {
    const countriesDiv = document.getElementById("countryList");
    data.forEach(countries => {
        const countryDiv = document.createElement("div");

        countryDiv.className = "country"

        const countryInfo = `
                <h3>${countries.name}</h3>
                <h5>${countries.capital}</h5>
                <button class="btn btn-primary" onclick="countryDetail('${countries.name}')">Show Detail</button>
            `

        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const countryDetail = (cname) => {
    const url = `https://restcountries.eu/rest/v2/name/${cname}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => countryInformation(data[0]));
}

const countryInformation = country => {
    console.log(country);
    const countryFullDetail = document.getElementById("countryDetail");
    countryFullDetail.innerHTML = `
        <h1>Name: ${country.name}</h1>
        <h2>Population: ${country.population}</h2>
        <img src="${country.flag}">
    `
}