export class ProdutoEntity{
    id:string;
    nome:string;
    ativo:boolean;
    valor:number;
    estoque:BigInteger;
    medidas:string[];
    cor:string[];
    marca:string;
    constructor(id: string,nome: string,ativo:boolean,valor: number,estoque: BigInteger,cor:string[],medidas:string[],marca: string){
        this.id = id;
        this.nome = nome;
        this.ativo = ativo;
        this.valor = valor;
        this.estoque = estoque;
        this.cor = cor
        this.medidas = medidas ;
        this.marca = marca;
    }


}