import { IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateCarDTO {

    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;
}