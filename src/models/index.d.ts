import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MatchMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Posts {
  readonly id: string;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Posts, PostsMetaData>);
  static copyOf(source: Posts, mutator: (draft: MutableModel<Posts, PostsMetaData>) => MutableModel<Posts, PostsMetaData> | void): Posts;
}

export declare class Match {
  readonly id: string;
  readonly User1?: User | null;
  readonly User2?: User | null;
  readonly User1Id: string;
  readonly User1ID?: string | null;
  readonly isMatch: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchUser1Id?: string | null;
  readonly matchUser2Id?: string | null;
  constructor(init: ModelInit<Match, MatchMetaData>);
  static copyOf(source: Match, mutator: (draft: MutableModel<Match, MatchMetaData>) => MutableModel<Match, MatchMetaData> | void): Match;
}

export declare class User {
  readonly id: string;
  readonly name?: string | null;
  readonly birthday?: string | null;
  readonly age?: number | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly enableNotifs?: boolean | null;
  readonly mentor?: boolean | null;
  readonly mentee?: boolean | null;
  readonly lookingFor?: (string | null)[] | null;
  readonly gender?: string | null;
  readonly pronouns?: string | null;
  readonly disability?: boolean | null;
  readonly disabilityVisible?: boolean | null;
  readonly ethnicity?: (string | null)[] | null;
  readonly ethnicityVisible?: boolean | null;
  readonly sexuality?: (string | null)[] | null;
  readonly sexualityVisible?: boolean | null;
  readonly bio?: string | null;
  readonly myInterest?: (string | null)[] | null;
  readonly testimonials?: (string | null)[] | null;
  readonly industry?: (string | null)[] | null;
  readonly occupation?: (string | null)[] | null;
  readonly education?: (string | null)[] | null;
  readonly yearsOfExperience?: number | null;
  readonly VaccinationStatus?: string | null;
  readonly Org?: boolean | null;
  readonly OrgName?: string | null;
  readonly followList?: (string | null)[] | null;
  readonly pictures?: (string | null)[] | null;
  readonly profilePic?: string | null;
  readonly both?: boolean | null;
  readonly interests?: (string | null)[] | null;
  readonly inclusionSurvery?: string | null;
  readonly InclusivityAgreement?: boolean | null;
  readonly sub: string;
  readonly premium?: boolean | null;
  readonly freemium?: boolean | null;
  readonly active?: boolean | null;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}