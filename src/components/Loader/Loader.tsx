import styles from "./Loader.module.css";

export const Loader = () => (
  <div
    className={`${styles["arcade-loader"]} content flex h-full w-full items-center justify-center`}
  >
    <span className="text-2xl">Loading...</span>
  </div>
);
