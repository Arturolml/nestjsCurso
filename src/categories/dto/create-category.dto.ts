import { IsNotEmpty } from 'class-validator'
export class CreateCategoryDto {
    @IsNotEmpty({message: 'El nombre no puede ir vacio'})
    name: string
}
