import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/index.module.scss"


const Index = () => {
  return (
    <Layout>
      <Seo title="Abe Hiroki" description="Abe Hirokiのポートフォリオサイトです" />
      <div className={style.hero}>
        <Image src="/images/index-hero.jpg" alt="hero" layout="fill" objectFit="cover" quality={90} />
        <div className={style.textContainer}>
          <h1>I&#39;m Abe Hiroki!</h1>
          <h3>JavaScript Developer</h3>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.profile}>
          <div>
            <h2>JavaScript Nerd</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <Image src="/images/profile.jpg" alt="hero" height={1195} width={1000} quality={90} />
        </div>

        <div className={style.skills}>
          <h2>Skills</h2>
          <div className={style.skillsContainer}>
            <div><Image src="/images/javascript.svg" width={100} height={100} alt="javascript" /><span>JavaScript / 10 years</span></div>
            <div><Image src="/images/react.svg" width={100} height={100} alt="react" /><span>React / 5 years</span></div>
            <div><Image src="/images/gatsby.svg" width={100} height={100} alt="gatsby" /><span>Gatsby / 3 years</span></div>
            <div><Image src="/images/next.svg" width={100} height={100} alt="next" /><span>Next.JS / 3 years</span></div>
          </div>
        </div>

        <div className={style.ctaButton}>
          <Link href="/contact"><a>Make It Happen!</a></Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index