import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faChevronRight, faHouseMedical } from '@fortawesome/free-solid-svg-icons';
import { ArticleContainer } from './components/ArticleContainer';

import styles from './ArticleDetail.module.scss';

const cx = classNames.bind(styles);

const ArticleDetail = () => {
    return (
        <>
            <section id="articleDetailHeader" className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('d-sm-block', 'wrapper-item', 'text-center')}>
                        <h1 className={cx('title')}>TIN TỨC</h1>
                        <div className={cx('d-sm-block', 'navigator-wrapper')}>
                            <Link to="">
                                <FontAwesomeIcon icon={faHouseMedical} className={cx('white', 'home-icon')} />
                            </Link>
                            <FontAwesomeIcon icon={faChevronRight} className={cx('white', 'arrow-icon')} />
                            <h3 className={cx('navigator-item')}>Tin tức</h3>
                            <FontAwesomeIcon icon={faChevronRight} className={cx('white', 'arrow-icon')} />
                            <h3 className={cx('navigator-item')}>Tin tức</h3>
                        </div>
                    </div>
                </div>
            </section>
            <div className={cx('d-block')}>
                <ArticleContainer></ArticleContainer>
            </div>
        </>
    );
};

export default ArticleDetail;
