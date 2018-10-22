const addBtn = document.getElementById('addBtn');
const prefixInput = document.getElementById('countryName');
const countriesList = document.getElementById('countries');

addBtn.addEventListener('click', () => {
    let num_1 = document.getElementById('num_1').value;
    let num_2 = document.getElementById('num_2').value;
    let result = document.getElementById('result');
    let url = `/add?num_1=${num_1}&num_2=${num_2}`;
    let loader = document.getElementById('loader');
    
    showLoader(loader);
    
    fetch(url, {
        method: 'GET'
    })
        .then(res => {
            return res.text();
        })
        .then(data => {
            console.log(data)
            result.innerHTML = `Sum is ${data}`;
        })
        .catch(err => {
            console.error(err)
        })
        .finally(() => {
            hideLoader(loader)
        })
    

    // JQUERY Way
    
    /*
    $.ajax({
        url: '/add',
        method: 'GET',
        data: { num_1, num_2}
    })
    .done( data => {
        result.innerHTML = `Sum is ${data}`;
    })
    .always( () => {
        hideLoader(loader);
    });
    */

    // $.get("/add", {
    //     data: { num_1, num_2}
    // }, function(data) {
    //     result.innerHTML = `Sum is ${data}`;
    // })

})

prefixInput.addEventListener('keyup', ({ target }) => {
    const minLength = Number(target.dataset.minlength);
   
    if( target.value.length > minLength ){
        countriesList.innerHTML = '';
        // console.log(target.value);
        const url = `/countries/${target.value}`;
        fetch(url, {
            method: 'GET'
        })
        .then( response  => response.json() )
        .then(countries => {
            if( countries.length > 0 ){
                countriesList.innerHTML = countries.map( name => `<option value="${name}">`).join(' ')
            }
            else{
                countriesList.innerHTML = 'No country'
            }
        })
        .catch( err => console.error(err));
    }
});

// $.get(), $.post(), $.getScript(), $.getJson()

function showLoader(loader){
    loader.classList.add('loader--show')
    loader.classList.remove('loader--hide')
}

function hideLoader(loader){
    loader.classList.remove('loader--show')
    loader.classList.add('loader--hide')
}