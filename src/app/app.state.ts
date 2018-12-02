import { Thing } from './models/thing.model';

export interface AppState {
  readonly thing: Thing[];
}