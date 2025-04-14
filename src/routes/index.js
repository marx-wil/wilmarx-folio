import {Route, Routes} from 'react-router-dom';
// layout
import MainLayout from "../layout/main";

// pages
import Default from '../pages/default';

// HOC
const DefaultView = MainLayout(Default);
const Router = () => {
return (
<Routes>
    <Route path="/" element={<DefaultView />} />
</Routes>
)
}

export default Router;
