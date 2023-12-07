import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./HorizontalScrollSimple.module.css";

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScrollSimple: React.FC<HorizontalScrollProps> = ({
  children,
}) => {
  return <div className={`${styles.horizontalScrollWrapper} `}>{children}</div>;
};

export default HorizontalScrollSimple;
