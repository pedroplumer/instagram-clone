import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
// import { getSuggestedProfiles } from '../../service/firebase';


const Suggestions = ({userId}) =>  {
    const [profiles, setProfiles] = useState([]);

    useEffect( async () => {
        // const profilesData = await getSuggestedProfiles(userId);
        // setProfiles(profilesData);
        setProfiles(['aaa','bbbbb'])
    }, [userId])

    return (
        
         !profiles ? (
            <Skeleton count={10} height={150} className="mt-5"/>
         ) : (
             profiles.map((profile) => <div>aaaaaa</div>)
         )
         

        
    )

}

Suggestions.propTypes = {
    userId: PropTypes.string.isRequired
}

export default Suggestions;