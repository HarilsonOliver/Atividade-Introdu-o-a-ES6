class List{
    constructor(){
        this.data = []
    }
    add(nome){
        this.data.push(nome);
        console.log(this.data);
    }
}


class ToList extends List{
    constructor(){
        super();
        this.usuario = 'HPO'
    }
    
    getUsuario(){
        console.log(this.usuario)
    }
    
    static soma(a,b){
       
        return a+b;

    }
}

//const tolist = new ToList()

//document.getElementById('novotodo').onclick = function(){
  //  tolist.add('HP');
    //tolist.getUsuario();
//}
const nome = "HP";

nome = 'JoaoeMaria'

console.log(nome)

function teste(x){
    let y = 4;
    if(x>2){
        y=6
        console.log(x,y)
    }

}

console.log(teste(10))
console.log(y)