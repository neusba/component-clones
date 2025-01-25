/* Twitter Follow Card Component Structure */
import './TwitterFollowCard.css';
import { useState } from 'react';

export function TwitterFollowCard ({ userName, name }) {
    const [isFollowing, setIsFollowing] = useState(false)

    const buttonClassName = isFollowing? 'tw-follow-card-button-following':'tw-follow-card-button'
    const text = isFollowing? 'Following':'Follow'

    const clickOnFollow = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-follow-card-article">
            <header className="tw-follow-card-header">
                <img className="tw-follow-card-img" src="../public/user.png" alt="User image" />
                <div className="tw-follow-card-info">
                    <strong className="tw-follow-card-strong">{ name }</strong>
                    <span className="tw-follow-card-span">@{ userName }</span>
                </div>
            </header>

            <aside className="tw-follow-card-aside">
                <button className={buttonClassName} onClick={clickOnFollow}><strong>{ text }</strong></button>
            </aside>
        </article>
    )
}