// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Posts, Match, User } = initSchema(schema);

export {
  Posts,
  Match,
  User
};