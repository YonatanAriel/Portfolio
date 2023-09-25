import styles from "./style.module.css";

function BackgroundVideo({ embedId }) {
  return (
    <div className={styles.videoResponsive}>
      <div className={styles.backgroundColor}></div>
      <iframe
        width="853"
        height="480"
        loop={1}
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
        allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media;
       allowFullScreen // title="
        Embedded
        autoplay={1}
        controls={0}
      />
    </div>
  );
}

export default BackgroundVideo;
