import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { database } from '../configs';

@Module({
  imports: [TypeOrmModule.forRootAsync(database.asProvider())],
})
export class DatabaseModule implements OnModuleInit {
  private logger = new Logger(DatabaseModule.name);
  constructor(private dataSouce: DataSource) {}
  async onModuleInit() {
    await this.dataSouce.manager.query('show tables;').then((tables: any[]) => {
      this.logger.debug(
        `\nTables in database:: ${JSON.stringify(tables.map((tableObj) => Object.values(tableObj)[0]))}`,
      );
    });
  }
}
