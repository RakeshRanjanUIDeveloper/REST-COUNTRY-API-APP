const apiUrl = 'https://restcountries.com/v3.1/all/name';
const searchBtn = document.querySelector('.search-btn');
window.onload = async function(){
    let firstdata = await fetch('https://restcountries.com/v3.1/name/india?fullText=true')
    .then(firstdata => firstdata.json())
    .then(data =>{
        console.log(data);
        let output ='';
        output += `<img class='flag-img' src=${Object.values(data[0].flags)[0]}>`;
        output += `<table>`
        output += `<tr><th>Country Name</th><th>Capital</th><th>Region</th><th>Timezones</th><th>Languages</th><th>Currency</th></tr>`
        output += `<tr>`
        output += `<td>${Object.values(data[0].name)[0]}</td>`
        output += `<td>${data[0].capital}</td>`
        output += `<td>${data[0].region}</td>`
        output += `<td>${data[0].timezones}</td>`
        output += `<td>${(Object.values(data[0].languages).toString())}</td>`
        output += `<td>${(Object.keys(data[0].currencies))}</td>`
        output += `</tr>`
        output += `</table>`
        document.getElementById('result').innerHTML= output;
    })
    .catch(error =>{
        console.log(error);
    })
}

searchBtn.addEventListener('click', getCountryData);
async function getCountryData(){
    let countryName = document.getElementById('myInput').value;
    let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        if(document.getElementById('myInput').value = ''){
            document.getElementById('result').innerHTML= '';
        }
        let output ='';
        output += `<img class='flag-img' src=${Object.values(data[0].flags)[0]}>`;
        output += `<table>`
        output += `<tr><th>Country Name</th><th>Capital</th><th>Region</th><th>Timezones</th><th>Languages</th><th>Currency</th></tr>`
        output += `<tr>`
        output += `<td>${Object.values(data[0].name)[0]}</td>`
        output += `<td>${data[0].capital}</td>`
        output += `<td>${data[0].region}</td>`
        output += `<td>${data[0].timezones}</td>`
        output += `<td>${(Object.values(data[0].languages).toString())}</td>`
        output += `<td>${(Object.values(data[0].currencies))}</td>`
        output += `</tr>`
        output += `</table>`
        document.getElementById('result').innerHTML= output;
    })
    .catch(error =>{
        console.log(error);
    })
}