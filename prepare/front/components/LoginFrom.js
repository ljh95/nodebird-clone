import { Button, Form, Input } from 'antd'
import Link from 'next/link'
import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'

const ButtonWrapper = styled.div`
  margin-top: 10px;
`
const FormWrapper = styled(Form)`
  padding: 10px;
`

export default function LoginFrom({ setIsLoggedIn }) {
  const [id, onChangeId] = useInput('')
  const [password, onChangePassword] = useInput('')

  const onSubmitForm = useCallback(
    e => {
      console.log(id, password)
      setIsLoggedIn(true)
    },
    [id, password],
  )

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-id">비밀번호</label>
        <br />
        <Input name="user-id" type="password" value={password} onChange={onChangePassword} required />
      </div>

      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  )
}
