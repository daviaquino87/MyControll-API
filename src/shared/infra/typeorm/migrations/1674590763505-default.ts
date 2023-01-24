import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674590763505 implements MigrationInterface {
    name = 'default1674590763505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ADD "userIDId" character varying`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birth_date"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birth_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_844be48894e2e74651e02abd825" FOREIGN KEY ("userIDId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_844be48894e2e74651e02abd825"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birth_date"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birth_date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "userIDId"`);
    }

}
