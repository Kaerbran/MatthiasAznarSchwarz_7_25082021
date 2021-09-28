import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from "./User";

@Entity( {name : "Table_Post"} )
export class Post {

    @PrimaryGeneratedColumn("uuid")
    Post_ID: number;

    @Column()
    Post_Picture: string;

    @Column()
    Person_ID: string;

    @Column()
    Post_Location: string;

    @Column()
    Post_Date_published: string;

    @Column({ type: "varchar", length: 300})
    Post_Comment: string;

    @ManyToOne((type) => User, (User) => User.Table_Post)
    User: Promise<User>;

}