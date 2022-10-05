import styles from "./Loader.module.css";

export const Loader = () => (
  <div className={"content flex h-full w-full items-center justify-center"}>
    <span className={`${styles["arcade-loader"]} z-10 text-2xl`}>Loading</span>
  </div>
);
