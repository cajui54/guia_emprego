import React from 'react';
import {MdWorkHistory} from 'react-icons/md'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import HomeStyle from './Homes.style';
import datasJobs from '../../data/datasJobs';
import Hero from '../../components/Hero/Hero';
import Articles from '../../components/Article/Articles';
import Wrappers from '../../components/News/Wrappers';


const Home = () => {
    const {datas} = datasJobs();

  return (
    <HomeStyle>
        <Hero/>
        <article className='article-main'>
            <p>
                Procurar emprego ficou mais fácil,
                aqui nós te direcionamos para Sites de Empregos
                aumentando a sua possibilidade de conseguir sua tão sonhada
                vaga de emprego, compartilhe com amigos e familiares.
                acelere ainda mais a sua recolocação no mercado de trabalho
            </p>
        </article>
        
        <section className='container-jobs-links' id='siteJobs'>
            
        <amp-ad width="100vw" height="320"
            type="adsense"
            data-ad-client="ca-pub-7969741147484670"
            data-ad-slot="6029636663"
            data-auto-format="rspv"
            data-full-width="">
            <div overflow=""></div>
        </amp-ad>

            <div className="titles">
                <h2>Sites <span>de</span></h2>
                <h2><span>Empregos</span></h2>
            </div>

            <p className='text-info'>
                Separamos alguns sites de empregos, que valem apena você
                se cadastrar!
            </p>
            
            <dl>
                {
                <> 
                    <div>
                        <dt>
                            <MdWorkHistory className='icon-site'/>
                            {datas[0].name}
                        </dt>
                        <dd>
                            <a href={datas[0].path} target="_blank" rel="noopener noreferrer">{datas[0].site}</a>
                        </dd>
                    </div>

                    <div>
                        <dt>
                            <MdWorkHistory className='icon-site'/>
                            {datas[2].name}
                        </dt>
                        <dd>
                            <a href={datas[2].path} target="_blank" rel="noopener noreferrer">{datas[2].site}</a>
                        </dd>
                    </div>

                    <div>
                        <dt>
                            <MdWorkHistory className='icon-site'/>
                            {datas[3].name}
                        </dt>
                        <dd>
                            <a href={datas[3].path} target="_blank" rel="noopener noreferrer">{datas[3].site}</a>
                        </dd>
                    </div>
                </>
                }
            </dl>
                <Link className='btnLink' to={'/jobs'}>
                    <span><BsFillPlusCircleFill/></span>
                    Mais Sites
                </Link>
        </section>
        <Wrappers/>
        <Articles/> 
        
    </HomeStyle>
  )
}

export default Home
