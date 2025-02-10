'use client'
import { useAdvancedLayout } from '@/hooks/useAdvancedLayout';
//import  Null  from '../components/null';
import Aboutus from '@/components/aboutus';

function About() {
    useAdvancedLayout('main', 'dark'); // Set layout and theme

    return <div><Aboutus/></div>;
}

export default About;
