export interface ICounterState {
  value: number;
  clicks: number;
}

export const initStateFcn = (): ICounterState => {
  return {
    value: 0,
    clicks: 0,
  };
};
