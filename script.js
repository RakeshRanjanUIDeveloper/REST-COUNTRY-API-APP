const apiUrl = 'https://restcountries.com/v3.1/all/name';
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', getCountryData);
async function getCountryData(){
    let countryName = document.getElementById('myInput').value;
    let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        let output ='';
        output += `<li>${data[0].capital}</li>`;
        document.getElementById('result').innerHTML= output;
    })
    .catch(error =>{
        console.log(error);
    })
}