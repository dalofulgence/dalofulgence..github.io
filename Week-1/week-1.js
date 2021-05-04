const links = [
    {
        label: "Week1 notes",
        url: "week-1/index.html"
    },
    {
        label: "Week1 notes",
        url: "week-2/index.html"
    },
    {
        label: "Week3 notes",
        url: "week-3/index.html"
    }
];

links.forEach[
    link => {

    }
];


let ul = document.querySelector('ul');

links.forEach[
    link => {
        ul.innerHTML +=
        `
            <li>
                <a href="${link.url}">${link.label}</a>
            </li>    
        `

    }
];
