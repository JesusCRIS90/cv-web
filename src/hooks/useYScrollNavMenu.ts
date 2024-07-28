import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux-toolkit/store/store-hooks";

import useForceRender from "./useForceRender";

import { AUpdateCurrentSection } from "../redux-toolkit/slices/section-controller-slice/slicer";

import { NavMenuModel } from "../models/NavMenuModel";

type StringList = string[];

const useYScrollNavMenu = (addScrollerListener: boolean = false) => {
    const forceRender = useForceRender();

    const dispatch = useDispatch();
    const reduxSections = useAppSelector((state) => state.sections.sections);

    const calcutateSection = (): string => {
        
        const reduxInfo = useAppSelector((state) => state.sections);
        const navMenuModelObject = NavMenuModel.fromReduxInfo(reduxInfo);
        navMenuModelObject.UpdateInWhichSectionAmI();
        
        return navMenuModelObject.GetActiveSectionId();
    };

    const getSectionIdList = (): StringList =>  {
        
        const reduxInfo = useAppSelector((state) => state.sections);
        const navMenuModelObject = NavMenuModel.fromReduxInfo(reduxInfo);
        
        return navMenuModelObject.GetSectionIdList();
    }

    const updateSectionLogic = (secId: string) => {
        dispatch(AUpdateCurrentSection(secId));
    };

    const updateSectionRender = () => {
        forceRender();
    };

    if (addScrollerListener) {
        
        const handleScroll = () => {
            updateSectionLogic(calcutateSection());
            updateSectionRender();
        };

        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);
    }

    return {
        reduxSections,
        getSectionIdList,
        updateSectionLogic,
        updateSectionRender,
    };
};

export default useYScrollNavMenu;