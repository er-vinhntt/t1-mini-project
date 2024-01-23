import { RoleEntity, Roles } from '@/entities';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

/**
 * @see https://github.com/tada5hi/typeorm-extension?tab=readme-ov-file#seeding
 */
export default class RoleSeeder implements Seeder {
  /**
   * Track seeder execution.
   *
   * Default: false
   */
  track = false;

  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(RoleEntity);
    await repository.insert([
      {
        name: Roles.ADMIN,
      },
      {
        name: Roles.USER,
      },
    ]);

    // ---------------------------------------------------
  }
}
