import { UserEntity } from '@/entities';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class UserSeeder implements Seeder {
  /**
   * Track seeder execution.
   *
   * Default: false
   */
  track = false;

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const userFactory = await factoryManager.get(UserEntity);
    // save 1 factory generated entity, to the database
    await userFactory.save();

    // save 5 factory generated entities, to the database
    await userFactory.saveMany(10);
  }
}
