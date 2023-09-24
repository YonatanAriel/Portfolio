import styles from "./style.module.css";

function BackgroundVideo({ embedId }) {
  // const videoScale =
  return (
    <div className={styles.videoResponsive}>
      <iframe
        width="853"
        height="480"
        loop={1}
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
       allowFullScreen // title="
        Embedded
        autoplay={1}
        controls={0}
      />
    </div>
  );
}

export default BackgroundVideo;
