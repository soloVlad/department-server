import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import type { TaskStatus } from "./task-status.enum";

@Entity()
export class Task {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	status: TaskStatus;
}
