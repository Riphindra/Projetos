import { Injectable } from "@nestjs/common";
import { CriaProdutoDTO } from "./dto2/Produto.dto";
import { ProdutoEntity } from "./Produto.entity";

@Injectable()   
export class ProdutoArmazenados{
  Buscapormarca(cor: String, novosDados: CriaProdutoDTO) {
    throw new Error("Method not implemented.");
  }
  Buscaporcor(cor: String, novosDados: CriaProdutoDTO) {
    throw new Error("Method not implemented.");
  }
  Modificaproduto(produto: string, novosDados: CriaProdutoDTO) {
    throw new Error("Method not implemented.");
  }
  Produtoativo(ativo: Boolean, novosDados: CriaProdutoDTO) {
    throw new Error("Method not implemented.");
  }
  RemoveEstoque(estoque: Uint8Array, novosDados: CriaProdutoDTO) {
    throw new Error("Method not implemented.");
  }
  Adicionarestoque(_estoque: Uint8Array, _novosDados: CriaProdutoDTO) {
    throw new Error("Method not implemented.");
  }
  buscaId(_id: String, _novosDados: CriaProdutoDTO) {
    throw new Error("Method not implemented.");
  }
  buscaNome(_nome: string, _novosDados: CriaProdutoDTO) {
    throw new Error("Method not implemented.");
  }
  buscaProduto(id: string, novosDados: CriaProdutoDTO) {
    throw new Error("Method not implemented.");
  }
    
 #produto:ProdutoEntity[] = [];

    get produto(){
        return this.#produto
     }
    AdicionarProduto(produto: ProdutoEntity){
        this.#produto.push(produto);
    }
    async validaMarca(marca:string){
        const possivelProduto= this.#produto.find(
            produto => produto.marca === marca
        );
        return(possivelProduto !== undefined);
    }
    private buscarPorID(id: string){
        const possivelProduto = this.#produto.find(
            produtoSalvo => produtoSalvo.id === id
        );
        if(!possivelProduto){
            throw new Error('Produto não encontrado');
        }
    }
    async atualizarProduto(id:string,dadosAtualizacao:Partial<ProdutoEntity>){
        const possivelProduto = this.#produto.find(
            usuarioSalvo => usuarioSalvo.id === id
        );
        if(!possivelProduto){
            throw new Error('Produto não encontrado');
        }
        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return;
                }
            this.#produto[chave] = valor;
            }
        )
        return this.#produto;
    }
    async removeProduto(id: string){
        const produto = this.buscarPorID(id);
        this.#produto = this.#produto.filter(
            produtoSalvo => produtoSalvo.id !== id
        )
        return produto;
    }
}