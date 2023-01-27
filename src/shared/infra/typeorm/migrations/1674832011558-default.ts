import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674832011558 implements MigrationInterface {
    name = 'default1674832011558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_844be48894e2e74651e02abd825"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "userIDId"`);
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "transact_date" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "userID"`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "userID" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "userID"`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "userID" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "transact_date" SET DEFAULT '2023-01-27 15:05:57.557649'`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "userIDId" character varying`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_844be48894e2e74651e02abd825" FOREIGN KEY ("userIDId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
