import React, { PureComponent } from 'react';
import Particles from './particles';
import styles from './default.less';
import { Link } from 'react-router';

export default class Default extends PureComponent {

    render() {
        return (
            <div className={styles.base}>
                <Particles />
                <Link to='projects'>
                    <div className={styles.profile}></div>
                    <div className={styles.contact}>London, United Kingdom/mr.cashsun@gmail.com</div>
                </Link>
            </div>
        )
    }
}