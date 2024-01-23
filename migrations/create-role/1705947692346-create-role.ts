import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRole1705947692346 implements MigrationInterface {
    name = 'CreateRole1705947692346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` enum ('Admin', 'User') NOT NULL DEFAULT 'User', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`roles\``);
    }

}
