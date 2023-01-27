import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674841990931 implements MigrationInterface {
    name = 'default1674841990931'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD "userIdId" character varying`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "userIDId" character varying`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "categoryIDId" character varying`);
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "transact_date" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_9649d9a071c23fbb66d0b67b339" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_844be48894e2e74651e02abd825" FOREIGN KEY ("userIDId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_ef754cb95d97bd368a0b52adfb0" FOREIGN KEY ("categoryIDId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_ef754cb95d97bd368a0b52adfb0"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_844be48894e2e74651e02abd825"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_9649d9a071c23fbb66d0b67b339"`);
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "transact_date" SET DEFAULT '2023-01-27 15:06:58.539075'`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "categoryIDId"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "userIDId"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "userIdId"`);
    }

}
