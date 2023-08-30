import React from 'react';
import {useTypedSelector} from "./lib/hooks/useTypedSelector";
const User: React.FC = () => {
    const state = useTypedSelector(state => state.user)
    return (
        <div>

        </div>
    );
};

export default User;