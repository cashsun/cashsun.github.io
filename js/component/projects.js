import React, { PureComponent } from 'react';
import Particles from './particles';
import Description from './description';
import styles from './projects.less';
import { Link } from 'react-router';
import Transition from 'react-motion-ui-pack';
import { spring, Motion } from 'react-motion';
const pathname = '/projects';
const REHEARSE = 'rehearse';
const REDUX_QUICK_ACTIONS = 'redux_quick_actions';
const HANABI = 'hanabi';
const GRAPHIC_DESIGN = 'graphic_design';

const descriptions = {
    [REHEARSE]: `A ready to run to built for React components live editing. Hot reload w/ browser-sync made easy.
                    Features including 
                    1.Hot reload on css/less change
                    
                    2.Hot reload on react component change
                    
                    3.Hot reload on props/scenario change
                    
                    4.Scenario supported
                    
                    5.Isolated or interdependent props
                    
                    6.Babel loader ready
                    
                    7.Auto find all components in configured folder
                    
                    8.Customise addtional loaders and plugins and more`,

    [REDUX_QUICK_ACTIONS]: `Redux was designed in a very modular way, 
                    as a result developers are given full access to reducers and action types. 
                    It could be fairly tedious to setup an action flow. 
                    redux-quick-action helps abstract type strings, 
                    switch statements in reducers and many other implementation details away from you.
                    essentially forcing a many(actions) to 1 (reducer) model, 
                    which is a subset of what redux offers (many to many). 
                    The many to many model was by design to allow actions to cause "side effects" 
                    when different reducers handles same action event, 
                    which is in some cases what people want to avoid or use combo actions (see homepage) instead.`,
    [HANABI]: `[private] Hanabi is a fun project set out to be a pixel art avatar editor. 
    It is part of our jianghu.io site user management add-ons.`


};


export default class Projects extends PureComponent {

    render() {
        const pid = this.props.location.query.pid;
        let items = [pid];
        let demo = null;
        let description = descriptions[pid];
        switch (pid) {
            case REHEARSE:
                demo = <a title="Rehearse home page" target="_blank" href="https://cashsun.github.io/rehearse/">
                    <img className={styles.singleDemo} src="/img/rehearse-demo.gif"/>
                </a>;
                break;
            case REDUX_QUICK_ACTIONS:
                demo = <a title="redux-quick-action home page"
                          target="_blank" href="https://github.com/cashsun/redux-quick-action">
                    <img className={styles.singleDemo} src="/img/redux-quick-action.png"/>
                </a>;
                break;
            case HANABI:
                demo =
                    <img className={styles.singleDemo} src="/img/hanabi.gif"/>;
                break;
            case GRAPHIC_DESIGN:
                break;

            default:
                items = [
                    REHEARSE,
                    REDUX_QUICK_ACTIONS,
                    HANABI,
                    GRAPHIC_DESIGN
                ];
                break;
        }

        return (
            <div className={styles.base}>
                <Particles/>
                <Transition
                    component="ul"
                    enter={{
                        opacity: 1

                    }}
                    leave={{
                        opacity: 0
                    }}
                >
                    { items.map((item, idx) =>
                        <li key={item} style={{
                            top: 100 * idx + 20
                        }}>
                            <Link activeClassName={styles.active}
                                  to={{ pathname: pathname, query: { pid: item } }}>{item}</Link>
                        </li>
                    )}
                </Transition>
                <Transition
                    component={false} // don't use a wrapping component
                    measure={false} // don't measure component
                    enter={{
                        opacity: 1,
                        translateY: spring(0)
                    }}
                    leave={{
                        opacity: 0,
                        translateY: 100
                    }}
                >
                    {<div key={'description'} className={styles.description}>
                        <Description text={description}/>
                    </div>}

                </Transition>

                <div className={styles.demo}>
                    {demo}
                </div>
            </div>
        )
    }

}
