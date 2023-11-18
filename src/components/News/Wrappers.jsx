import { Link } from "react-router-dom"
import Wrapper from "./Wrapper.style"
import {FaLocationDot } from 'react-icons/fa6'
import  {AiOutlinePlus} from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import {FaPeopleCarryBox} from 'react-icons/fa6'
import { FaUserDoctor } from "react-icons/fa6"
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
                        <IoIosPeople/>
                    </div>

                    <h3>Separador de Carga</h3>
                    <p>Recebe, coleta, confere, faz triagem e prepara material para expedição. Se reporta aos superiores sobre os objetos coletados e entregues..</p>
                    <a href="https://www.infojobs.com.br/empregos.aspx?origenvisita=888&xts=472214&xtor=SEC-1218-GOO-%5BInfojobs_Emprego%5D-602278531650-S-%5Binfojobs+vagas%5D&gclid=Cj0KCQjwkqSlBhDaARIsAFJANkh62H82lRItIEptB2FPJUujegz726DljSYRBNll40eVFwgNUdsvAS8aAvIuEALw_wcB&gad=1&palabra=Separador+de+Carga&provincia=64" target="_black">
                        <AiOutlinePlus className='icons-plus' />
                        Participar
                    </a>
                    
                </div>

                <div className="card">
                    <div className="container-icon">
                        <FaUserDoctor/>
                    </div>
                    <h3>Tecnico de Enfermagem </h3>
                    <p>Indústria do segmento de bens de consumo contrata Auxiliar de Enfermagem do Trabalho...</p>
                    <a href="https://www.infojobs.com.br/empregos.aspx?xts=472214&palabra=Enfermagem&xtor=SEC-1218-GOO-%5BInfojobs_Emprego%5D-602278531650-S-%5Binfojobs+vagas%5D&origenvisita=888&gad=1&gclid=Cj0KCQjwkqSlBhDaARIsAFJANkh62H82lRItIEptB2FPJUujegz726DljSYRBNll40eVFwgNUdsvAS8aAvIuEALw_wcB&provincia=64" target="_black">
                        <AiOutlinePlus className='icons-plus' />
                        Participar
                    </a>
                    
                </div>

                <div className="card">
                    <div className="container-icon">
                        <FaPeopleCarryBox/>
                    </div>
                    <h3>LOGISTICA</h3>
                    <p>Diversar vagas na área de logística, clique em participar</p>
                    <a href="https://www.infojobs.com.br/empregos.aspx?Palabra=Log%C3%ADstica&Provincia=64&xtor=SEC-1218-GOO-%5BInfojobs_Emprego%5D-602278531650-S-%5Binfojobs%20vagas%5D&xts=472214&origenvisita=888&gad=1&gclid=Cj0KCQjwkqSlBhDaARIsAFJANkh62H82lRItIEptB2FPJUujegz726DljSYRBNll40eVFwgNUdsvAS8aAvIuEALw_wcB" target="_black">
                        <AiOutlinePlus className='icons-plus' />
                        Participar
                    </a>
                    
                </div>

                <div className="card">
                    <div className="container-icon">
                        <CgWorkAlt/>
                    </div>
                    <h3> Administração </h3>
                    <p>Diversar vagas na área de administração, clique em participar</p>
                    <a href="https://www.infojobs.com.br/empregos.aspx?Provincia=64&xts=472214&gad=1&palabra=Administra%C3%A7%C3%A3o&origenvisita=888&xtor=SEC-1218-GOO-%5BInfojobs_Emprego%5D-602278531650-S-%5Binfojobs+vagas%5D&gclid=Cj0KCQjwkqSlBhDaARIsAFJANkh62H82lRItIEptB2FPJUujegz726DljSYRBNll40eVFwgNUdsvAS8aAvIuEALw_wcB&provincia=64" target="_black">
                        <AiOutlinePlus className='icons-plus' />
                        Participar
                    </a>
                </div>
            </div>

        <Link className="btnMore"> <AiOutlinePlus className='icons-plus'/> Mais Vagas</Link>
    </Wrapper>
  )
}

export default Wrappers
