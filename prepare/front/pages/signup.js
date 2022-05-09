import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { Button, Checkbox, Form, Input, ㅠㅕ쌔ㅜ } from 'antd'
import { useCallback, useState } from 'react'
import useInput from '../hooks/useInput'
import styled from 'styled-components'

const ErrorMessage = styled.div`
  color: 'red';
`

const Signup = () => {
  const [id, onChangeId] = useInput('')
  const [nickname, onChangeNickname] = useInput('')
  const [password, onChangePassword] = useInput('')
  // const [passwordCheck, onChangePasswordCheck] = useInput('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const [term, setTerm] = useState(false)
  const [termError, setTermError] = useState(false)

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value)
      setPasswordError(e.target.value !== password)
    },
    [password],
  )

  const onChangeTerm = useCallback(
    e => {
      setTerm(e.target.checked)
      setTermError(false)
    },
    [password],
  )

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }

    if (!term) {
      return setTermError(true)
    }

    console.log(id, nickname, password)
  }, [password, passwordCheck, term])

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-passwrod-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
          제로동의합니다.
        </Checkbox>
        {termError && <ErrorMessage>약관에 동의해야합니다.</ErrorMessage>}

        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  )
}

export default Signup
