import React, { useRef, useState } from "react";
import "./SideMenu.css";
import { Form, Input, Button, Checkbox, Radio } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const { Search } = Input;
const { TextArea } = Input;

function SideMenu() {
  return (
        <div>
          <ul className="list-sidebar">
            <li className="elm">
              <a>Thông tin tài khoản</a>
            </li>
            <li className="elm">
              <a >Thay đổi mật khẩu</a>
            </li>
            <li className="elm">
              <a>Quản lý tài khoản</a>
            </li>
          </ul>
        </div>
  );
}

export default SideMenu;
