import { Sequelize } from 'sequelize-typescript';
import { db_host, db_name, db_password, db_user } from '../config';
import { Group } from './models/group.model';
import { ProjectPermission } from './models/permission.model';
import { Project } from './models/project.model';
import { Role } from './models/role.model';
import { SharedProject } from './models/shared-projects';
import { User } from './models/user.model.';

const connection = new Sequelize({
  dialect: 'postgres',
  host: db_host,
  username: db_user,
  password: db_password,
  database: db_name,
  logging: false, // allow logging later
  models: [User, Project, Role, SharedProject, Group, ProjectPermission], // include models
});

export default connection;
