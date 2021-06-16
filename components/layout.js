import styles from './layout.module.css'

export default function Layout({ children }) {
	return <div className={styles.container}>{children}</div>
}

// if you take a look at the HTML in your browser’s devtools, you’ll notice that the div rendered by 
// the Layout component has a class name that looks like layout_container__...:

// This is what CSS Modules does: It automatically generates unique class names. 
// As long as you use CSS Modules, you don’t have to worry about class name collisions.