import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Post } from "./Post";

@Entity( {name : "Table_Personnes"} )
export class User {

    @PrimaryGeneratedColumn("uuid")
    Person_ID: number;

    @Column({ type: "varchar", length: 80})
    Person_Email: string;

    @Column()
    Person_Login: string;

    @Column()
    Person_Password: string;

    @Column()
    Person_Picture: string;

    @OneToMany( (type) => Post, (Post) => Post.User)
    Table_Post: Promise<Post[]>;
}
