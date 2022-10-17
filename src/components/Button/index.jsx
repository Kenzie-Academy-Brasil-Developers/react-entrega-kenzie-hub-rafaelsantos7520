import { Container } from './index';

export const Button = ({ variant, onClick, type, children }) => (
  <Container variant={variant} type={type} onClick={onClick}>
    {children}
  </Container>
);

