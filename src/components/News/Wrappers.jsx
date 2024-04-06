import { Link } from "react-router-dom"
import Wrapper from "./Wrapper.style"
import { FaComputer, FaComputerMouse, FaLaptopCode, FaUserTie} from "react-icons/fa6";
import  {AiOutlinePlus} from 'react-icons/ai'
import { CgWorkAlt } from 'react-icons/cg'

const Wrappers = () => {
  return (
    <Wrapper id='categoria'>
      <div className="titles">
            <h2>Vagas de</h2>
            <h2><span>Empregos</span></h2>
        </div>
        <p className="text-info">
            Algumas vagas de empregos para se cadastrar
        </p>
        
            <div className="container-jobs">
                <div className="card">
                    <div className="container-icon">
                    <FaComputer />
                    </div>

                    <h3>Desenvolvedor Backend</h3>
                    <p>Buscamos um(a) Desenvolvedor(a) Pleno especialista em backend, com sólida experiência em NodeJS e banco não relacional..</p>
                    <a href="https://carreirascsacademy.gupy.io/job/eyJqb2JJZCI6NjkyODE2MSwic291cmNlIjoiaW5kZWVkIn0=?jobBoardSource=indeed" target="_black">
                        <AiOutlinePlus className='icons-plus' />
                        Participar
                    </a>
                    
                </div>

                <div className="card">
                    <div className="container-icon">
                        <FaComputerMouse/>
                    </div>
                    <h3>Desenvolvedor de Software</h3>
                    <p>As a Senior Software Developer at MYG, you will play a pivotal role in designing, developing, and maintaining high-quality software solutions that meet...</p>
                    <a href="https://www.glassdoor.com/Job/s%C3%A3o-paulo-s%C3%A3o-paulo-non-title-jobs-SRCH_IL.0,19_IC2479061_KO20,29.htm?ja=273964005&uvk=yaOikok:bqwVox1fXitTUzD95vHXA&utm_medium=email&utm_source=jobalert&utm_campaign=jobAlertAlert&utm_content=ja-ja-alljobs-JACTABOTTOM" target="_black">
                        <AiOutlinePlus className='icons-plus' />
                        Participar
                    </a>
                    
                </div>

                <div className="card">
                    <div className="container-icon">
                        <FaLaptopCode/>
                    </div>
                    <h3>Front-End Manager</h3>
                    <p>Do you see front-end development as more than just solving back-end technical issues and instead view it as creating a unique user experience?</p>
                    <a href="https://careers.westernunion.com/job-details/19312872/front-end-engineering-manager-s-o-paulo-br/?rx_a=1&rx_c=laca---front-end-engineering-manager&rx_ch=jobp4p&rx_group=354203&rx_job=JR0117205&rx_medium=cpc&rx_r=none&rx_source=Indeed&rx_ts=20240405T200623Z&rx_vp=cpc&source=APPLICANT_SOURCE-3-153&utm_medium=job_posting&utm_source=indeed.com&utm_term=indeed_sponsored&rx_p=7QBID3PYLA&rx_viewer=708bf336f3a411ee8a6f5b5031395b113a309a901e3346f3bce2775cdaec3b64" target="_black">
                        <AiOutlinePlus className='icons-plus' />
                        Participar
                    </a>
                    
                </div>

                <div className="card">
                    <div className="container-icon">
                        <CgWorkAlt/>
                    </div>
                    <h3> Developer Analyst</h3>
                    <p>Participar do time de desenvolvimento de software, visando prover soluções com alta qualidade e confiabilidade; Participar de equipes multifuncionais</p>
                    <a href="https://topazbrasil.gupy.io/job/eyJqb2JJZCI6NjQ5ODYyNCwic291cmNlIjoiaW5kZWVkIn0=?jobBoardSource=indeed" target="_black">
                        <AiOutlinePlus className='icons-plus' />
                        Participar
                    </a>
                </div>

                <div className="card">
                    <div className="container-icon">
                        <FaUserTie />
                    </div>
                    <h3> Pessoa Desenvolvedora Fullstack</h3>
                    <p>Desenvolver soluções técnicas de média complexidade, através do desenvolvimento de requisitos de softwares utilizando-se das tecnologias envolvidas no projeto...</p>
                    <a href="https://www.vagas.com.br/vagas/v2622477/pessoa-desenvolvedora-fullstack-pleno?ci=50575446&fnt=18&ne=0&utm_campaign=algoritimo-a&utm_content=20240405&utm_medium=email&utm_posicao=3&utm_quantidade_vagas=4&utm_source=recomendacao&utm_term=2622477" target="_black">
                        <AiOutlinePlus className='icons-plus' />
                        Participar
                    </a>
                </div>

                <div className="card">
                    <div className="container-icon">
                        <FaUserTie />
                    </div>
                    <h3> Programador C#</h3>
                    <p>Analisar e corrigir problemas; Apontar possíveis falhas, propor soluções, melhorias e novas funcionalidades nos sistemas da empresa...</p>
                    <a href="https://www.postavagas.com/vaga/18564890?utm_source=adzuna&utm_medium=adzuna" target="_black">
                        <AiOutlinePlus className='icons-plus' />
                        Participar
                    </a>
                </div>
            </div>

            
        {/*<Link className="btnMore"> <AiOutlinePlus className='icons-plus'/> Mais Vagas</Link>*/}
    </Wrapper>
  )
}

export default Wrappers
