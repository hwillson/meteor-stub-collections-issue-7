import { Mongo } from 'meteor/mongo';
import ShiftSchema from './schema';

const Shifts = new Mongo.Collection('shifts');
Shifts.attachSchema(ShiftSchema);

export default Shifts;
