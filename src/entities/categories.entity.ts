import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Properties } from "./properties.entity";

@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column()
  name: string;

  @OneToMany(() => Properties, (Properties) => Properties.categories)
  properties: Properties[]
}
