class restaurantDetail extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
            .detail_container{
                padding: 120px 100px 120px 100px;
            }

            .detail {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-bottom: 30px;
            }

            .restaurant_item {
                display: flex;
                width: 100%;
                margin-bottom: 10px;
            }

            .restaurant_img {
                width: 60%;
                max-height: 400px;
            }

            .restaurant_img img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
                position: relative;
            }

            .restaurant_img .like_button{
                display: flex;
                justify-content: right;
                align-items: right;
            }
            .restaurant_img .like {
                position: absolute;
                z-index: 4;
                cursor: pointer;
                outline: none;
                border: none;
                background-color: transparent;
                margin-top: 8px;
                margin-right: 10px;
            }

            .restaurant_img .like i {
                font-size: 20px;
                font-weight: bold;
                background: rgba(255, 255, 255);
                padding: 2px;
                height: 45px;
                width: 45px;
                border-radius: 50%;
                margin-top: 5px;
                justify-content: center;
                align-items: center;
                display: flex;
            }

            .restaurant_detail {
                width: 40%;
                padding: 0 0 0 20px;
            }

            .restaurant_name {
                margin-top: -10px;
                font-size: 30px;
                font-weight: 600;
            }

            .restaurant_detail p {
                margin-top: 15px;
                font-size: 17px;
                font-weight: 600;
            }

            .restaurant_detail p:first-child {
                margin-top: 0;
            }
            .restaurant_detail p span, .restaurant_detail span {
                font-size: 15px;
                font-weight: 300;
                text-align: justify;
            }

            .restaurant_rating i{
                color: #FFC107;
            }

            .restaurant_menu p{
                margin-left: 20px;
            }

            .restaurant_desc {
                border-bottom: 1px solid #e5e5e5;
            }

            .restaurant_desc .menu {
                font-size: 17px;
                margin-top: 10px;
                font-weight: 600;
            }

            .restaurant_desc p{
                margin-top: 10px;
                text-align: justify;
                margin-bottom: 50px;
                font-size: 15px;
            }

            .review {
                text-align: center;
                margin-bottom: 30px;
            }

            .card_review {
                margin-top: 20px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 20px;
            }

            .review_item {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 7px;
                display: flex;
                flex-direction: column;
            }

            .reviewer_item {
                display: flex;
            }

            .reviewer_item i{
                font-size: 40px;
                color: #85929E;
            }

            .reviewer {
                margin-left: 10px;
                text-align: left;
                font-size: 13px;
            }

            .reviewer p:first-child {
                font-weight: 600;
            }

            .desc{
                font-size: 13px;
                text-align: justify;
                margin-top: 10px;
            }

            .add_review{
                display: flex;
                flex-direction: column;
                max-width: 100%;
            }

            .add_review h2{
                margin-bottom: 20px;
            }

            .add_review input, textarea {
                font-family : 'Poppins', sans-serif;
                width: 50%;
                margin-top: 10px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #e5e5e5;
                font-size: 14px;
            }

            .add_review input {
                height: 47px;
                margin-bottom: 20px;
                max-width: 30%;
            }

            .add_review textarea {
                max-width: 50%;
            }

            .add_review textarea:focus, .add_review input:focus {
                outline: none;
                border: 2px solid #85929E;
            }

            .add_review .submit {
                width: 50%;
                display: flex;
                justify-content: flex-end;
            }

            .submit button {
                font-family : 'Poppins', sans-serif;
                font-size: 16px;
                margin-top: 20px;
                padding: 14px 30px;
                border-radius: 5px;
                border: none;
                background-color: #85929E;
                color: white;
                font-weight: 600;
                cursor: pointer;
                align-items: center;
            }

            .submit button:hover, .submit button:focus {
                background-color: #2E4053;
            }

            </style>
            <div class="detail_container"></div>
        `;
    }
}

customElements.define("restaurant-detail", restaurantDetail);