import Knex from 'knex';

// Faz as alterações no banco 
export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        // Gerando uma fk na tabela connections que receberá o id da tabela users
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();    
    });
}

// Desfaz se deu merda 
export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}