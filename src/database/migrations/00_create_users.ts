import Knex from 'knex';

// Faz as alterações no banco 
export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

// Desfaz se deu merda 
export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}