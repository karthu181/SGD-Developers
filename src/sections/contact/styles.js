import styled from "styled-components";
import { motion } from "framer-motion";
import { fluidValues, respondTo } from "../../styles/helpers";

const StyledWrapper = styled(motion.div)`
  display: grid;
  place-items: left;
  text-align: left;
  margin-top: ${fluidValues(280, 1200, 120, 160)};
`;

const StyledParragraph = styled(motion.p)`
  max-width: 50rem; // 800px
`;

const StyledSubText = styled(motion.span)`
  display: block;
  padding-bottom: 1rem;

  ${respondTo.xl`
      padding-bottom: 0
  `}
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledLabel = styled.label`
  text-align: left;
  font: var(--fs-text-large) var(--font);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  height: 2.5rem;
  border-radius: 0.2rem;
  border: 1px solid var(--clr-dark-lighter);
`

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: 1px solid var(--clr-dark-lighter);
`

export { StyledWrapper, StyledParragraph, StyledSubText, StyledImg, StyledLabel, StyledInput, StyledTextArea };
