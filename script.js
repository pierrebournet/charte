function selectname(){
    let names=  ["Johann","Laure","Jean-Christophe","Arnaud","Pierre","Alexandre","Jean-François","Jean-Sebatien","Kévin","Sandrine","Sokunthy","Terry","Delphine","Jesse","Stephane","Sebatien"]
    var rand= Math.floor(Math.random()*16)
    document.getElementById("random").textContent = names[rand]
    setTimeout(reset,3000)
}

function reset(){
    document.getElementById("random").textContent = "RANDOM APPRENANT"
}