import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, className, fallBack: customfallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setfallBack] = useState('');
    const handleError = () => {
        setfallBack(customfallBack);
    };
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            {...props}
            onError={handleError}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};
export default Image;
