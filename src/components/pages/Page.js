import React from 'react';
import styles from './styles.module.scss';
import PageFooter from './PageFooter';
import PageMain from './PageMain';
import PageNav from './PageNav';
import { useAuth } from 'context/AuthContext';

function Page(props) {
	const {children} = props;
	const {loading} = useAuth();

	if (loading) {
    return <div>Loading...</div>;
  }

	return (
		<div className={styles['page']}>
			<PageNav />
			<PageMain>{children}</PageMain>
			<PageFooter />
		</div>
	);
}

export default Page;
