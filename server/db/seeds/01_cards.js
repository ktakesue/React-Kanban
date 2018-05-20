exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("card")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("card").insert([
        {
          title: "drink a potion",
          priority: "medium",
          status: "queue",
          created_by: "domo",
          assigned_to: "your mom"
        },
        {
          title: "eat some corn",
          priority: "high",
          status: "in-progress",
          created_by: "someone",
          assigned_to: "you"
        },
        {
          title: "die to elephants",
          priority: "low",
          status: "done",
          created_by: "God",
          assigned_to: "humans"
        }
      ]);
    });
};
