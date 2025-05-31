import { createPortal } from "react-dom";
import SubscribeElement from "./SubscribeElement";

const Subscribe = () => {
  const portalRoot = document.getElementById("portal");

  if (!portalRoot) return null;
  return createPortal(
    <SubscribeElement />,
    document.getElementById("portal") as HTMLElement
  );
};

export default Subscribe;
