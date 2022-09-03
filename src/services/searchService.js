import * as request from '~/utils/httpRequest';

export const search = (q, type = 'less') => {
    try {
        const res = request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};
