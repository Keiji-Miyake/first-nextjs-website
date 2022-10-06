import Image from 'next/image'
import Link from 'next/link'
import * as style from "../styles/common.module.scss"

const Footer = () => {
    return (
        <footer className={style.footerWrapper}>
            <div className={style.insideContainer}>
                <a href="https://www.google.com/"><Image src="/images/github.svg" width={40} height={40} alt="logo" /></a>
                <a href="https://www.google.com/"><Image src="/images/linkedin.svg" width={40} height={40} alt="logo" /></a>
                <a href="https://www.google.com/"><Image src="/images/twitter.svg" width={40} height={40} alt="logo" /></a>
                <a href="https://www.google.com/"><Image src="/images/facebook.svg" width={40} height={40} alt="logo" /></a>
                <hr/>
                <Link href="/blog"><a>Blog</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
                <p>©{new Date().getFullYear()} Abe Hiroki</p>
            </div>
        </footer>
    )
}

export default Footer