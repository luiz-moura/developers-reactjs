import logoImg from '../../assets/logo.svg';

import { Container, Content } from './style';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Gazin Tech" />
        <button type="button">
          Cadastrar dev
        </button>
      </Content>
    </Container>
  );
}
