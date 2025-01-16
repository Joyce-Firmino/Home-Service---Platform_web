import foto from '../../assets/pedreiro.webp';
import { Bloco, Image, Container, Icon, IconText, Service, SubContainer, Title, Text } from './styled';

interface CustomCardProps {
  uriFoto: string;
  prestador: string;
  servico: string;
  city: string;
  telefone: string;
  email: string;
}

export function CardPrestador({ prestador, servico, city, telefone, email }: CustomCardProps) {
  return (
    <Container>
      <SubContainer>
        <Image src={foto} alt="Foto perfil" />
        <Title>{prestador}</Title>
        <Service>{servico}</Service>
        <Bloco>
          <IconText>
            <Icon>location_on</Icon>
            <Text>{city}</Text>
          </IconText>
          <IconText>
            <Icon>call</Icon>
            <Text>{telefone}</Text>
          </IconText>
          <IconText>
            <Icon>mail</Icon>
            <Text>{email}</Text>
          </IconText>
        </Bloco>
      </SubContainer>
    </Container>
  );
}
