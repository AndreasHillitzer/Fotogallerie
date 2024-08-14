async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

let images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg",
    "img/11.jpg",
    "img/12.jpg",
    "img/13.jpg",
    "img/14.jpg",
    "img/15.jpg",
    "img/16.jpg",
    "img/17.jpg",
    "img/18.jpg",
    "img/19.jpg"
];

function render() {
    for(let i = 0; i < images.length; i++) {
        document.getElementById("images").innerHTML += renderTemplate(i);
    }
}

function renderTemplate(i) {
    return /*html*/` 
    <div onclick="openImage(${i})" id="imgbox" class="imgbox">
    <img src="${images[i]}">
    </div>
    `;
}

function openImage(i) {
    document.getElementById("expandedImgBox").classList.remove("hidden");
    document.getElementById("footer").classList.add("hidden");

    const expandedImg = images[i];
    document.getElementById("expandedImgBox").innerHTML += expandedImgTemplate(expandedImg, i);
}

function expandedImgTemplate(expandedImg, i) {
    return /*html*/`
    <div class="dark-background">
        <img onclick="closeFullImg()" class="close-img-icon" src="img/close_icon.png">
        <img onclick="previousImg(${i - 1})" class="next-img-icon" src="img/left_arrow_icon.png" alt="Previous">
        <img class="full-img" src="${expandedImg}">
        <img onclick="nextImg(${i + 1})" class="next-img-icon" src="img/right_arrow_icon.png" alt="Next">
    </div>
`;
}

function closeFullImg() {
    document.getElementById("expandedImgBox").classList.add("hidden");
    document.getElementById("footer").classList.remove("hidden");
}

function previousImg(i) {
    i = i--;
    if (i == -1) {
        i = 18;
    }
    openImage(i);
}

function nextImg(i) {
    i = i++;
    if (i == 19) {
        i = 0;
    }
    openImage(i);
}