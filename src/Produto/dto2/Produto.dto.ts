import { IsInt, MinLength, IsNotEmpty, IsOptional,IsString, IsArray, IsBoolean, IsNumber} from "class-validator";

export class CriaProdutoDTO{


        @MinLength(6,{message: "Nome inválido"})
        @IsOptional()
        nome: string;



        @IsBoolean({message: "ativo inválida"})

        ativo:boolean;




        @IsNumber ()
        @IsOptional()
        valor: number;




        @IsInt ({message: "Estoque inválido"})
        @IsOptional()
        estoque : BigInteger;

        @IsArray({message: "Medida inválida"})
        @IsOptional()
        medidas : string[];

        @IsArray({message: "Cor inválida"})
        @IsNotEmpty()
        cor : string[];

        @IsString({message: "Marca inválida"})
        @IsOptional()
        marca : string;
        }





