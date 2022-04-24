import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { Container } from "./style";

interface Developer {
  id: number;
  nome: string;
  sexo: string;
  data_nascimento: string;
  hobby: string;
  created_at: string;
}

export function DevelopersTable() {
  const [developers, setDevelopers] = useState<Developer[]>([]);

  useEffect(() => {
    api.get('desenvolvedores')
      .then(({ data }) => setDevelopers(data.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Data Nascimento</th>
            <th>Hobby</th>
            <th>Desde</th>
          </tr>
        </thead>

        <tbody>
          {developers.map(developer => (
            <tr key={developer.id}>
              <td>{developer.nome}</td>
              <td>{developer.sexo}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(developer.data_nascimento)
              )}</td>
              <td>{developer.hobby}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(developer.created_at)
              )}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
