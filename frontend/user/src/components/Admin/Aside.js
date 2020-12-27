import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;


function Aside() {

    const handleClick = e => {
        console.log('click ', e);
    };
  return (
    <div className="Aside">
      <Menu
        onClick={handleClick}
        style={{ width: 256,marginTop:"3px" }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Chủ trọ">
            <Menu.Item key="1"><Link to="list-host">Chủ trọ chưa xác nhận</Link></Menu.Item>
            <Menu.Item key="2"><Link to="list-host-confirmed">Chủ trọ xác nhận</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Bài đăng">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>

      
    </div>
  );
}

export default Aside;
