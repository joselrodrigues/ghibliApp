export interface Dispatch {
  (action: object): void;
}

export interface Action {
  type: string;
  payload: any;
}
