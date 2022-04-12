import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum VaccinationStatus {
  VACCINATED = "VACCINATED",
  UNVACCINATED = "UNVACCINATED"
}



type MatchMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Match {
  readonly id: string;
  readonly User1?: User | null;
  readonly User2?: User | null;
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
  readonly ethnicity?: string | null;
  readonly ethnicityVisible?: boolean | null;
  readonly sexuality?: (string | null)[] | null;
  readonly sexualityVisible?: boolean | null;
  readonly bio?: string | null;
  readonly myInterest?: (string | null)[] | null;
  readonly testimonials?: string | null;
  readonly industry?: (string | null)[] | null;
  readonly occupation?: (string | null)[] | null;
  readonly education?: (string | null)[] | null;
  readonly yearsOfExperience?: number | null;
  readonly VaccinationStatus?: VaccinationStatus | keyof typeof VaccinationStatus | null;
  readonly Org?: boolean | null;
  readonly OrgName?: string | null;
  readonly followList?: string | null;
  readonly pictures?: (string | null)[] | null;
  readonly profilePic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}