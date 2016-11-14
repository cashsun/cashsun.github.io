import React, { PureComponent } from 'react';
import Particles from './particles';
import styles from './projects.less';
import { Link } from 'react-router';
import Transition from 'react-motion-ui-pack';
const pathname = '/projects';
const REHEARSE = 'rehearse';
const REDUX_QUICK_ACTIONS = 'redux_quick_actions';
const HANABI = 'hanabi';
const GRAPHIC_DESIGN = 'graphic_design';

export default class Projects extends PureComponent {

    render() {
        const pid = this.props.location.query.pid;
        let items = [
            REHEARSE,
            REDUX_QUICK_ACTIONS,
            HANABI,
            GRAPHIC_DESIGN
        ];

        switch (pid) {
            case REHEARSE:
                items = [REHEARSE];
                break;
            default:
                break;
        }

        return (
            <div className={styles.base}>
                <Particles/>
                <Transition
                    component="ul"
                    enter={{
                        opacity: 1,
                    }}
                    leave={{
                        opacity: 0,
                    }}
                >
                    { items.map(item =>
                        <li key={item}>
                            <Link to={{pathname: pathname, query: {pid: item}}}>{item}</Link>
                        </li>
                    )
                    }
                </Transition>
            </div>
        )
    }

}
