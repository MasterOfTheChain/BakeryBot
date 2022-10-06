import adventureImg from "../images/adventure.png";
import businessImg from "../images/business.png";
import coffeeImg from "../images/coffee.png";
import diaryImg from "../images/diary.png";
import favoriteImg from "../images/favorite.png";
import kindleImg from "../images/kindle.png";
import languageImg from "../images/language.png";

export function getData() {
  return [
    { title: "Adventure", price: 17.99, Image: adventureImg,id:1 },
    { title: "Business", price: 15, Image: businessImg,id:2 },
    { title: "Coffee", price: 3.5, Image: coffeeImg ,id:3},
    { title: "Diary", price: 13.99, Image: diaryImg,id:4 },
    { title: "Favorite", price: 2.5, Image: favoriteImg,id:5 },
    { title: "Kindle", price: 0.99, Image: kindleImg,id:6 },
    { title: "Language", price: 2.99, Image: languageImg,id:7 },
  ];
}