
import {Link} from "react-router-dom"
export default function VagaCard(){
    return(
        <div>
            {/* icone com inicial */}
            <div>v</div>
            <div>
                <p>nome empresa</p>
                <p>nome do cargo</p>
                <div>
                    <span>1.700</span>
                    <span>clt</span>
                </div>
            </div>
            <div>
                <span>há 20 horas</span>
                <Link>candidatar-se</Link>
            </div>
        </div>
    )
}