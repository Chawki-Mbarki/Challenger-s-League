import React from 'react'
import styles from './Errr.module.css'

const Errr = ({ error }) => {
	return (
		<p className={styles.error}>{error}</p>
	)
}

export default Errr