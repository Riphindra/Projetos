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
 @Get('nome/:Nome')
 async buscaNome(@Param('nome') nome: string, @Body() novosDados: CriaProdutoDTO){
   const produtoAtualizado = await this.clsProdutosArmazenados.buscaNome(nome, novosDados);
   return{
     usuario:produtoAtualizado,
     message:'Busca do nome concluida'
 
  }
 }
 @Get('id/:ID')
 async buscaID(@Param('Id') id: string, @Body() novosDados: CriaProdutoDTO){
  const produtoAtualizado = await this.clsProdutosArmazenados.buscaId(id, novosDados);
  return{
    usuario:produtoAtualizado,
    message:'Busca do id concluida'

 }
 }

}