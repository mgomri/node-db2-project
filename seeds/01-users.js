
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN:'1GNGC26RXXJ407648', 
          make:'Chevrolet', 
          model:'Suburban',
          milage:178211,
          transmission:'automatic',
          title:'clear'
        },
        {
          VIN:'JA3AP57J5SY000719',
          make:'Mitsubishi', 
          model:'Diamante',
          milage:178211,
          transmission:'automatic',
          title:'clear'
        },

        {
          VIN:'JN8AZ28R49T122921',
          make:'Nissan', 
          model:'Cube',
          milage:178211,
          transmission:'standard',
          title:'clear'
        }
      ]);
    });
};
