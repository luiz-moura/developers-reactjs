import logoImg from '../../assets/logo.svg';

import { Container, Content } from './style';

interface HeaderProps {
  onOpenNewDeveloperModal: () => void;
}

export function Header({ onOpenNewDeveloperModal }: HeaderProps ) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Desafio developers" />
        <button type="button" onClick={onOpenNewDeveloperModal}>
          Cadastrar dev
        </button>
      </Content>
    </Container>
  );
}
