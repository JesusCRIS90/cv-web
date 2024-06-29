// Logic
import { ActIncrement } from "../../redux-toolkit/slices/test-counter-slice/slicer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux-toolkit/store/store-hooks";

// Assets
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

// CSS Styles
import style from "./ViteExPage.module.css";

export function ViteExPage() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function onClickIncrementHandler(incrementBy: number) {
    dispatch(ActIncrement(incrementBy));
  }

  return (
    <div className={style["vite-ex-page"]}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={style["logo"]} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={`${style["logo"]} ${style["react"]}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={style["card"]}>
        <button onClick={() => onClickIncrementHandler(1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={style["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
