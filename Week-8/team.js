let next;
let previous;

getUrl("https://swapi.dev/api/people/");

function getUrl(url) {
    let div = document.querySelector("div");
    div.innerHTML = "";

    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            next = jsonData.next;
            previous = jsonData.previous;
            jsonData.results.forEach((person) => {
                div.innerHTML +=
                    `
        <ul>
        <li>Name: ${person.name}</li>
        <li>Height:${person.height}</li>
        <li>Birth Year: ${person.birth_year}</li>
        </ul>

        `
            });

        });


}

document.querySelector("#next").addEventListener("click", () => {
    getUrl(next);
    
});

document.getElementById('previous').addEventListener("click", () => {
    getUrl(previous);
 });