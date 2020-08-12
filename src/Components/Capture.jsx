import React, { createRef, useRef, useState } from "react";
import TopNavigation from "./TopNavigation"; 
import Webcam from "react-webcam";
import { Button} from '@material-ui/core';



const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};
 
const Capture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();

      setImgSrc(imageSrc);
    },
    [webcamRef]
  );
 
  return (
    <>
     <TopNavigation />
            <h1>Capture Shot</h1>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      
      <Button variant="contained" color="primary" onClick={capture}>
  Capture
</Button>
      {imgSrc && (
                <img
                    src={imgSrc}
                />
            )}
      
    </>
  );
};
export default Capture;