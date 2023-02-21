import React from 'react';
import HomeStyled from './HomeStyled';
import imgJob from '../../imgs/img01.PNG';
import datasJobs from '../../data/datasJobs';
import Articles from '../../components/Article/Articles';

const Home = () => {
    const {datas} = datasJobs();

    
  return (
    <HomeStyled>
        
        <article className='info-section'>
            <h1>Guia<span>Online</span></h1>
            <h2>De <span>Empregos</span></h2>

            <p>
                Procurar emprego ficou mais fácil,
                aqui nós te direcionamos para agências de Empregos
                aumentando a sua possibilidade de conseguir sua tão sonhada
                vaga de emprego, compartilhe com amigos e familiares.
            </p>
        </article>

        <section className='container-jobs-links'>

            <div className="container-title">
                <h2>Sites de</h2>
                <h2><span>Empregos</span></h2>
            </div>
            
            <dl>
                {
                    datas && (
                        datas.map((data, index) => (
                            <div key={index}>
                                <dt>{data.name}</dt>
                                <dd>
                                    <a href={data.path} target="_blank" rel="noopener noreferrer">{data.site}</a>
                                </dd>
                            </div>
                        ))
                    )
                }
            </dl>

        </section>
        
        <Articles/>    
                
    </HomeStyled>
  )
}

export default Home
