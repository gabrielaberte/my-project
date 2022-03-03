import React, { useState } from 'react';
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Menus () {
    const [theme, setTheme] = useState<any>();
    const [currentTheme, setCurrentTheme] = useState("1");
  
    function changeTheme (value: any) {
        value ? setTheme("dark") : setTheme("light")
    }
    
    function handleClick (e:any) {
        console.log('click ', e);
        setCurrentTheme(e.key);
        
    }

  
    return (
      <>
      
        <Menu
          theme={theme}
          onClick={handleClick}
          defaultOpenKeys={['sub1']}
          selectedKeys={[currentTheme]}
          mode="horizontal"
        >
    
       {/* <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        /> */} 
        
          <SubMenu key="sub1" icon={<MailOutlined />} title="Home" />
          <SubMenu key="sub2" icon={<MailOutlined />} title="Carteirinha">
            <Menu.Item key="2">Adicionar Vacina</Menu.Item>
          </SubMenu>
          
        </Menu>
        
      </>
    );
  
}
 export default Menus;