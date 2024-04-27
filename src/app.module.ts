import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { ProfessorsModule } from "./professors/professors.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
	imports: [
		TasksModule,
		ProfessorsModule,
		TypeOrmModule.forRoot({
			type: "postgres",
			host: "localhost",
			port: 5432,
			username: "admin",
			password: "pw4department",
			database: "department",
			autoLoadEntities: true,
			synchronize: true,
		}),
	],
})
export class AppModule {}
