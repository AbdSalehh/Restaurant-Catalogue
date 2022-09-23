class headerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
          <style>
                   
            nav {
            background-color: #fff;
            color: #e7e7e7;
            display: flex;
            top: 0;
            align-items: center;
            position: sticky;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            width: 100%;
            font-family: 'Boogaloo', cursive;
            padding: 15px 100px 15px 100px;
            justify-content: space-between;
            }

            nav li {
            display: inline;
            padding: 0 10px 0 10px;
            list-style-type: none;
            font-family: 'Poppins',
                sans-serif;
            }

            nav li a {
            display: inline-block;
            font-size: 18px;
            font-weight: 600;
            text-decoration: none;
            color: #1B2631;
            }

            .navigation {
            display: flex;
            width: 100%;
            padding: 0px;
            padding-bottom: 0;
            }

            .name {
            color: #1B2631;
            font-size: 35px;
            font-weight:bolder;
            text-decoration: none;
            }

            .nav a:hover {
            color: #95A5A6;
            }

            .logo{
            font-size: 30px;
            color: black;
            white-space: nowrap;
            }

          </style>
            <nav class="header-name">
                <div class="logo">
                    <i class="fa fa-utensils"></i>
                    <a class="name" href="">Hunger Apps</a>
                </div>
                <ul class="nav" id="navigation">
                    <li><a href="">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="https://github.com/Saleh-387/">About Us</a></li>
                </ul>
            </nav>
        `;
  }
}

customElements.define("header-bar", headerBar);