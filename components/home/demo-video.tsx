export function DemoVideo() {
  return (
    <video
      width="600"
      height="340"
      className="pointer-events-none border-none	"
      controls
      preload="none"
      autoPlay
      loop
      muted
      playsInline
      style={{
        clipPath: "inset(3px)",
      }}
    >
      <source src="/create-prediction.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
