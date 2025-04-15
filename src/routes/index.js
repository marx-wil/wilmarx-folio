import {Route, Routes} from 'react-router-dom';
// layout
import MainLayout from "../layout/main";

// pages
import Default from '../pages/default';
import About from '../pages/about';

// HOC
const DefaultView = MainLayout(Default);
const AboutView = MainLayout(About);

const Router = () => {
return (
<Routes>
    <Route path="/" element={<DefaultView />} />
    <Route path="/about" element={<AboutView />} />
</Routes>
)
}

export default Router;
