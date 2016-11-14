import React, { PureComponent } from 'react';
import styles from './description.less';
import { Link } from 'react-router';

export default class Description extends PureComponent {

    render() {
        const { text } = this.props;
        return <div className={styles.base}>
            <p>{text}</p>
        </div>
    }

}
