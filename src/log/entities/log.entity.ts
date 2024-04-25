import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GenericEntity } from "./genericEntity";

@Entity()
export class LogEntity extends GenericEntity {
    @Column()
    level: string;

    @Column()
    message: string;
}
