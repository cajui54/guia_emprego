import React from 'react';
import Articles from './articleStyled';

const Article = () => {
  return (
    <Articles>
    
     <section>
        <h2>Redes sociais para encontrar vagas de emprego</h2>

        <h3>1. Linkedin</h3>


        <p>
            Da Microsoft, o <a href="https://www.linkedin.com/feed/" target="_blank">LinkedIn</a>
            é a principal rede social quando se pensa em vagas de emprego ou networking. Oportunidades podem ser publicadas diretamente pela plataforma, mas vale ficar atento às postagens de outros usuários por lá, quais podem indicar uma nova   posição aberta na empresa em que trabalham.
        </p>
     </section>

     <section>

        <h3>2. beBee</h3>

        <p>
            Similar ao LinkedIn, a <a href="https://www.bebee.com/" target="_blank">bebee.com</a> se define como uma rede de marca pessoal, para que profissionais de promovam diante de recrutadores e também criem uma rede de contatos. Há o chamado “colmeias”, quais funcionam como comunidades e nichos para reunir usuários em um mesmo assunto ou categoria. Apesar do aspecto social, vagas também podem ser encontradas publicadas na beBee.
        </p>
     </section>

     <section>
        <h2>Sites e apps para buscar vagas de emprego</h2>

        <h3>1. Indeed</h3>
        <p>
            Um dos mais populares, o <a href="https://br.indeed.com/?from=gnav-homepage" target="_blank">Indeed.com.br</a> reúne cerca de 250 milhões de visitas mensais. Também não há nenhum custo para o candidato que cadastra o currículo e procura emprego na plataforma.
        </p>

        <p>
            Um ponto interessante da busca é que ela reconhece vagas similares. Então, mesmo que você digite alguma posição, pode aparecer outras sugestões, como   jornalista e assessor de imprensa, por exemplo.
        </p>

        <p>
            Também há um comparador de salários, o qual exibe um máximo e mínimo para um determinado cargo. Os dados são fornecidos por terceiros ao Indeed e são “aproximados”, de acordo com a plataforma. Pode ser uma ferramenta para negociação na hora da contratação
        </p>

     </section>

     <section>
        <h3>2. Vagas</h3>
        <p>
            O <a href="https://www.vagas.com.br/" target="_blank" rel="noopener noreferrer">vagas.com.br</a> descreve-se no próprio título. É um agregador de oportunidades cadastradas pelas empresas e que também faz todo o intermédio da comunicação entre a empresa e o profissional. É gratuito para o candidato e tem ferramentas para testes e entrevistas em vídeo direto pela plataforma.
        </p>
     </section>

    </Articles>
  )
}

export default Article
