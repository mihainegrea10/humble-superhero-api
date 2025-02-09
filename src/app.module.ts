import { Module } from '@nestjs/common';
import { SuperheroController } from './superhero.controller';
@Module({
  controllers: [SuperheroController],
})
export class AppModule {}
