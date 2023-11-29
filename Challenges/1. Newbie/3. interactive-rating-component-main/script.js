function trocar_cor(div, div1Id, div2Id, div3Id, div4Id) {
    let orange = "hsl(25, 97%, 53%)";
    let light_gray = "hsl(217, 12%, 63%)";
    let back_default_color = "hsl(0, 0%, 50%, 0.150)";
    let medium_gray = "hsl(216, 12%, 54%)";
    
    let div1 = document.getElementById(div1Id);
    let div2 = document.getElementById(div2Id);
    let div3 = document.getElementById(div3Id);
    let div4 = document.getElementById(div4Id);
    
    div.style.backgroundColor = orange;
    div.style.color = "white";
    document.getElementById("h5dem").innerHTML = `You selected ${div.innerHTML} out of 5`;
    
    if (div1.style.backgroundColor != back_default_color) {
        div1.style.backgroundColor = back_default_color;
        div1.style.color = light_gray;
    }
    if (div2.style.backgroundColor != back_default_color) {
        div2.style.backgroundColor =  back_default_color;
        div2.style.color = light_gray;
        div2.style.transitionDuration = ".4s";
    }
    if (div3.style.backgroundColor != back_default_color) {
        div3.style.backgroundColor = back_default_color;
        div3.style.color = light_gray;
        div3.style.transitionDuration = ".4s";
    }
    if (div4.style.backgroundColor != back_default_color) {
        div4.style.backgroundColor = back_default_color;
        div4.style.color = light_gray;
        div4.style.transitionDuration = ".4s";
    }
}

function thankfunc() {
    document.getElementById("rating").style.display = "none";
    document.getElementById("thank").style.display = "flex";
}
