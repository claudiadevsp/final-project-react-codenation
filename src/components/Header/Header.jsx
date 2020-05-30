import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'

const Header = ({productsAmount}) => {

    const hide = (class1, class2) => {
        
        const appDiv = document.querySelector(".app")
        document.querySelector(".app--scroll-lock").addEventListener("click", (e) => {
            if(e.target === appDiv) {
                document.querySelector(class1).classList.remove(class2)
                document.querySelector(".app").classList.remove("app--scroll-lock")
            }
        })

    }
    
    const showSearch = () => {

        document.querySelector(".search").classList.toggle("search--visible")
        document.querySelector(".app").classList.add("app--scroll-lock")
        hide(".search", "search--visible")

    }

    const showCart = () => {

        document.querySelector(".cart").classList.add("cart--visible")
        document.querySelector(".app").classList.add("app--scroll-lock")
        hide(".cart", "cart--visible")
        
    }   

    return (
        <header className="header">
            <div className="header__items">
                <Link className="header__logo" to="/">Fashionista</Link>
                <div className="header__buttons">
                    <div className="header__search">
                        <FontAwesomeIcon icon={faSearch} onClick={showSearch}/>
                    </div>
                    <div className="header__cart">
                        <FontAwesomeIcon icon={faCartPlus} onClick={showCart}/>
                        <div className="header__amount" onClick={showCart}>{productsAmount}</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
  productsAmount: state.productsAmount
})

export default connect(mapStateToProps)(Header)