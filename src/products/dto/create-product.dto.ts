import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Category } from "src/categories/entities/category.entity"

export class CreateProductDto {
    
    @IsNotEmpty({message: 'El nombre del producto es obligatorio'})
    @IsString({message: 'nombre no valido'})
    name: string

    @IsNotEmpty({message: 'El precio del producto es obligatorio'})
    @IsNumber({maxDecimalPlaces: 2}, {message: 'Precio no valido'})
    price: number 

    @IsNotEmpty({message: 'la cantidad no puede ir vacia'})
    @IsNumber({maxDecimalPlaces: 0}, {message:'Cantidad no es valida'})
    inventory: number


    @IsNotEmpty({message: 'la categoria no puede ir vacia'})
    @IsInt({message: 'la categorai no es valida'})
    categoryId: number
}
