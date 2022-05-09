import React, { useCallback } from 'react'
import { Avatar, Card, Button } from 'antd'

export default function UserProfile({ setIsLoggedIn }) {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  return (
    <Card
      actions={[
        <div key="twit">
          쨱쨱 <br />0
        </div>,
        <div key="following">
          팔로잉 <br />0
        </div>,
        <div key="follower">
          팔로워 <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title={'Jongho'} />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  )
}
