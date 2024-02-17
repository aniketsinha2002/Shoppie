import React from 'react'
import Products from './Products'
import Header from './Header'
import Card from './Card';

const Home = () => {
  return (
      <div>
          <Header/>
          <h1 className="text-center text-4xl md:text-7xl font-bold text-blue-700 mb-8">Find what you need in seconds!</h1>
        <h2 className="text-center text-3xl md:text-6xl font-semibold text-blue-700 mb-8">Shop with us because we’re worth it</h2>
          <Card/>
    </div>
  )
}

export default Home