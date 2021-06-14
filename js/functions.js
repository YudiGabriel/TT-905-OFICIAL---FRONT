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

async function callFetchWithPost(nome, apelido, data, cidade, jogo, signo, time, escola){
    let headers = new Headers();
    const options = { 
        method : "POST", 
        mode : "cors",
        headers:{

            'Accept': 'application/json',
            'content-type' : 'application/json'
        },
        body: JSON.stringify({

                'nome': nome, 'apelido': apelido, 'data':data , 'cidade':cidade, 'jogo':jogo, 'signo':signo, 'time':time, 'escola':escola
             })

    }
    await fetch(url, options);
}

async function callFetchWithPut(id, nnome, napelido, ndata, ncidade, njogo, nsigno, ntime, nescola){
    const options = { 
        method : "PUT", 
        mode : "cors",
        headers :{

            'Accept': 'application/json',
            'content-type' : 'application/json'
        },
        body: JSON.stringify({

            'nome': nnome, 'apelido': napelido, 'data':ndata, 'cidade':ncidade, 'jogo':njogo, 'signo':nsigno , 'time':ntime, 'escola':nescola
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

/* Formulários*/

function submitPost(){
    console.log("Entrei na função");
    const form = document.forms['postForm'];
    const nome = form['nome'].value;
    const apelido = form['apelido'].value;
    const data = form['data'].value;
    const cidade = form['cidade'].value;
    const jogo = form['jogo'].value;
    const signo = form['signo'].value;
    const time = form['time'].value;
    const escola = form['escola'].value;
    callFetchWithPost(nome, apelido, data,cidade, jogo ,signo, time, escola);
   return false; //evitar o reload da tela
}

function submitPut(){
    const form = document.forms['putForm'];
    const id = form["id"].value
    const nome = form['nome'].value;
    const apelido = form['apelido'].value;
    const data = form['data'].value;
    const cidade = form['cidade'].value;
    const jogo = form['jogo'].value;
    const signo = form['signo'].value;
    const time = form['time'].value;
    const escola = form['escola'].value;

    // const mensagem = form["mensagem"].value;
    callFetchWithPut(id, nome, apelido, data, cidade, jogo, signo, time, escola);
   return false; //evitar o reload da tela
}

function submitDelete(){
    const form = document.forms['deleteForm'];
    const id = form["id"].value
    callFetchWithDelete(id);
   return false; //evitar o reload da tela
}