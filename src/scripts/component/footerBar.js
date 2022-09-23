class footerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        
        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            padding: 20px;
            margin-top: 20px;
            background-color: #fff;
        }

        .card i {
            color: #000;
        }

        .satu .featured-image {
            width: 49%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
            margin-top: 30px;
        }

        .satu {
            box-shadow: none;
            width: 25%;
        }

        .dua {
            box-shadow: none;
            width: 50%;
        }

        .dua i {
            font-size: 15px;
        }

        .dua p,
        .tiga p {
            font-weight: normal;
            margin-top: 20px;
        }

        .tiga {
            box-shadow: none;
            width: 25%;
        }

        .kedua {
            margin-bottom: -10px;
        }

        .container h3 {
            margin-bottom: -15px;
            margin-top: -15px;
            color: black;
        }

        .container h4 {
            margin-bottom: -10px;
        }

        .container p {
            font-size: 14px;
        }

        .container {
            border-top: 1px solid #e7e7e7;
            color: #1B2631;
            background-color: #fff;
            font-weight: bold;
            display: flex;
            padding: 0px 80px 0px 80px;
        }

        .container .card {
            background-color: transparent;
        }

        .foot {
            border-top: 1px solid #e7e7e7;
            background-color: #fff;
        }

        .foot p {
            font-size: 15px;
            font-weight: 600;
            text-align: center;
            color: #1B2631;
            margin-bottom: 10px;
            margin-top: 10px;
        }
        </style>
        <div class="container">
            <div id="sejarah" class="card satu">
                <h3>Support</h3>
                <img src="https://www.dicoding.com/blog/wp-content/uploads/2014/12/dicoding-header-logo.png"
                class="featured-image" alt="logo dicoding">
                <img src="https://yuardika.files.wordpress.com/2015/06/logo-umm_1.png" class="featured-image kedua"
                alt="logo UMM">
            </div>
            <div id="sejarah" class="card dua">
                <h3>Contact Me</h3>
                <p> Alamat : Jl. Notojoyo No. 75, Babatan, Tegalgondo, Karangploso,
                Malang, Jawa Timur</p>
                <p class="normal"> Phone : +6282345678910</p>
                <p class="normal"> Email 1 : abdshaleh124@gmail.com</p>
                <p class="normal"> Email 2 : abdshaleh124@webmail.umm.ac.id</p>
            </div>
            <div id="sejarah" class="card tiga">
                <h3>Follow Me</h3>
                <p> +6282345678910</p>
            </div>
        </div>
        <div class="foot">
            <p>Belajar Menjadi Front-End Web Developer Expert &#169; 2022, Dicoding Academy</p>
        </div>
        `;
    }
}

customElements.define("footer-bar", footerBar);