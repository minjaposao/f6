export default function Item({evt}){

    const {attributes} = evt;
    return(
        <h3>{attributes.name}</h3>
    )
}