export default function Sections({id , title , children}){
    return(
        <section id ={id}>
        <h2>{title}</h2>
        {children}
        </section>
    )
}