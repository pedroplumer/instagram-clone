import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const User = ({ username, fullname }) =>

    !username || !fullname ? (
        <Skeleton count={1} height={61}/>
    ) : (
        <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-6 items-center">
            <div className="flex items-center justify-between col-span-1">
                <img className="rounded-full w-16 flex mr-3"
                    src={`/images/avatars/${username}.png`}
                    alt=""
                />
            </div>
            <div className="col-span-3">
                <p className="font-bold text-sm">{username}</p>
                <p className="text-sm">{fullname}</p>
            </div>
        </Link>);



User.propTypes = {
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired
}


export default memo(User);