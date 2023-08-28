import { IsString, IsNotEmpty, IsUrl, IsNumber } from "class-validator";

export class UpdateMediaDto {

    @IsNumber()
    id: number

    @IsString({ message: "All fields are required!" })
    @IsNotEmpty({ message: "All fields are required!" })
    title: string;

    @IsString({ message: "All fields are required!" })
    @IsNotEmpty({ message: "All fields are required!" })
    @IsUrl()
    username: string;

}