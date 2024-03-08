import { IsOptional, IsString, IsUUID } from "class-validator";

/* eslint-disable prettier/prettier */
export class UpdateCarDTO {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    readonly brand?: string;

    @IsString()
    readonly model?: string;
}