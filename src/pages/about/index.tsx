import React from 'react';
import Badge from 'react-bootstrap/Badge';


class about extends React.Component {
  render() {
    return (
      <div>
        <Badge pill bg="primary">
        <h1>About</h1>
        </Badge>
        
        <p>
        Bem vindo(a) ao F-BOAT F-BOAT PROJETO Projeto da UFF desenvolve barco inteligente que monitora as águas na Baía de Guanabara

        De acordo com o Instituto Estadual do Meio Ambiente do Rio de Janeiro (INEA-RJ), a crescente pressão sobre os recursos hídricos, 
        além do aumento e da diversidade das fontes de poluição, torna o acompanhamento das alterações da qualidade das águas cada vez mais necessário. 
        Esse monitoramento é feito para subsidiar ações de proteção e recuperação, visando garantir os usos atuais e futuros. Os dados provenientes do 
        monitoramento são a base para a avaliação da qualidade das águas e para a produção de relatórios, diagnósticos e boletins sobre as condições dos corpos hídricos.

        Com o intuito de colaborar na atenção dessa demanda ambiental, um grupo de pesquisadores da Universidade Federal Fluminense se destaca trazendo 
        mais tecnologia para o processo de acompanhamento da qualidade dos recursos hídricos no estado do Rio de Janeiro. Alunos e docentes dos Departamentos
         de Engenharia Elétrica (TEE-UFF), Engenharia de Recursos Hídricos e Meio Ambiente (TGH-UFF), e do Instituto de Computação (IC-UFF), estão desenvolvendo 
         em conjunto uma embarcação autônoma para monitoramento da água das baías e lagoas de Niterói. A iniciativa também tem apoio financeiro da 
         Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do Rio de Janeiro (FAPERJ) e conta com a parceria da Universidade Federal do Rio Grande do Norte (UFRN)
          e da empresa NVIDIA, líder mundial em soluções de Inteligência Artificial e sistemas computacionais de alto desempenho embarcado.
        </p>
      
      </div>
    );
  }
}

export default about;