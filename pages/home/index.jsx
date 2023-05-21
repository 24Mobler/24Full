import React from 'react'
import Header from '../../components/home/Header'
import { FaSearch } from 'react-icons/fa'
import Categories from '../../components/home/categories'
import Container from '../../components/layout/Container'

const Home = () => {
  return (
    <Container active="Home">
      <div className="">
        <Header />
        <div>
          <div className="input-search w-[90vw] mx-auto lg:hidden flex items-center space-x-3 border py-1 px-3 lg:py-2 placeholder:text-[18px] rounded-full mt-3">
            <FaSearch fill="#ccc" />
            <input type="search" name="search" id="search-categories" placeholder="search" className="h-full w-full outline-none border-none" />
          </div>
          <Categories />
        </div>
      </div>
    </Container>
  )
}

export default Home
