import { useCallback, useState } from "react";

const useForceRender = () => {
  const [, updateState] = useState({});
  const forceRender = useCallback(() => updateState({}), []);
  return forceRender;
};

export default useForceRender;
