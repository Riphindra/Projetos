import { IsEmail, IsInt, MinLength,IsString, IsNotEmpty,IsOptional } from "class-validator";
import { EmailUnico } from "../validação/email-unico.validator";
export class AlteraUsuarioDTO{
    @IsString()
@IsNotEmpty({message:"Nome inválido"})
@IsOptional()
nome: string;
    
   
    
    @IsEmail(undefined, {message: "Email inválido"})
    @EmailUnico({message:"Já existe usuário com esse email"})
    @IsOptional()
     email: string;
    

    
   @MinLength(6,{message: "Tamanho da senha inválido"})
    @IsOptional()
 senha: string;
    

    
  @IsInt({message: "Idade inválida"})
    @IsOptional()
idade: BigInteger;
    
    
    
    
 @IsString({message: "Cidade inválida"})
 @IsOptional()
     cidade: string;
    
    
    
    
@IsString({message: "Telefone inválido"})
    @IsOptional()
 telefone: string;
    
 
    
 }