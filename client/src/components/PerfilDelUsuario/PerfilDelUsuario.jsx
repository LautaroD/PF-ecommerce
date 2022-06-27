import {  React, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {PerfilDelUsuarioA} from "../../redux/actions/PerfilDelUsuarioA"
import style from "./PerfilDelUsuario.module.css";

// function PerfilDelUsuario({ PerfilDelUsuarioA }) {
//     const location = useLocation();
//     const idProduct = location.pathname.substring(8, location.pathname.length);
//     const usuario = useSelector((state) => state.perfilDelUsuario)
  

//     useEffect(() => {
//         PerfilDelUsuarioA(idProduct)
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
   


export default function PerfilDelUsuario(){
    // console.log (props)
    const dispatch = useDispatch()
    const {username} = useParams()

    const usuario = useSelector ((state)=> state.PerfilDelUsuarioR.perfilDelUsuario);

    useEffect(() => {
        dispatch (PerfilDelUsuarioA(username));
        // console.log (PerfilDelUsuarioA(username))
        // return dispatch
    },[dispatch, username ]);
    
          



// console.log("componente", usuario)   

return (
        
<div>
   {usuario.name?  
     <div className = {style.DetailContainer}> 
        
        {/* <h2 className = {style.DetailContainer}>{usuario[0].isAdmin ? "Perfil del Administrador"  : "Perfil del Usuario" }</h2> 
        {/*Foto:  <img className = {style.foto} src = {usuario[0].image} alt = "" />*/}<h2 className = {style.usuario}>Usuario: {usuario.username}.</h2> 
        <h2 className = {style.nombre}>Nombre: {usuario.name}. Apellido:  {usuario.lastName}. </h2>                
        
        <h3 className = {style.datos}>Email:  {usuario.email}. </h3> {/* <h3>Contraseña:  {usuario[0].password}.</h3> */}
        <h3 className = {style.datos}>DNI:   {usuario.dni}.  Telefono:  {usuario.celphone}.</h3> 
        {/*<h3 className = {style.h3}>Direccion: </h3> 

        <h4 className = {style.h4}>Calle: {usuario[0].address}.    Numero:  {usuario[0].number}. 
            CP: {usuario[0].zipCode}.    Provincia:  {usuario[0].province}.
            Localidad: {usuario[0].location}.    Departamento:  {usuario[0].apartment}. </h4> 
        
        <h5 className = {style.h5}>  Descripcion: {usuario[0].description}.   </h5>  */}

        <Link to = "/" > <button className = {style.volver}>Volver</button> </Link>   
    </div> 
      :  "Loading"} 
</div>
       
)
}

/////////
// export default connect(null, { PerfilDelUsuarioA })(PerfilDelUsuario)