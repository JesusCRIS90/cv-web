import { IWheelEventData } from "../interfaces/interfaces";

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
