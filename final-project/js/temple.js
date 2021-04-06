window.addEventListener('load', ()=>{
    const requestURL = '../temple2.json';
    fetch(requestURL)
        .then((response)=> {return response.json();})
        .then((jsonObject)=> {
        console.log(jsonObject); // temporary checking for valid response and data parsing
        Object.entries(jsonObject).forEach(([key,temple])=>{
        buildTempleCard(temple)
        });       
    });
    
});

  function buildTempleCard(temple){
        console.log(temple);
        let card = document.createElement('section');
        let detail = document.createElement('section');
        card.classList.add("temple");
        card.innerHTML = `<h2>${temple.name}</h2>
                        <img src="${temple.imageurl}" alt="${temple.name}">
                        <p>Adress <b>${temple.address1}</b></P> 
                        <p>Phone: <b>${temple.phone}</b></P>
                        <p>First President <b>${temple.presidents[0]} 1st of ${temple.presidents.length}</b></p>
                        <p>Current President <b>${temple.presidents[temple.presidents.length-1]}</b></p>`;
        document.querySelector("#temples").appendChild(card);

};n