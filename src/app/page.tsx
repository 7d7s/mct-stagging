'use client'
import { useAdvancedLayout } from '@/hooks/useAdvancedLayout';
import  Home  from '@/components/home';

function HomePage() {
    useAdvancedLayout('main', 'dark'); // Set layout and theme

    return <div><Home/></div>;
}

export default HomePage;
