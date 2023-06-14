import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
@Injectable()
@ValidatorConstraint({async:true})
export class ProdutoUnicoValidator implements ValidatorConstraintInterface{
    clsProdutoArmazenados: any;
    constructor (){}

    async validate(value: any, _validationArguments?: ValidationArguments): Promise<boolean> {
    const validarProduto = await this.clsProdutoArmazenados.validarProduto(value);
    return !validarProduto;
    }
    
}
export const EmailUnico = (opcaoValidacao:ValidationOptions)=>{
    return(objeto:Object, propriedade:string) =>{
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options:opcaoValidacao,
            constraints:[],
            validator:ProdutoUnicoValidator,
        })
    }
}