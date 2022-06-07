const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}

loadCountry();

const displayCountry = countries =>{
    const countryid = document.getElementById("country")
    countries.forEach(c => {
        console.log(c.name); 
        const h3 = document.createElement("h3");
        const div = document.createElement("div");
        const p = document.createElement("p");
        
        div.classList.add('country')
        p.innerText=c.capital;
        h3.innerText=c.name.common;
        div.appendChild(h3);
        div.appendChild(p);
        countryid.appendChild(div)
    });

    
}