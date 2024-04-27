import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Professor {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	firstName: string;

	@Column()
	secondName: string;

	@Column()
	middleName: string;

	@Column({ nullable: true })
	email: string;

	@Column({ nullable: true })
	address: string;

	@Column({ nullable: true })
	phone: number;

	@Column()
	shownInPreview: boolean;
}
