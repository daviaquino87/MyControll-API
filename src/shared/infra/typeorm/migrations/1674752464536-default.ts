import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674752464536 implements MigrationInterface {
    name = 'default1674752464536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ADD "transact_date" TIMESTAMP NOT NULL DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "transact_date"`);
    }

}
