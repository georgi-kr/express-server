import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('roles', [
      {
        name: 'Admin',
      },
      {
        name: 'User',
      },
      {
        name: 'Viewer',
      },
    ]);
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async down() {},
};
