import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Properties } from "./properties.entity";
import { Users } from "./user.entity";

@Entity("schedules_users_properties")
export class Schedules_users_properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column({type: 'date'})
  date: Date;

  @Column({type: 'time'})
  hour: string;

  @ManyToOne(() => Users, (Users) => Users.id, {eager: true})
  users: Users

  @ManyToOne(() => Properties, (Properties) => Properties.id)
  properties: Properties
}
