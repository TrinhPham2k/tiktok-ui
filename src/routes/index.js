import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Following';
import Following from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

import routerConfig from '~/config/routes';

const publicRoutes = [
    { path: routerConfig.home, component: Home },
    { path: routerConfig.following, component: Following },
    { path: routerConfig.profile, component: Profile },
    { path: routerConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routerConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
