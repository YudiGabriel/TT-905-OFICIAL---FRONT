let url = "https://tt905-2021-mensagens-gabriel.herokuapp.com/repsipa/"


async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
        const output = document.getElementById("json");
        const response = await fetch(url, options);

        if ( response.status>=200 && response.status <= 300){
            console.log("Funcionou");
            output.innerHTML = await response.text();
        } else {
            console.log("Deu errado");
        }
}

async function callFetchWithPost(mensagem){
    let headers = new Headers();
    const options = { 
        method : "POST", 
        mode : "cors",
        headers:{

            'Accept': 'application/json',
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            'mensagem': mensagem
        })

    }
    await fetch(url, options);
}

async function callFetchWithPut(id, novaMensagem){
    const options = { 
        method : "PUT", 
        mode : "cors",
        headers :{

            'Accept': 'application/json',
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            'mensagem': novaMensagem
        })
    }
    await fetch(`${url}${id}`, options);
}
   

async function callFetchWithDelete(id){
    let headers = new Headers();
    const options = { 
        method : "DELETE", 
        mode : "cors",
        headers : {

            'Accept': 'application/json',
            'content-type' : 'application/json'
        }
    }
    await fetch(`${url}${id}`, options);
}