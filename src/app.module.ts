import { DatabaseModule, NestConfigModule } from '@/common';
import { NestI18nModule } from '@/lib';
import { Module } from '@nestjs/common';

@Module({
  imports: [NestConfigModule, NestI18nModule, DatabaseModule],
})
export class AppModule {}
