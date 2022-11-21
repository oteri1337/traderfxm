const crypto = require("crypto");

("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "admins",
      [
        {
          email: "admin@admin.com",
          password: crypto
            .createHash("md5")
            .update("adminpassword1337")
            .digest("hex"),
          first_name: "First Name",
          last_name: "Last Name",
          pin: 12345,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("admins", null, {});
  },
};
