/** @jsx jsx */
import Link from 'next/link'

import { jsx, css } from '@emotion/core'

import { Button, Divider, Container, IconChevronRight } from 'sancho'
import { withRouter } from 'next/router'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import MessageBox from '../components/MessageBox'
import Loader from '../components/Loader'

const Item = ({ primary, secondary, ...other }) => {
  return (
    <a
      css={css`
        padding: 12px;
        display: block;
        text-decoration: none;
        color: inherit;
        &:hover {
          background-color: #eee;
        }
      `}
      {...other}
    >
      {primary}
      <div
        css={css`
          font-size: 12px;
          opacity: 0.6;
        `}
      >
        {secondary}
      </div>
    </a>
  )
}

const Mypage: React.FC = () => {
  const { user, isUserLoading, userData } = useContext(UserContext)

  if (isUserLoading) {
    return <Loader label="Loading..." />
  }

  if (!user) {
    return (
      <MessageBox
        title="ログインが必要です。"
        description="このページを利用するにはログインが必要です。"
      >
        <Link href="/sign_in" passHref>
          <Button
            component="a"
            css={css`
              margin-top: 12px;
              width: 100%;
            `}
          >
            ログイン
          </Button>
        </Link>
      </MessageBox>
    )
  }

  return (
    <Container>
      <div
        css={css`
          background-color: white;
          margin-top: 20px;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
        `}
      >
        {/* <List> */}
        <Link href="/circles?starred" passHref>
          <Item
            primary="チェックしたサークル"
            secondary="チェックをつけたサークルを確認できます"
            contentAfter={<IconChevronRight />}
          />
        </Link>
        <Link href="/books?starred" passHref>
          <Item
            primary="チェックした頒布物"
            secondary="チェックをつけた頒布物が確認できます"
            contentAfter={<IconChevronRight />}
          />
        </Link>
        {userData && userData.circleRef && (
          <>
            <Divider />
            <Link href="/mypage/circle" passHref>
              <Item
                primary="サークル情報編集"
                secondary="サークル情報の編集、頒布物の登録、チェック数の確認を行えます"
                contentAfter={<IconChevronRight />}
              />
            </Link>
          </>
        )}
        {/* </List> */}
      </div>
    </Container>
  )
}

export default withRouter(Mypage)
