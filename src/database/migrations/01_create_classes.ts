import Knex from 'knex';

// Faz as alterações no banco 
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();
        
        // Gerando uma fk na tabela classes que receberá o id da tabela users
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

// Desfaz se deu merda 
export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}