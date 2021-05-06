var titulo = document.getElementById('title')
var descricao = document.getElementById('descricao')
var img = document.getElementById('img')
var btnEnviar = document.getElementById("btn");


class C{
    inicia(data){       
        let escolhaData = new M();
        escolhaData.Recebe(data);
        let v = new V();
        v.Amostra(escolhaData);
    }   
}


class V{
    Amostra(data){
        titulo.textContent = data.getTitle();
        img.src = data.getImg();
        descricao.textContent = data.getExplanation();
    }
}


class M{
    constructor(){
        this._date = ''; 
        this._title ='';
        this._image ='';
        this._exp='';
    }

    Recebe(data)
    {
        var pedido = new XMLHttpRequest();
        pedido.addEventListener('load', ()=>
        {
            if (pedido.status == 200)
            {
                console.log('Request event ok')               
                var dados = this._processar(pedido.responseText);
                console.log(dados)
                              
                this._atualizar(dados)
            }
        })      
        pedido.open("GET", `https://api.nasa.gov/planetary/apod?api_key=4OzfgnInTYPgtGZApbdua11KuRquDgfOl49t8CNO&date=${data}`,false);       
        pedido.send();
    }

    _processar(String)
    {
        var resposta = JSON.parse(String);
        return resposta;
    }
    _atualizar(dados){
        this._date = dados.date; 
        this._title = dados.title;
        this._image = dados.hdurl;
        this._exp = dados.explanation;
    }

    getDate(){
        return this._date;
    }
    getTitle(){
        return this._title;
    }
    getImg(){
        return this._image;
    }
    getExplanation(){
        return this._exp;
    }

}

var controlador = new C();

btnEnviar.addEventListener('click', () => {
var choice = document.getElementById('date').value;
controlador.inicia(choice);
});
