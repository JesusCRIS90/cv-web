// import { useEffect } from "react";
// import useForceRender from "./useForceRender";
// import { useDispatch } from "react-redux";
// import { useAppSelector } from "../redux-toolkit/store/store-hooks";
// import { InWhichSectionAmI2 } from "../utils/utilities";
// import { AUpdateCurrentSection } from "../redux-toolkit/slices/section-controller-slice/slicer";

// const useYScrollController = (addScrollerListener: boolean = false) => {
//   const forceRender = useForceRender();

//   const dispatch = useDispatch();
//   const reduxSections = useAppSelector((state) => state.sections.sections);

//   const calcutateSection = (): string => {
//     return InWhichSectionAmI2();
//   };

//   const updateSectionLogic = (secId: string) => {
//     dispatch(AUpdateCurrentSection(secId));
//   };

//   const updateSectionRender = () => {
//     forceRender();
//   };

//   if (addScrollerListener) {
//     const handleScroll = () => {
//       updateSectionLogic(calcutateSection());
//       updateSectionRender();
//     };

//     useEffect(() => {
//       window.addEventListener("scroll", handleScroll);
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }, []);
//   }

//   return {
//     reduxSections,
//     calcutateSection,
//     updateSectionLogic,
//     updateSectionRender,
//   };
// };

// export default useYScrollController;
