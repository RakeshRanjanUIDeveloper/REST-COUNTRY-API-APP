const apiUrl = 'https://restcountries.com/v3.1/all';
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', getCountryData);
async function getCountryData(){
    let response = await fetch(apiUrl)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        let output ='';
        data.forEach(element => {
            output += `<li>${element.name.official}</li>`
        });
        document.getElementById('result').innerHTML= output;
    })
    .catch(error =>{
        console.log(error);
    })
}