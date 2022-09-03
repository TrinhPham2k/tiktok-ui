import { useEffect, useRef, useState } from 'react';

import { useDebounce } from '~/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '../../../components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';

// import * as request from '~/utils/request';
import * as apiServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();
    useEffect(() => {
        // đây dùng để kiểm tra nếu k tồn tại thì thoát và cắt bỏ dấu cách nếu ng dùng nhập dấu cách
        if (!debounced.trim()) {
            // set về mảng rỗng để xóa đi kí tự cuối cùng thì nó cũng ẩn list kết qur tìm kiếm cũ phía trc
            setSearchResult([]);
            return;
        }

        setLoading(true);

        // cach 1: dung fetch
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => setLoading(false));

        // dung axios vs promise
        // request
        //     .get('users/search', {
        //         params: {
        //             q: debounced,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         // console.log(res.data.data);
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        //  dung axios vs async await

        // const fetchApi = async () => {
        //     try {
        //         const res = await request.get('users/search', {
        //             params: {
        //                 q: debounced,
        //                 type: 'less',
        //             },
        //         });
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     } catch (error) {
        //         setLoading(false);
        //     }
        // };

        // fetchApi();

        // tach file goi tu aip services

        const fetApi = async () => {
            setLoading(true);
            const result = await apiServices.search(debounced);
            setSearchResult(result.data);
            setLoading(false);
        };
        fetApi();
    }, [debounced]);

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        }
        setSearchValue(searchValue);

        // cos thể viết ngược lại như sau

        // if (!searchValue.startsWith(' ')) {
        //     setSearchValue(searchValue);
        // }
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        // giải quyết vấn đề waring khi sử dụng tippy
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search acounts and videos"
                        spellCheck={false}
                        value={searchValue}
                        onChange={handleSearch}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
