import propTypes from 'prop-types'
import Link from 'next/link'
import { Input, Menu, Row, Col } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'

import LoginFrom from './LoginFrom'
import UserProfile from './UserProfile'

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

const AppLayout = ({ children }) => {
  const [isLoggedin, setIsLoggedIn] = useState()

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>

        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedin ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginFrom setIsLoggedIn={setIsLoggedIn} />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://naver.com" target={'_blank'} rel="noreferrer noopener">
            naver
          </a>
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
}

export default AppLayout
