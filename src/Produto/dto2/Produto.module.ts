import { Module } from "@nestjs/common";
import { ProdutoController } from "../produto.controller";
import { ProdutoArmazenados } from "../Produto.dm";


@Module({
    controllers:[ProdutoController],
    providers: [ProdutoArmazenados  ]
})
export class ProdutoModule{

}