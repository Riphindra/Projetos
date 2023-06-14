import { IsEmail, IsInt, MinLength,IsString, IsNotEmpty,IsOptional } from "class-validator";
import { EmailUnico } from "src/usuario/validação/email-unico.validator";

export class AlteraUsuarioDTO{
    @IsString()
@IsNotEmpty({message:"Nome inválido"})
@IsOptional()
nome: string;
    
   
    
    @IsEmail(undefined, {message: "Email inválido"})
    @EmailUnico({message:"Já existe usuário com esse email"})
    @IsOptional()
     ativo: boolean;
    

    
   @MinLength(6,{message: "Tamanho da senha inválido"})
    @IsOptional()
 valor: number;
    

    
  @IsInt({message: "Idade inválida"})
    @IsOptional()
 estoque: BigInteger;
    
    
    
    
 @IsString({message: "Cidade inválida"})
 @IsOptional()
     medidas: string[];
    
    
    
    
@IsString({message: "Telefone inválido"})
    @IsOptional()
    cor: string[];
    
 @IsString({message:"Marca inválida"})
   @IsOptional()
   marca: string[];
    
 }