type IBackgroundTiltProps = {
  tiltAngle: string;
  myClass: string;
};

const BackgroundTilt = (props: IBackgroundTiltProps) => (
  <div
    className={`h-full ${props.myClass} bg-gradient-to-l from-[red-900] via-green-700 to-blue-800 ${props.tiltAngle} absolute  left-0 z-[-1] h-[100vh] w-[100vw] origin-right`}
  />
);

export { BackgroundTilt };
