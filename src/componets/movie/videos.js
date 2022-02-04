export default function Videos({id}){
    return <div>

        <iframe 
        className="video"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder='0'
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        controls='0'
        />
    </div>
}