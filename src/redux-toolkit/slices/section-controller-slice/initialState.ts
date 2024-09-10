import { ISection, sections } from "../../../utils/globalInfo";
import { NavMenuModel } from "../../../models/NavMenuModel";

export interface IControllerSectionState {
  sections: ISection[];
  ActiveId: string;
  sectionIdList: string[];
}

export const initStateFcn = (): IControllerSectionState => {
  
  const { secIdList, activeId } = NavMenuModel.GetMainInfofromISectionArray(sections);

  // TODO: DEBUGING - DELETE OR COMMENT
  // console.log(secIdList, activeId);

  return { sections , ActiveId: activeId, sectionIdList: secIdList };
};
