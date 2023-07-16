function loadUsers() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displaydata(data))

}

function displaydata(data) {
    console.log(data);
}


loadUsers();