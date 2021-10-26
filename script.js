function toggleMenu(event) {   
    //event.target.classList.toggle("clicked");
    document.getElementById("body").classList.toggle("clicked");
};

function loadEvent() {
    console.log("Loaded");
    
    document.getElementById("menu-btn").addEventListener("click", toggleMenu);
};

window.addEventListener("load", loadEvent);