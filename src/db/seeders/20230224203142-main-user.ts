import { QueryInterface } from 'sequelize';
import { Group } from '../models/group.model';
import { Role } from '../models/role.model';

module.exports = {
  async up(queryInterface: QueryInterface) {
    const date = new Date();

    const role: Partial<Role> = (
      await queryInterface.select(null, 'roles', {
        where: { name: 'Admin' },
      })
    )[0];

    await queryInterface.bulkInsert('groups', [
      {
        name: 'Main',
        createdAt: date,
        updatedAt: date,
      },
    ]);
    const group: Partial<Group> = (
      await queryInterface.select(null, 'groups', {
        where: { name: 'Main' },
      })
    )[0];

    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        email: 'admin@marqueesemi.com',
        roleId: role.id,
        groupId: group.id,
        // TODO UPDATE PASSWORD
        password: '1234',
        createdAt: date,
        updatedAt: date,
      },
    ]);
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete(
      'users',
      { email: 'admin@marqueesemi.com' },
      {},
    );

    await queryInterface.bulkDelete(
      'roles',
      {
        name: ['Admin', 'User', 'Viewer'],
      },
      {},
    );
    await queryInterface.bulkDelete(
      'groups',
      {
        name: 'Main',
      },
      {},
    );
  },
};
