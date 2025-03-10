import "aframe";
import "ar.js";

const WebARScene = ({ events }) => {
  return (
    <a-scene embedded arjs>
      {events.map((event, index) => (
        <a-marker key={index} preset="hiro">
          <a-plane position="0 0.5 0" height="1" width="3" material="color: yellow"></a-plane>
          <a-text
            value={`${event.year}: ${event.title}`}
            position="-1 1 -3"
            color="blue"
            align="center"
          ></a-text>
        </a-marker>
      ))}
      <a-camera position="0 1.6 0"></a-camera>
    </a-scene>
  );
};

export default WebARScene;