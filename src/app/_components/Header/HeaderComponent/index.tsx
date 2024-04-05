"use client"
import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'
import classes from './index.module.scss'
import Image from 'next/image'
import { Head } from 'next/document'
import { HeaderNav } from '../Nav'
import MobileNav from '../MobileNav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

const HeaderComponent = ({ header }: { header: Header }) => {
    const pathname =  usePathname()
  return (
    <div>
      <nav className={[classes.header, noHeaderFooterUrls.includes
        (pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}>
        <Gutter className={classes.wrap}>
            <Link href="/">
                <Image src="/mistertennis-logo-blanco.svg" alt="logo"
                width={270}
                height={50}/>
                {/* <Image src="/logo-black.svg" alt="logo"
                width={170}
                height={50}/> */}
            </Link>
            <HeaderNav header={header}/>
            {/* <MobileNav header={header}/> */}
        </Gutter>
      </nav>
    </div>
  )
}

export default HeaderComponent
