import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProfessorsRepository } from "./professors.repository";
import { Professor } from "./professor.entity";
import { CreateProfessorDto } from "./dto/create-professor.dto";

@Injectable()
export class ProfessorsService {
	constructor(
		@InjectRepository(ProfessorsRepository)
		private professorsRepository: ProfessorsRepository,
	) {}

	getProfessors(): Promise<Professor[]> {
		return this.professorsRepository.find();
	}

	createProfessor(createProfessorDto: CreateProfessorDto): Promise<Professor> {
		return this.professorsRepository.createProfessor(createProfessorDto);
	}
}
