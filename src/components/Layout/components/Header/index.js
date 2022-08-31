import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import images from '~/assets/images';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState } from 'react';
import AccountItem from '../AccountItem';
import Button from '../Button';
const cx = classNames.bind(styles);
function Header() {
    const [searchresult, setSearchResult] = useState([]);
    useEffect(() => {
        setInterval(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt=" " />
                </div>
                <Tippy
                    visible={searchresult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search acounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary className={cx('customer-login')} rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Login
                    </Button>
                    <Button outline disabled>
                        Register
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
