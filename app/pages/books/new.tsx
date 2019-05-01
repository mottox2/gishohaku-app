import firebase from 'firebase/app'
import 'firebase/firestore'

import {
  Container,
} from 'sancho'
import Layout from '../../components/layout'
import BookForm from '../../components/BookForm'
import router, { withRouter } from 'next/router'
import { useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const BooksNew = (props: any) => {
  return (
    <Layout tab={props.router.query.tab}>
      <Container>
        <BookForm onSubmit={(event, book) => {
          const db = firebase.firestore()
          db.collection("books").add(book).then((docRef) => {
            console.log(docRef)
            router.push('/books')
          })
          event.preventDefault()
        }} />
      </Container>
    </Layout >
  )
}

const withUser = (Component: any) => {
  return (props: any) => {
    const user = useContext(UserContext)
    useEffect(() => {
      if (!user) {
        console.log('userNotFound')
        router.push('/books')
      }
    })
    return <Component {...props}>
      pppp
    </Component>
  }
}

export default withUser(withRouter(BooksNew))
