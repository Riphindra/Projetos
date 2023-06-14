import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()   
export class UsuariosArmazenados{
 #usuarios:UsuarioEntity[] = [];

    AdicionarUsuario(usuario: UsuarioEntity){
        this.#usuarios.push(usuario);
    }

    get Usuarios(){        
        return this.#usuarios;
    }
    async validaEmail(email:string){
        const possivelUsuario= this.#usuarios.find(
            usuario => usuario.email === email
        );
        return(possivelUsuario !== undefined);
    }
    private buscarPorID(id: string){
        const possivelUsuario = this.#usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );
        if(!possivelUsuario){
            throw new Error('Usuario não encontrado');
        }
    }
    async atualizaUsuario(id:string,dadosAtualizacao:Partial<UsuarioEntity>){
        const possivelUsuario = this.#usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );
        if(!possivelUsuario){
            throw new Error('Usuário não encontrado');
        }
        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return;
                }
                possivelUsuario[chave] = valor;
            }
        )
        return possivelUsuario;
    }
    async removeUsuario(id: string){
        const usuario = this.buscarPorID(id);
        this.#usuarios = this.#usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        )
        return usuario;
    }
}