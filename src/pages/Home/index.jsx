import { useState } from "react"
import ListaVagas from "../../components/ListaVagas"
import { Header } from "../../components/Header"
import Hero from "../../components/Hero"

export function Home(){
    const [filtros,setFiltos] = useState({
        tipos:[],
        areas:[],
        localizacoes:[]

    })
    return(
        <div>

            <Header/>
            <Hero/>
       
        <main>
            <aside>
                filtros
            </aside>
            <section>
                <ListaVagas filtros={filtros}/>

            </section>
        </main>
        </div>
    )
}