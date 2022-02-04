import TvCard from "./tvcard"

export default function Tvlist({tvs, title}){
    return <div>
        <h1>{title}</h1>
        <div className="names">
            {tvs.map(tv=> <TvCard tv={tv}/>)}
        </div>
    </div>
}