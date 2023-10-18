import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
      <nav className={styles.mainnav}>
        {/* <ul className="nav"> tag used for jsx styling  */}
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/service">Service</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
