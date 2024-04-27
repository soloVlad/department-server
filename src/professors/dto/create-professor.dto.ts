import {
	IsBoolean,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from "class-validator";

export class CreateProfessorDto {
	@IsNotEmpty()
	firstName: string;

	@IsNotEmpty()
	secondName: string;

	@IsNotEmpty()
	middleName: string;

	@IsOptional()
	@IsString()
	email: string;

	@IsOptional()
	@IsString()
	address: string;

	@IsOptional()
	@IsNumber()
	phone: number;

	@IsOptional()
	@IsBoolean()
	shownInPreview: boolean;
}
