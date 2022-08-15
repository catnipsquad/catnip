import { styled } from "@co-design/styled";

const DoorWrapper = styled.div`
  position: absolute;
  width: 600px;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  // border-radius: 4px;
  transition: all .2s ease-in;

  .backlight {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: fadeIn .8s ease-in-out 2.2s forwards;

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
    animation: drawSide1 .5s ease-in-out forwards;
    z-index: 10;
  }
  .side2 {
    right: 0;
    top: 0;
    animation: drawSide2 .5s ease-in-out .5s forwards;
    z-index: 10;
  }
  .side3 {
    left: 0;
    top: 0;
    animation: drawSide3 .5s ease-in-out 1s forwards;
    z-index: 10;
  }
  .side4 {
    left: 0;
    bottom: 0;
    animation: drawSide4 .5s ease-in-out 1.5s forwards;
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
      opacity: 0;
      background-color: #0e1014;
      animation: fadeIn 0.3s ease-out 2s forwards;

      // img {
      //   position: relative;
      //   top: 50%;
      //   width: 70%;
      //   height: 70%;
      //   transform: translateY(-50%);
      //   opacity: 0;
      //   animation: fadeIn 0.8s ease-out 2.2s forwards, fadeOut 0.5s ease-out 5.2s forwards;
      // }
    }

    @keyframes showBackground {
      0% {
        transform: scale(.5, .5);
        opacity: 0;
      }
      100% {
        transform: scale(1, 1);
        opacity: 1;
      }
    }
  }

  @keyframes drawSide1 {
    from {
      width: 1px;
      height: 0;
    }
    to {
      width: 1px;
      height: 100%;
    }
  }

  @keyframes drawSide2 {
    from {
      height: 1px;
      width: 0;
    }
    to {
      height: 1px;
      width: 100%;
    }
  }

  @keyframes drawSide3 {
    from {
      height: 0;
      width: 1px;
    }
    to {
      height: 100%;
      width: 1px;
      bottom: 0;
    }
  }

  @keyframes drawSide4 {
    from {
      height: 1px;
      width: 0;
    }
    to {
      height: 1px;
      width: 100%;
    }
  }
`

const Door = ({ children }) => {
  return (
    <DoorWrapper>
      <div className="side side1" />
      <div className="side side2" />
      <div className="side side3" />
      <div className="side side4" />
      <div className="door">
        <div className="background">
          {children}
        </div>
      </div>
    </DoorWrapper>
  )
}

export default Door;