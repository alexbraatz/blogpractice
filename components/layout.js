import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Sir Alex Braatz'
export const siteTitle = 'Alex Next.js sample site'

export default function Layout({ children, home }) {
	return (
	<div className={styles.container}>
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<meta
			  name="description"
			  content="Learning how to build a site with Next.js baby!"
			/>
			<meta
			  property="og:image"
			  content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
    		  )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        	/>
			<meta name="og:title" content={siteTitle} />
        	<meta name="twitter:card" content="summary_large_image" />
      </Head>
	  <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
	</div>
	)
}

// if you take a look at the HTML in your browser’s devtools, you’ll notice that the div rendered by 
// the Layout component has a class name that looks like layout_container__...:

// This is what CSS Modules does: It automatically generates unique class names. 
// As long as you use CSS Modules, you don’t have to worry about class name collisions.