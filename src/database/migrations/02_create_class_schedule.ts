import Knex from 'knex';

// Faz as alterações no banco 
export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();
        
        // Gerando uma fk na tabela class_shedule que receberá o id da tabela classes
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

// Desfaz se deu merda 
export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}