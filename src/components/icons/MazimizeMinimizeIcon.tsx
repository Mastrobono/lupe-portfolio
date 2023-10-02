import UseAnimations from "react-useanimations";
import maximizeMinimize from "react-useanimations/lib/maximizeMinimize";
import styles from "@/styles/gallery.module.scss";

const RenderMaximizeMinimizeIcon = (lightboxIndex: number) => (
  <UseAnimations
    className={styles.expandIcon}
    animation={maximizeMinimize}
    strokeColor="#fff"
    fillColor="#fff"
    size={48}
    reverse={lightboxIndex !== -1}
  />
);

export default RenderMaximizeMinimizeIcon;
