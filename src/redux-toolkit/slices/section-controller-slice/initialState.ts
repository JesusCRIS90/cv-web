import { ISection, sections } from "../../../utils/globalInfo";

export interface IControllerSectionState {
  sections: ISection[];
}

export const initStateFcn = (): IControllerSectionState => {
  return { sections };
};
