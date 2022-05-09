import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import FollowList from './FollowList'
import FollowingList from './FollowingList'
import NickNameEditForm from './NickNameEditForm'

const Profile = () => {
  const followerList = [{ nickname: '바보' }, { nickname: '바로' }, { nickname: '노드버드오피셜' }]
  const followingList = [{ nickname: 'vvv' }, { nickname: 'asdfsadf' }, { nickname: 'saghjksgh' }]

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header="팔로잉 목록" data={followerList} />
        <FollowingList header="팔로워 목록" data={followingList} />
      </AppLayout>
    </>
  )
}

export default Profile
