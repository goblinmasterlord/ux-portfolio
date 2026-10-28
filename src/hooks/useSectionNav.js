import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToTarget } from '../lib/scroll';

// Jump to a home-page section from anywhere. The footer (#contact) exists on every page.
const useSectionNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (id) => {
        if (location.pathname === '/' || id === 'contact') scrollToTarget(`#${id}`);
        else navigate('/', { state: { scrollTo: id } });
    };
};

export default useSectionNav;
