import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn( {name: 'id_usuario'})
    private id: number;
    @Column( {name: 'username', type: 'varchar', length: 50 , nullable: false})
    private username: string;
    @Column( {name: 'password', type: 'varchar', length: 50 , nullable: false})
    private password: string;
    @Column( {name: 'firstName', type: 'varchar', length: 50 , nullable: false})
    private firstName: string;
    @Column( {name: 'apellido', type: 'varchar', length: 50 , nullable: false})
    private lastName: string;
    @Column( {name: 'email', type: 'varchar', length: 50 , nullable: false, default: 'no hay email'})
    private email: string;
    @Column( {name: 'telefono', type: 'varchar', length: 50 , nullable: false, default: 'no hay telefono'})
    private phone: string;
}