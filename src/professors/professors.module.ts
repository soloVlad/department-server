import { Module } from "@nestjs/common";
import { ProfessorsService } from "./professors.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfessorsRepository } from "./professors.repository";
import { ProfessorsController } from "./professors.controller";

@Module({
	imports: [TypeOrmModule.forFeature([ProfessorsRepository])],
	controllers: [ProfessorsController],
	providers: [ProfessorsService],
})
export class ProfessorsModule {}
