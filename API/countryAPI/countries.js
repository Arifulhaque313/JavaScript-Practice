const loadcountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => displaycountry(data));
}
loadcountry();

const displaycountry = countries => {

    for(const c of countries){
        console.log(c.name);
    }
}