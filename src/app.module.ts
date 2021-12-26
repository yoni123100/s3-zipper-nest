import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import s3config from './config/s3config';
import { ZipperModule } from './zipper/zipper.module';

@Module({
  imports: [
    ZipperModule,
    ConfigModule.forRoot({ load: [s3config], isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
