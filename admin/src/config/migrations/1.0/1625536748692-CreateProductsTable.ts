import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateProductsTable1625536748692 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
         name: 'product',
         columns: [
            {
               name: 'id',
               type: 'int',
               isPrimary: true,
               isGenerated: true,
               generationStrategy: 'increment'
            },
            {
               name: 'title',
               type: 'varchar',
               isNullable: false
            },
            {
               name: 'image',
               type: 'varchar',
               isNullable: false
            },
            {
               name: 'likes',
               type: 'integer',
               default: 0,
               isNullable: true
            }
         ]
      }))

   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('products')
   }

}
