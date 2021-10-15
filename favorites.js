
  //chế độ khi chưa đăng nhập hoặc chưa có món ăn yêu thích
  login_check = localStorage.getItem("login_check");
  login_check = JSON.parse(login_check);
  console.log(login_check);
  const empty = document.querySelector(".empty_page");
  const favourite_page = document.querySelector(".favorites");
  if (login_check == null) {
    empty.classList.remove("empty_page");
    empty.classList.add("empty_page::before");
    favourite_page.classList.add("favorites");
  } else {
    favourite_page.classList.remove("favorites");
    favourite_page.classList.add("favorites::before");
  }
  
  // thẻ món ăn//
  let dish_data = [];
  
  if (JSON.parse(localStorage.getItem("listFoodFavourite")) !== null) {
    dish_data = JSON.parse(localStorage.getItem("listFoodFavourite"));
  }
  
  let allfav;
  
  let fav_dishes = document.getElementById("fav_dishes");
  let dish_card = "";
  for (content of dish_data) {
    dish_card += `
    <div class="dish">
                          <img src=${content.img}
                              alt="dish-photo">
                          <div class="dish_content">
                              <p id="dish_name">${content.name}</p>
                              <button class="btn">
                                  <a href=${"pho.html"} id="dish_button">Discover</a>
                              </button>
                              <button id ="closebutton"><i class="fal fa-minus-circle" id="closeicon"></i></button>
                          </div>
                      </div>
    `;
  }
  fav_dishes.innerHTML = dish_card;