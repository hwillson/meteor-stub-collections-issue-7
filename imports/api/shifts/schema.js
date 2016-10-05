import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const ShiftSchema = new SimpleSchema({
  start: {
    type: Date
  },
  finish: {
    type: Date
  },
  company: {
    type: CompanySchema
  },
  state: {
    type: StateSchema,
    optional: true
  }
});

const CompanySchema = new SimpleSchema({
  shiftId: {
    type: Number,
    label: "Shift Id",
    optional: true
  },
  unitId: {
    type: Number,
    label: "Unit Id"
  },
  jobId: {
    type: Number,
    label: "Job Id",
    optional: true
  },
  personId: {
    type: Number,
    label: "Person Id",
    optional: true
  }
});

const StateSchema = new SimpleSchema({
  geo_confirmed: {
    type: Boolean,
    label: "The user was confirmed as being at the unit",
    defaultValue: false
  },
  django_has_it: {
    type: Boolean,
    label: "Is this shift stored on django",
    defaultValue: false
  },
  status: {
    type: Number,
    label: "Status of the shift state",
    defaultValue: 2
  },
  group_time: {
    type: Boolean,
    label: "Shift was generated in group time mode",
    defaultValue: false,
    optional: true
  }
});

export default ShiftSchema;
