const prefixInput = document.getElementById('countryName');
const countriesList = document.getElementById('countries');


prefixInput.addEventListener('keyup', ({target}) =>{
    const minLength = Number(target.dataset.minLength)
    countriesList.innerHTML = ''
    if(target.value.length > minLength){
        console.log(target.value);
        const url = `/countries/${target.value}`
        fetch(url, {
            method: 'GET'
        })
        .then( response => response.json())
        .then(  countries => {
            console.log(countries);
        })
        .catch( err => console.error(err))
    }
})