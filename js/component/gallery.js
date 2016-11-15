import React, { PureComponent } from 'react';
import styles from './gallery.less';

const images = [
    { href: '/img/gallery/1.jpg', lightbox: 'University Projects', title: 'Skyline - Chew The Pieces (album cover)' },
    { href: '/img/gallery/2.jpg', lightbox: 'University Projects', title: 'Skyline - Chew The Pieces (album cover)' },
    { href: '/img/gallery/4.jpg', lightbox: 'University Projects', title: 'Skyline - Chew The Pieces (album cover)' },
    { href: '/img/gallery/5.jpg', lightbox: 'University Projects', title: 'Skyline - Chew The Pieces (album cover)' },
    { href: '/img/gallery/6.jpg', lightbox: 'University Projects', title: 'Skyline - Chew The Pieces (album cover)' },
    { href: '/img/gallery/3.jpg', lightbox: 'University Projects', title: 'Shopping bag contest (custom fonts)' },
    { href: '/img/gallery/7.jpg', lightbox: 'University Projects', title: 'Chinese Studies Society Guest Speech Poster' },
    { href: '/img/gallery/8.jpg', lightbox: 'University Projects', title: 'Club Sticker' },
    { href: '/img/gallery/9.jpg', lightbox: 'University Projects', title: 'Sparkle Education' },
    { href: '/img/gallery/10.jpg', lightbox: 'University Projects', title: 'Yikun Disc Pattern' },
    { href: '/img/gallery/11.jpg', lightbox: 'University Projects', title: 'Morning Reading Club' },
    { href: '/img/gallery/12.jpg', lightbox: 'University Projects', title: 'A Green Energy Exhibition Floorplan' },
    { href: '/img/gallery/13.jpg', lightbox: 'University Projects', title: 'Shopping bag' },
    { href: '/img/gallery/50.jpg', lightbox: 'University Projects', title: 'China Image (logo)' },
    { href: '/img/gallery/51.jpg', lightbox: 'University Projects', title: 'Students Union Life Committee' },
    { href: '/img/gallery/52.jpg', lightbox: 'University Projects', title: 'A Green (not really) Toilet!' },



    {
        href: '/img/gallery/14.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/15.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/16.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/17.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/18.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/19.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/20.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/21.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/22.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/23.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/24.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/25.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/26.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/27.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/28.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/29.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/30.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/31.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/33.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },
    {
        href: '/img/gallery/34.jpg',
        lightbox: 'Home Town',
        title: 'Home Town'
    },

    { href: '/img/gallery/conversation/1.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/2.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/3.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/4.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/5.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/6.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/7.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/8.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/9.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/10.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/11.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/12.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/13.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/14.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/15.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/16.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/17.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/18.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/19.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/20.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/21.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/22.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/23.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/24.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/25.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/26.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/27.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },
    { href: '/img/gallery/conversation/28.jpg', lightbox: 'A Mulholland Drive Conversation', title: 'A Mulholland Drive Conversation' },

    { href: '/img/gallery/beijing/1.jpg', lightbox: 'Beijing', title: 'Beijing' },
    { href: '/img/gallery/beijing/2.jpg', lightbox: 'Beijing', title: 'Beijing' },
    { href: '/img/gallery/beijing/3.jpg', lightbox: 'Beijing', title: 'Beijing' },
    { href: '/img/gallery/beijing/4.jpg', lightbox: 'Beijing', title: 'Beijing' },
    { href: '/img/gallery/beijing/5.jpg', lightbox: 'Beijing', title: 'Beijing' },
    { href: '/img/gallery/beijing/6.jpg', lightbox: 'Beijing', title: 'Beijing' },
    { href: '/img/gallery/beijing/7.jpg', lightbox: 'Beijing', title: 'Beijing' },
    { href: '/img/gallery/beijing/8.jpg', lightbox: 'Beijing', title: 'Beijing' },
    { href: '/img/gallery/beijing/9.jpg', lightbox: 'Beijing', title: 'Beijing' },
    { href: '/img/gallery/beijing/10.jpg', lightbox: 'Beijing', title: 'Beijing' },
    { href: '/img/gallery/beijing/11.jpg', lightbox: 'Beijing', title: 'Beijing' },

    { href: '/img/gallery/playboy/1.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },
    { href: '/img/gallery/playboy/2.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },
    { href: '/img/gallery/playboy/3.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },
    { href: '/img/gallery/playboy/4.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },
    { href: '/img/gallery/playboy/5.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },
    { href: '/img/gallery/playboy/6.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },
    { href: '/img/gallery/playboy/7.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },
    { href: '/img/gallery/playboy/8.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },
    { href: '/img/gallery/playboy/9.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },
    { href: '/img/gallery/playboy/10.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },
    { href: '/img/gallery/playboy/11.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },
    { href: '/img/gallery/playboy/12.jpg', lightbox: 'The Ultimate Goal of a Playboy', title: 'The Ultimate Goal of a Playboy' },

];

export default class Gallery extends PureComponent {

    render() {
        let currentGroup = null;

        const gallery = images.map((i, idx) => {
            let divider = currentGroup === i.lightbox ? null :
                <div className={styles.divider}>
                    <span>{i.lightbox}</span>
                </div>;
            currentGroup = i.lightbox;
            return <div key={idx} className={styles.base}>
                {divider}
                <a className={styles.thumbnail} href={i.href} data-lightbox={i.lightbox}
                   data-title={i.title}>
                    <img src={i.href.replace(/\.jpg$/, 'thumb.jpg')}/>
                </a>
            </div>
        });

        return <div className={styles.base}>
            {gallery}
        </div>

    }

}
