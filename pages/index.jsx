import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Cowsay from '../components/cowsay'
const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Cowsay/>

    <div className="hero">

      <div className="row">
        <Link href='/router'>
          <a> 跳转到router页面 </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
    `}</style>
  </div>
)

export default Home
