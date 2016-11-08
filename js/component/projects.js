import React from 'react';
import Particles from './particles';
import styles from './projects.less';

export default function (props) {
    return (
        <div className={styles.base}>
            <Particles/>
            <ul>
                <li>
                    <a href="/projects?pid=rehearse">Rehearse</a>
                </li>
                <li>
                    <a href="/projects?pid=redux-quick-actions">Redux-Quick-Actions</a>
                </li>
                <li>
                    <a href="/projects?pid=hanabi">Hanabi</a>
                </li>
                <li>
                    <a href="/projects?pid=graphic-design">Graphic Design</a>
                </li>
            </ul>
        </div>
    )
}
