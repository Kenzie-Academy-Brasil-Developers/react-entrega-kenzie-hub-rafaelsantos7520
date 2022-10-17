import { Container } from './index';

export const Link = ({ variant, children,rota }) => (
  <Container to={rota} variant={variant}>
    {children}
  </Container>
);

