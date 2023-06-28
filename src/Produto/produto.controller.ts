import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ListaProdutoDTO } from "./dto2/listaProduto.dto";
import { ProdutoEntity } from "./Produto.entity";
import { ProdutoArmazenados } from "./Produto.dm";
import { CriaProdutoDTO } from "./dto2/Produto.dto";
import {v4 as uuid} from 'uuid';

@Controller('/produto')

export class ProdutoController{
  #usuarios: any;

 constructor(private clsProdutosArmazenados: ProdutoArmazenados){
 }
 @Get()

 async RetornoProduto(){
     const ProdutoListados = await this.clsProdutosArmazenados.produto;
     const listaRetorno = ProdutoListados.map(
         produto => new ListaProdutoDTO(
           produto.id,
           produto.nome
         )
      );
 return listaRetorno;

 }
@Post()

 async criaUsuario(@Body() dadosProduto: CriaProdutoDTO ){
 var produto = new ProdutoEntity(
    uuid(),
    dadosProduto.nome,
    dadosProduto.ativo,
    dadosProduto.valor,
    dadosProduto.estoque,
    dadosProduto.medidas,
    dadosProduto.cor,
    dadosProduto.marca);

 var retornoProduto;
 this.clsProdutosArmazenados.AdicionarProduto(produto)

 retornoProduto={
 id: produto.id,
message:'Produto Criado'
}
 return retornoProduto;

}
@Put('/:id')
async atualizaProduto(@Param('id') id: string, @Body() novosDados: CriaProdutoDTO){
  const produtoAtualizado = await this.clsProdutosArmazenados.atualizarProduto(id, novosDados);
  return{
    usuario:produtoAtualizado,
    message:'Produto atualizado'

  }
}
@Delete('/:id')
async removeUsuario(@Param('id') id: string){
  const produtoRemovido = await this.clsProdutosArmazenados.removeProduto(id);
  return{
    usuario: produtoRemovido,
    message:'Produto removido'
   }
 }
 @Get('/nome:-nome')
 async buscaNome(@Param('nome') nome: string, @Body() novosDados: CriaProdutoDTO){
   const produtoAtualizado = await this.clsProdutosArmazenados.buscaNome(nome, novosDados);
   return{
     usuario:produtoAtualizado,
     message:'Busca do nome concluida'
 
  }
 }
 @Get('/id:-id')
 async buscaID(@Param('Id') id: string, @Body() novosDados: CriaProdutoDTO){
  const produtoAtualizado = await this.clsProdutosArmazenados.buscaId(id, novosDados);
  return{
    usuario:produtoAtualizado,
    message:'Busca do id concluida'

 }
 }
 @Put('produto')
  async Modificaproduto(@Param('produto') produto: string, @Body() novosDados: CriaProdutoDTO){
    const produtoModificado = await this.clsProdutosArmazenados.Modificaproduto(produto,novosDados);
    return{
      usuario:produtoModificado,
      message: 'Modificado com sucesso'
    } 
  }
  @Post('estoque')
  async Adicionarestoque(@Param('estoque') estoque:BigInteger,@Body() novosDados: CriaProdutoDTO){
    const estoqueadicionado = await this.clsProdutosArmazenados.Adicionarestoque(estoque,novosDados);
    return{
      usuario:estoqueadicionado,
      message: "Estoque adicionado"
    }
  }
  @Delete('estoque')
  async Removeestoque(@Param('estoque')estoque:BigInteger,@Body() novosDados: CriaProdutoDTO){
    const estoqueremovido = await this.clsProdutosArmazenados.RemoveEstoque(estoque,novosDados);
    return{
      usuario:estoqueremovido,
      message: "Estoque Removido"
    }
  }
  @Get('/cor:-cor')
  async Buscaporcor(@Param('cor')cor:String, @Body() novosDados: CriaProdutoDTO){
    const produtoAtualizado = await this.clsProdutosArmazenados.Buscaporcor(cor,novosDados);
    return{
      usuario:produtoAtualizado,
      message: "busca por cor com sucesso"
    }
  }

}