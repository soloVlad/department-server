import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProfessorsService } from "./professors.service";
import { Professor } from "./professor.entity";
import { CreateProfessorDto } from "./dto/create-professor.dto";

@Controller("professors")
export class ProfessorsController {
	constructor(private professorsService: ProfessorsService) {}

	@Get()
	getProfessors(): Promise<Professor[]> {
		return this.professorsService.getProfessors();
	}

	@Post()
	createProfessor(
		@Body() createProfessorDto: CreateProfessorDto,
	): Promise<Professor> {
		return this.professorsService.createProfessor(createProfessorDto);
	}
}
