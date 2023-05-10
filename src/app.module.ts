import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './Entity/User.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1928',
      database: 'nest',
      entities: [Usuario],
      synchronize: true, //permite que se sincronice con la base de datos y cree las tablas automaticamente
      //para desarrollo, en produccion no se debe usar(poner false)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
