import React, { useState } from "react";
import { Menu, Switch } from "antd";
import {
  ScheduleTwoTone,
  HomeTwoTone
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

function Menus() {
  const [theme, setTheme] = useState<any>();
  const [currentTheme, setCurrentTheme] = useState("1");

  function changeTheme(value: any) {
    value ? setTheme("dark") : setTheme("light");
  }

  function handleClick(e: any) {
    console.log("click ", e);
    setCurrentTheme(e.key);
  }

  return (
    <>
      <Menu
        theme={theme}
        onClick={handleClick}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[currentTheme]}
        mode="horizontal"
      >
        {/* <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        /> */}

        <SubMenu key="sub1" icon={<HomeTwoTone/>} title="Home">
          <Menu.Item key="1">
            {" "}
            <Link to="/" /> Home{" "}
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<ScheduleTwoTone />} title="Carteirinha">
          <Menu.Item key="2">
            {" "}
            <Link to="/Carteirinha" /> Adicionar Vacina{" "}
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}
export default Menus;
