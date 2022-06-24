import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation, Link } from 'react-router-dom';
import Buscador from '../buscador/Buscador'
import style from './assets/Navbar.module.css';
import shopCart from './assets/shop-cart.svg'
import account from './assets/account-circle.svg'
// import Filtrado from '../products/Filtrado';

export default function Navbar() {
    const location = useLocation();
    const productsCart = useSelector((state) => state.carrito.productosCarrito)

    let number = productsCart.length;
    console.log(location.pathname);

    function isInProducts() {
        if (location.pathname === '/products')
            return (
                <div className={style.navbarFiltrados}>
                    {/* <Filtrado /> */}
                    <div className={style.adminPanel}>
                        <Link to='/createProduct'><button className={style.btnCreateProduct}>Crear producto</button></Link>
                    </div>
                </div>
            )
    }

    return (
        <>
            <div className={style.navbar}>
                <NavLink to='/'><div className={style.logo}>LOGO</div></NavLink>
                <NavLink to='/products' className={style.active}><p className={style.btnProducts}>PRODUCTOS</p></NavLink>
                <NavLink to='/favoritos' className={style.active}><p className={style.btnProducts}>FAVORITOS</p></NavLink>
                <Buscador />
                {/* <NavLink to='/login'><button>Login</button></NavLink> */}
                <span className={style.containerNoti}>
                    <NavLink to='/login'><img src={account} alt='MiAccount' className={style.account} /></NavLink>
                    <NavLink to='/carrito'><img src={shopCart} alt='Carrito' className={style.changuito} /></NavLink>
                    <span className={style.notiCantChanguito}></span>
                    <p className={style.cantChanguito}>{number}</p>
                </span>
            </div>
            {isInProducts()}
        </>
    )
}