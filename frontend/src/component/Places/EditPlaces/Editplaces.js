import Addplaces from "../Addplaces/Addplaces.js"

export default function Editplaces(){
    const data = 
        {
            id: 125,
            img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            user: "u1",
            user_image: "https://images.unsplash.com/photo-1705779235077-f301b609cca4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            place: "hyderabad",
            desc: "It is famous for briyani",
            lat: 48,
            long: 52,
            title: "Chair Manir",
            address:"telangana 500018"
        }
    
    return(
        <Addplaces titlevalue={data.title}  addressvalue={data.address} descvalue={data.desc} />
    )
}