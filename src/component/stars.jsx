import { styled } from "@co-design/styled";

const Star = styled.div`
  background: white;
  box-shadow: 0 0 2px 1px blue;
  height: 2px;
  width: 2px;
  position: absolute;
  z-index: 0;
  opacity: .3;
  
  animation-name: twinkle;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  
  animation-delay: -${({ props }) => props.delay}s;
  top: ${({ props }) => props.top}vh;
  left: ${({ props }) => props.left}vw;

  @keyframes twinkle {
    5% { opacity: 1 }
    15% { opacity: .3 }
    68% { opacity: .3 }
    74% { opacity: 1 }
    78% { opacity: .3 }
  }
`;

const Stars = () => {
  return (
    <div>
      {Array.from(new Array(50), (_, k) => k).map(i => <Star delay={Math.random() * 20} top={Math.random() * 99} left={Math.random() * 99} key={i} />)}
    </div>
  )  
}

export default Stars;