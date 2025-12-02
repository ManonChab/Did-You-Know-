fetch("https://uselessfacts.jsph.pl/api/v2/facts/random.json",{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
    .then(Response => Response.json())
    .then(y => document.getElementById("factLocation").innerHTML =y)
    .finally(console.log("fact ok"));
    