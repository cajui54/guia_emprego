import React from 'react'
import ArticleStyled from './ArticleStyled'

const Articles = () => {
  return (
    <ArticleStyled>
        <h1>
            <span>Redes Sociais para encontrar vagas de emprego.</span>
        </h1>

        <section>
            <h2>Linkedin.</h2>
            <p>Da Microsoft, o <a href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect" target="_blank" rel="noopener noreferrer">LinkedIn</a> é a principal rede social quando se pensa em vagas de emprego ou networking. Oportunidades podem ser publicadas diretamente pela plataforma, mas vale ficar atento às postagens de outros usuários por lá, quais podem indicar uma nova posição aberta na empresa em que trabalham.</p>
        </section>

        <section>
            <h2>beBee.</h2>
            <p>Similar ao LinkedIn, a <a href="https://www.bebee.com/" target="_blank" rel="noopener noreferrer">bebee.com</a> se define como uma rede de marca pessoal, para que profissionais de promovam diante de recrutadores e também criem uma rede de contatos. Há o chamado “colmeias”, quais funcionam como comunidades e nichos para reunir usuários em um mesmo assunto ou categoria. Apesar do aspecto social, vagas também podem ser encontradas publicadas na beBee.</p>
        </section>


        <section>
            <h2>Indeed.</h2>
            <p>Um dos mais populares, o <a href="https://br.indeed.com/?from=gnav-homepage" target="_blank" rel="noopener noreferrer">Indeed.com.br</a> reúne cerca de 250 milhões de visitas mensais. Também não há nenhum custo para o candidato que cadastra o currículo e procura emprego na plataforma.

            Um ponto interessante da busca é que ela reconhece vagas similares. Então, mesmo que você digite alguma posição, pode aparecer outras sugestões, como jornalista e assessor de imprensa, por exemplo.

            Também há um comparador de salários, o qual exibe um máximo e mínimo para um determinado cargo. Os dados são fornecidos por terceiros ao Indeed e são “aproximados”, de acordo com a plataforma. Pode ser uma ferramenta para negociação na hora da contratação</p>
        </section>
    </ArticleStyled>
  )
}

export default Articles