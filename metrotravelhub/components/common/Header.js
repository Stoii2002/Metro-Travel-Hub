import React from 'react'

function Header() {
    return (
        <div>
            <header id="header" class="mxd-header">
            
                <div class="mxd-header__logo loading__fade">
                    <a href="index-main.html" class="mxd-logo">
             

                 
                        <span class="mxd-logo__text">rayo<br/>template</span>
                    </a>
                </div>
                
                <div class="mxd-header__controls loading__fade">
                    <button id="color-switcher" class="mxd-color-switcher" type="button" role="switch" aria-label="light/dark mode" aria-checked="true"></button>
                    <a class="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right" href="https://1.envato.market/kOvmWN" target="_blank" aria-label="Purchase">
                        <span class="btn-caption">Purchase</span>
                        <i class="ph-bold ph-shopping-cart-simple"></i>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Header
