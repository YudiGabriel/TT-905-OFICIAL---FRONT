let url = "https://tt905-2021-mensagens-gabriel.herokuapp.com/repsipa/"


async function callFetchWithGet(){
        let headers = new Headers();
        const options = { 
            method : 'GET', 
            mode : 'cors',
            headers: headers
        }
        const output = document.getElementById("json");
        const response = await fetch(url, options);

        if ( response.status>=200 && response.status <= 300){
            console.log("Funcionou");
            output.innerHTML = await response.tesxt();
        } else {
            console.log("Deu errado");
        }
}