import React from 'react';
import { Link } from 'react-router-dom';
import {FaGlobe} from 'react-icons/fa6'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import datasJobs from '../../data/datasJobs';
import { images } from '../../data/slideImages';
import JobsSection from './Jobs.style';
import HeroSection from '../../components/Hero/HeroSection';

const SectionJobs = () => {
    const {datas} = datasJobs();
    
  return (
    <JobsSection>
        <HeroSection img={images}/>

        <Link to='/' className='container-btn-back'>
            <div>
                <IoArrowBackCircleOutline/>
            </div>
            <span>Voltar</span>
        </Link>
        
       <div className="group-title">
            <h2> {datas.length} Sites de</h2>
            <h2><span>Empregos</span></h2>
            <p>Para você se cadastrar</p>

            <div className="container-jobs-sites">
                <p>clique nos link abaixo, para ser direcionados ao <span> site de Emprego</span></p>
                <dl>
                    {
                         datas && (
                            datas.map((site, index) => (
                                <div key={index}>
                                    <dt> <FaGlobe/> <span>{site.name}</span></dt>
                                    <dd>
                                       <a href={site.path} target='_blank'>
                                            {site.site}
                                        </a> 
                                    </dd>
                                </div>
                            ))
                         )
                    }
                </dl>
            </div>
        </div>

    </JobsSection>
  )
}

export default SectionJobs
