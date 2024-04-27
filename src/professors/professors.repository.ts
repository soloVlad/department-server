import { EntityRepository, Repository } from "typeorm";
import { Professor } from "./professor.entity";
import { CreateProfessorDto } from "./dto/create-professor.dto";

@EntityRepository(Professor)
export class ProfessorsRepository extends Repository<Professor> {
	async createProfessor(
		createProfessorDto: CreateProfessorDto,
	): Promise<Professor> {
		const { shownInPreview } = createProfessorDto;

		const professor = this.create({
			...createProfessorDto,
			shownInPreview: shownInPreview ?? false,
		});

		await this.save(professor);
		return professor;
	}
}
