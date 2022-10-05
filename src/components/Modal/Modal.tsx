import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const rootElement = document.querySelector("#portal") as HTMLElement;

interface IModalProps {
  children?: React.ReactNode;
}

export const Modal = ({ children }: IModalProps) => {
  const element = useRef(document.createElement("div"));
  useEffect(() => {
    const current = element.current;
    if (rootElement) rootElement.appendChild(current);
    return () => {
      if (rootElement) void rootElement.removeChild(current);
    };
  }, []);
  return createPortal(children, element.current);
};
