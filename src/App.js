import { useEffect, useState } from "react";
import "./App.css";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import MenuCategory from "./components/MainMenu/MenuCategory";
import Menu from "./components/MainMenu/Menu";
import Items from "./components/MainMenu/Items";
import { MenuItems, food } from "./data";
import RightMenu from "./components/RightMenu/RightMenu";

function App() {
  const [classActive, setClassActive] = useState(1);
  const [menuActiveClass, setMenuActiveClass] = useState(1);
  const [foodShow, setFoodShow] = useState([]);
  const [openSideBar, setOpenSideBar] = useState(false);
  useEffect(() => {
    const items = food.filter((item) => item.itemId === "buger01");
    setFoodShow(items);
  }, []);

  const clickHandler = (id, itemName) => {
    setClassActive(id);
  };
  const MenuActive = (id, itemName) => {
    setMenuActiveClass(id);
    const items = food.filter((item) => item.itemId === itemName);
    setFoodShow(items);
  };

  return (
    <div className="App">
      <Navbar setOpenSideBar= {setOpenSideBar} openSideBar = {openSideBar}/>
      <main>
        <div className="container">
          <Banner />
          <MenuCategory name={"Menu Category"} />
          <Menu
            menuActiveClass={menuActiveClass}
            MenuActive={MenuActive}
            MenuItems={MenuItems}
          />
          <Items foodShow={foodShow} />
        </div>
      </main>
      <RightMenu openSideBar = {openSideBar} />
      <BottomMenu classActive={classActive} clickHandler={clickHandler} />
    </div>
  );
}

export default App;
