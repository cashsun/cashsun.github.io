import React from 'react';
import Particles from './particles';
import styles from './projects.less';
import { Link } from 'react-router';
const pathname = '/projects';

export default function (props) {
    const pid = props.location.query.pid;

    return (
        <div className={styles.base}>
            <Particles/>
            <ul>
                <li>
                    <Link to={{ pathname: pathname, query: { pid: 'rehearse' } }}>Rehearse</Link>
                </li>
                <li>
                    <Link to={{ pathname: pathname, query: { pid: 'redux-quick-actions' } }}>Redux-Quick-Actions</Link>
                </li>
                <li>
                    <Link to={{ pathname: pathname, query: { pid: 'hanabi'}}}>Hanabi</Link>
                </li>
                <li>
                    <Link to={{ pathname: pathname, query: { pid: 'graphic-design'}}}>Graphic Design</Link>
                </li>
            </ul>
        </div>
    )
}
