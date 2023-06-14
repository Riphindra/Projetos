import { Body, Controller, Post, Get } from "@nestjs/common";

import {CriaUsuarioDTO} from "./dto/usuario.dto";

import { UsuarioEntity } from "./usuario.entity";

import { UsuariosArmazenados } from "./usuario.dm";
import{v4 as uuid} from 'uuid';
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { Delete, Param, Put } from "@nestjs/common/decorators";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";



@Controller('/usuarios')

export class UsuarioController{

 constructor(private clsUsuariosArmazenados: UsuariosArmazenados){
 }
 @Get()

 
 async RetornoUsuarios(){
     const UsuarioListados = await this.clsUsuariosArmazenados.Usuarios;
     const listaRetorno = UsuarioListados.map(
         usuario => new ListaUsuarioDTO(
           usuario.id,
           usuario.nome
         )
      );
 return listaRetorno;

 }
@Post()

 async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO){
 var usuario = new UsuarioEntity(
  uuid(),
  dadosUsuario.nome,
  dadosUsuario.idade,
  dadosUsuario.cidade,
  dadosUsuario.email,
  dadosUsuario.telefone,
  dadosUsuario.senha);

 var retornoUsuario;
 this.clsUsuariosArmazenados.AdicionarUsuario(usuario)

 retornoUsuario={
 id: usuario.id,
message:'Usuario Criado'
}
 return retornoUsuario;

}
@Put('/:id')
async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AlteraUsuarioDTO){
  const usuarioAtualizado = await this.clsUsuariosArmazenados.atualizaUsuario(id, novosDados);
  return{
    usuario:usuarioAtualizado,
    message:'Usuário atualizado'

  }
}
@Delete('/:id')
async removeUsuario(@Param('id') id: string){
  const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id);
  return{
    usuario: usuarioRemovido,
    message:'Usuário removido'
   }
 }
}