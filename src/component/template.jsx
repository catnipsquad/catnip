import Background from "./background"
import AnimatedDoor from "./animated-door"
import Door from "./door"
import Stars from "./stars"

const Template = ({ children, animate = false }) => {
  return (
    <Background>
      <Stars />
      {animate ?
        <AnimatedDoor>{children}</AnimatedDoor> : 
        <Door>{children}</Door>
      }
    </Background>
  )
};

export default Template;