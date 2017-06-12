import { Mongo } from 'meteor/mongo';
import schema from '../schemas/entity';

const Entities = new Mongo.Collection('entities');
Entities.attachSchema(schema);

export default Entities;
