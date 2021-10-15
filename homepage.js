let loginCheck; //tạo 1 biết loginCheck (tức để check trạng thái hiện tại)
JSON.parse(localStorage.getItem("login_check"))
  ? (loginCheck = JSON.parse(localStorage.getItem("login_check")))
  : (loginCheck = false);

// console.log("loginCheck", loginCheck);

if (loginCheck === true) {
  // Lấy username current
  let username = JSON.parse(localStorage.getItem("userCurrent"));

  // Dùng innerHTML để in ra SIGN OUT
  document.getElementsByClassName(
    "top_right_header_tag"
  )[0].innerHTML = `<a href="login.html" class="top_mid_header_tag_deco1" onclick="signOut()" id="signin_btn" >SIGN OUT</a>`;

  // Dùng innerHTML để in ra userCurrent (user hiện tại đang đăng nhập)
  document.getElementById("userCurrent").innerHTML = `${username}`;
}

const signOut = () => {
  // Khi SIGN OUT thì set lại SIGN OUT thành SIGN IN
  document.getElementsByClassName(
    "top_right_header_tag"
  )[0].innerHTML = `<a href="login.html" class="top_mid_header_tag_deco1" onclick="signOut() id="signin_btn"" >SIGN IN</a>`;
  localStorage.removeItem("login_check"); //xóa trạng thái đăng nhập khỏi local storage
  // Không hiện gì ở username nữa
  document.getElementById("userCurrent").innerHTML = "";
};

// Chuyển lại phần in sản phẩm
const listFood = [
  {
    img: "Photos/best-pho-in-vietnam.jpg",
    foodName: "Bun Bo",
    foodDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo molestiae minima, temporibus deleniti mollitiablanditiis velit officia itaque veritatis placeat adipisci perferendis error quisquam cum quae atque eum deserunt.",
  },
  {
    img: "Photos/best-pho-in-vietnam.jpg",
    foodName: "Bun Bo",
    foodDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo molestiae minima, temporibus deleniti mollitiablanditiis velit officia itaque veritatis placeat adipisci perferendis error quisquam cum quae atque eum deserunt.",
  },
  {
    img: "Photos/best-pho-in-vietnam.jpg",
    foodName: "Bun Bo",
    foodDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo molestiae minima, temporibus deleniti mollitiablanditiis velit officia itaque veritatis placeat adipisci perferendis error quisquam cum quae atque eum deserunt.",
  },
  {
    img: "Photos/best-pho-in-vietnam.jpg",
    foodName: "Bun Bo",
    foodDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo molestiae minima, temporibus deleniti mollitiablanditiis velit officia itaque veritatis placeat adipisci perferendis error quisquam cum quae atque eum deserunt.",
  },
];

let foodHTML = " ";

for (food of listFood) {
  foodHTML += `
    <div class="food_select_choose_box">
      <div class="overflow">
        <img
          src="${food.img}"
          alt=""
          class="food_select_choose_box_img"
        />
      </div>
      <div class="food_select_choose_box_text">
        <div class="food_select_choose_box_text_tag" onclick="getFood('${food.img}','${food.foodName}','${food.foodDes}')">${food.foodName}</div>
        <div class="food_select_choose_box_text_sub">
          ${food.foodDes}
        </div>
      </div>
    </div>
  `;
}

document.getElementById("listFood").innerHTML = foodHTML;

// Bắt đầu phần lưu món ăn yêu thích vào local storage

let listFoodFavourite = [];
//B1: check xem local storage đã có dữ liệu chưa
if (JSON.parse(localStorage.getItem("listFoodFavourite")) !== null) {
  listFoodFavourite = JSON.parse(localStorage.getItem("listFoodFavourite"));
}

const getFood = (img, name, description) => {
  let foodFavourite = {
    img: img,
    name: name,
    des: description,
  };

  listFoodFavourite.push(foodFavourite);
  localStorage.setItem("listFoodFavourite", JSON.stringify(listFoodFavourite));
};