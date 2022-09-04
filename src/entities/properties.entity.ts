import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Address } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { Schedules_users_properties } from "./schedules_users_properties.entity";

@Entity("properties")
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column({default: false})
  sold: Boolean;

  @Column()
  value: number;

  @Column({type: 'integer'})
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, {eager: true})@JoinColumn()
  address: Address

  @ManyToOne(() => Categories, (Categories) => Categories.id, {eager: true})
  categories: Categories

  @OneToMany(() => Schedules_users_properties, (Schedules_users_properties) => Schedules_users_properties.properties)
  schedules_users_properties: Schedules_users_properties[]
}
