// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const VaccinationStatus = {
  "VACCINATED": "VACCINATED",
  "UNVACCINATED": "UNVACCINATED"
};

const { Match, User } = initSchema(schema);

export {
  Match,
  User,
  VaccinationStatus
};