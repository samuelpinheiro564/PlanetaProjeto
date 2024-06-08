export default class Planet{
    constructor( nome, data, cor1, cor2, populacao, galaxia,ss,coordenadas, nome_gov, titulo_gov){
        this.id =this.getId();
        this.nome = nome;
        this.data = data;
        this.cor1 = cor1;
        this.cor2 = cor2;
        this.populacao = populacao;
       this.galaxia= galaxia;
        this.nome_gov = nome_gov;
        this.titulo_gov = titulo_gov;
    }
    getId(){
        return Math.floor(Math.random() * 1000);
    }
  }