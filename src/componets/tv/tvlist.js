import TvCard from "./tvcard";
export default function Tvlist({tv,title}){
    tv = tv.slice(0,5)
    return <>
        <h1 className="title">{title}</h1>
        <div className="movies">
            {tv.map(tv => <TvCard tv={tv}/>)}
        </div>
    </>
}