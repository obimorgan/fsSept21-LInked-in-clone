import {useState, useEffect} from 'react'
const UserExpr =()=> {
const [expr, setExpr] = useState([]);


useEffect(()=> {
    fetch("http//striveschool-api.herokuapp.com/api/profile/:5fc4af0bb708c200175de88e/experiences")
    .then((response) => response.json())
    .then((data) => {
        setExpr(data)
    })
}, [])


render(){
    return(

    )
}
}
export default UserExpr