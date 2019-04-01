import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Menu from '../../../../components/common/Menu';
import Banner from '../Banner';

const { Header } = Layout;

const MENUS = [
  {
    title: 'Trang chủ',
    href: '#',
  },
  {
    title: 'Tính năng',
    href: '#',
  },
  {
    title: 'Cách Hoạt động',
    href: '#',
  },
  {
    title: 'Liên hệ',
    href: '#',
  },
];
const HeaderContainer = () => {
  return (
    <Header>
      <Menu menus={MENUS} />
      <Banner />
    </Header>
  );
};
HeaderContainer.propTypes = {};

export default HeaderContainer;
