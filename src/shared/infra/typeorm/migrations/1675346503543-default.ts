import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675346503543 implements MigrationInterface {
    name = 'default1675346503543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" character varying NOT NULL, "name" character varying NOT NULL, "userId" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userIdId" character varying, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" character varying NOT NULL, "value" double precision NOT NULL, "type" text NOT NULL, "transact_date" TIMESTAMP NOT NULL DEFAULT 'now()', "userID" character varying NOT NULL, "categoryID" text, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "userIDId" character varying, "categoryIDId" character varying, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_9649d9a071c23fbb66d0b67b339" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_844be48894e2e74651e02abd825" FOREIGN KEY ("userIDId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_ef754cb95d97bd368a0b52adfb0" FOREIGN KEY ("categoryIDId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_ef754cb95d97bd368a0b52adfb0"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_844be48894e2e74651e02abd825"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_9649d9a071c23fbb66d0b67b339"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
