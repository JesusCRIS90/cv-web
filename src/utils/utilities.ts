import { IWheelEventData } from "../interfaces/interfaces";
import { GlobalStorage } from "./GlobalStorege";

interface ISectionYpos {
  sectionName: string;
  position: number;
}

export function CalculateYScroll(
  event: React.WheelEvent<HTMLElement>
): IWheelEventData {
  const wheelData = {
    pageX: event.pageX,
    pageY: event.pageY,
    ClientX: event.clientX,
    ClientY: event.clientY,
    YScroll:
      event.pageY - event.clientY + event.deltaY < 0
        ? 0
        : event.pageY - event.clientY + event.deltaY,
  };

  return wheelData;
}

export function InWhichSectionAmI(
  event: React.WheelEvent<HTMLElement>
): string {
  const wheelData = CalculateYScroll(event);
  const transitionPoints = CalculateYTransitionPoint();
  return GetCurrentSection(transitionPoints, wheelData.YScroll);
}

function GetSectionHeights(): Map<string, number> {
  const GStore = new GlobalStorage();
  const sectionHeight = new Map<string, number>();

  const listSection = GStore.getData("section-list") as Array<string>;
  // console.log(listSection);

  for (const item of listSection) {
    const height = document.getElementById(item)?.clientHeight;
    sectionHeight.set(item, Number(height));
  }

  return sectionHeight;
}

function CalculateYTransitionPoint(): Map<string, ISectionYpos> {
  let numericId = 0;
  let accumulate = 0;
  const transitionPoints = new Map<string, ISectionYpos>();

  const sectionWidths = GetSectionHeights();

  for (const entry of sectionWidths) {
    accumulate += entry[1];
    transitionPoints.set(String(numericId++), {
      sectionName: entry[0],
      position: accumulate,
    });
  }

  return transitionPoints;
}

function GetCurrentSection(
  transPoints: Map<string, ISectionYpos>,
  YScrollPos: number
): string {
  const DistanceArray = [];
  let distance = Number.MAX_VALUE;
  let ID = "None";

  for (const entry of transPoints) {
    DistanceArray.push(0.85 * entry[1].position - YScrollPos);
  }

  for (const element of DistanceArray) {
    if (element < 0) continue;
    if (element < distance) distance = element;
  }

  const posIndex = DistanceArray.findIndex((ele) => ele === distance);

  const secId = transPoints.get(String(posIndex))?.sectionName;

  if (secId === undefined) ID = "None";
  else ID = secId;
  // console.log(posIndex, secId);
  return ID;
}
