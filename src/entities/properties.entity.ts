import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { Schedules_users_properties } from "./schedules_users_properties.entity";

@Entity("properties")
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column()
  sold: Boolean;

  @Column()
  value: Number;

  @Column()
  size: Number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses)@JoinColumn()
  addresses: Addresses

  @ManyToOne(() => Categories, (Categories) => Categories.id)
  categories: Categories

  @OneToMany(() => Schedules_users_properties, (Schedules_users_properties) => Schedules_users_properties.properties)
  schedules_users_properties: Schedules_users_properties[]
}
