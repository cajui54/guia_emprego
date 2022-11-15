import React from 'react';
import MainStyled from './mainStyled';
import logoImg from '../imgs/draw.png';
import Article from './Main/Article';
import Weather from './Weather/Weather'

const Main = () => {
    const companys = [
        {name: 'Vigel', path: 'https://vigelserv.com.br/web/'},
        {name: 'Rheferência', path: 'http://www.rheferencia.com.br/'},
        {name: 'GMS', path: 'https://gmsservicos.com.br/'},
        {name: 'O Amarelinho', path: 'https://noticias.oamarelinho.com.br/category/guia-de-empregos/'},
        {name: 'Global', path: 'https://www.globalempregos.com.br/'},
        {name: 'Vagas', path: 'https://www.vagas.com.br/'},
        {name: 'InfoJobs', path: 'https://www.infojobs.com.br/'},
        {name: 'Nube', path: 'https://www.nube.com.br/'},
        {name: 'Empregos.com.br', path: 'https://www.empregos.com.br/?Origem=L532&gclid=Cj0KCQjwjvaYBhDlARIsAO8PkE1bi_eVkrZ3D_iQUk4KLkXW-XiFiYijXAHaAAPKtf64Xi1IRbUZfrcaAmr7EALw_wcB'},
    ];
  return (
    <MainStyled>
        <section className='container-bonus'>
            <Weather city='santo andre '/>
        </section>
        
        <section>
            <div className='container-titles'>
                <img src={logoImg} alt='mulher trabalhando'/>
                <div>
                    <h1>Agências de Empregos</h1>
                    <p>Guia de Empregos que direciona para agências de empregos, Links abaixo:</p>
                </div>
            </div>

            <dl>
                {
                    companys.map((company, index) => (
                        <div key={index}>
                            <dt >{company.name}</dt>
                            <dd>
                                <a href={company.path} target="_blank" rel="noreferrer">{company.path}</a>
                            </dd>
                        </div>
                    ))
                }

            </dl>
        </section>
        <Article/>

    </MainStyled>
  )
}

export default Main
