let global = "Eu sou o GLOBAL";


function pai() {
    let doPai = "Eu sou o Pai";

    function filho (){

        let doFilho = "Eu sou do FILHO";

        console.log("Filho vê global", global);
        console.log("Filho vê doPai", doPai);
        console.log("Filho vê doFilho", doFilho);      
    }
    
    filho();

    console.log("Pai vê global", global);
    console.log("Pai vê doPai", doPai);
}

pai()

console.log("Global vê: ", global)