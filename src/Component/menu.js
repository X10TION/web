//  import the library and module here
import React from 'react';
import { Menu } from 'antd';
import {
    UserAddOutlined,
     AppstoreOutlined,
     UsergroupAddOutlined,
     PictureOutlined,
     LoginOutlined 
     } 
      from '@ant-design/icons';
    //   end importation here

// function for navigation here
function Navigation(){
    return(
        <div>
            <Menu mode="horizontal" theme='dark' orientation="right" justify="right">
                <Menu.Item><AppstoreOutlined />Home</Menu.Item>
                <Menu.Item><UserAddOutlined />Enroll</Menu.Item>
                <Menu.Item><UsergroupAddOutlined />Our Staff</Menu.Item>
                <Menu.Item><PictureOutlined />Gallery</Menu.Item>
                <Menu.Item><LoginOutlined />Login</Menu.Item>
            </Menu>
        </div>
    )
    
}
export default Navigation
      