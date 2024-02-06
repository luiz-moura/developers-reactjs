import { FormEvent, useState, useEffect } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';

import { Container, DeveloperGenresContainer, RadioBox } from './style';
import { api } from '../../services/api';

interface NewDeveloperModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Nivel {
  id: number;
  nome: string;
}

export function NewDeveloperModal({ isOpen, onRequestClose }: NewDeveloperModalProps) {
  const [niveis, setNiveis] = useState<Nivel[]>([]);

  useEffect(() => {
    api.get('niveis').then(({ data }) => setNiveis(data.data));
  }, []);

  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('masculino');
  const [nivel, setNivel] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [hobby, setHobby] = useState('');

  function handleCreateNewDeveloper(event: FormEvent) {
    event.preventDefault();

    api.post('/desenvolvedores', {
      nome,
      data_nascimento: dataNascimento,
      nivel_id: nivel,
      sexo,
      hobby,
    });

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewDeveloper}>
        <h2>Cadastrar desenvolvedor</h2>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={event => setNome(event.target.value)}
        />

        <DeveloperGenresContainer>
          <RadioBox
            type="button"
            onClick={() => { setSexo('masculino') }}
            isActive={sexo === 'masculino'}
            activeColor="green"
          >
            <span>Masculino</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setSexo('feminino') }}
            isActive={sexo === 'feminino'}
            activeColor="red"
          >
            <span>Feminino</span>
          </RadioBox>
        </DeveloperGenresContainer>

        <input
          type="date"
          placeholder="Data de nascimento"
          value={dataNascimento}
          onChange={event => setDataNascimento(event.target.value)}
        />

        <select onChange={(e: any) => setNivel(e.target.value)}>
          {niveis.map((nivel) => (
            <option value={nivel.id} key={nivel.id}>{nivel.nome}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Hobby"
          value={hobby}
          onChange={event => setHobby(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
