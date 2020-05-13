const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
   insert,
   find,
   findById,
   update,
   remove,
};

function find() {
    return db('cars');
}

function findById(id) {
    return db('cars')
        .where({ id: Number(id)})
}

function insert(car){
    return db('cars')
        .insert(car, 'id')
        .then(ids => ({ id: ids[0] }));
}

function update(id, car) {
    return db('cars')
        .where('id', Number(id))
        .update(car);
};

function remove(id) {
    return db('cars')
        .where('id', Number(id))
        .del();
}   