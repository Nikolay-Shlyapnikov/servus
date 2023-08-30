import React from 'react';
import { withProviders } from "./providers";
import { Routing } from "pages";
import './styles/index.scss'
import {Link} from "react-router-dom";
const App = () => {
    return (
        <>
            <Link className={'button'} to={'/params'}>Страница параметров</Link>
            <Link className={'button'} to={'/'}>Домашняя страница</Link>
            <Routing />
        </>
    )
}

export default withProviders(App);
