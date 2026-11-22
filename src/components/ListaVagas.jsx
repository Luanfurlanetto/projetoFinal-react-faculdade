import {vagas} from "../data/vagas"
import VagaCard from "./VagaCard"


export default function ListaVagas(){
    return(
        <section>
            <h2>ultimas vagas</h2>
            <div>
                {vagas.map(vaga => (
                    <VagaCard/>
                )
            )}
            </div>
        </section>
    )
}