import { styled } from '@co-design/styled'

const DoorWrapper = styled.div`
  position: absolute;
  max-width: 90%;
  width: 600px;
  min-height: 400px;
  max-height: 600px;
  /* height: 600px; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  // border-radius: 4px;
  transition: all 0.2s ease-in;

  .backlight {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 1;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }

  .side {
    position: absolute;
    width: 0;
    height: 0;
    // background-color: white;
    background: linear-gradient(#446 0%, #fff 50%, #446 100%);
    // background: linear-gradient(#7e0fff 0%, #0fffc1 50%, #7e0fff 100%);
    box-shadow: 0 0 5px #446, 0 0 15px #668;
  }
  .side1 {
    right: 0;
    bottom: 0;
    width: 1px;
    height: 100%;
    z-index: 10;
  }
  .side2 {
    right: 0;
    top: 0;
    height: 1px;
    width: 100%;
    z-index: 10;
  }
  .side3 {
    left: 0;
    top: 0;
    height: 100%;
    width: 1px;
    bottom: 0;
    z-index: 10;
  }
  .side4 {
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    z-index: 10;
  }

  .door {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: #151823;
    transform-origin: 100% 50%;
    z-index: 20;
    // cursor: grab;
    // overflow: hidden;

    .background {
      position: relative;
      width: 100%;
      height: 100%;
      opacity: 1;
      background-color: #0e1014;
    }
  }
`

const AnimatedDoor = ({ children }) => {
  return (
    <DoorWrapper>
      <div className="side side1" />
      <div className="side side2" />
      <div className="side side3" />
      <div className="side side4" />
      <div className="door">
        <div className="background">{children}</div>
      </div>
    </DoorWrapper>
  )
}

export default AnimatedDoor
