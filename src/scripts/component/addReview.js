const cardReview = (reviewData) => `
    <div class="review_item">
        <div class="reviewer_item">
            <i class="fa-solid fa-circle-user"></i>
            <div class="reviewer">
                <p>${reviewData.name}</p>
                <p>${reviewData.date}</p>
            </div>
        </div>
        <div class="desc">
            <p>${reviewData.review}</p>
        </div>
    </div>
`;

export default cardReview;
