import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import SuggestedProfile from './suggested-profile'
import { getSuggestedProfiles } from '../../service/firebase';


const Suggestions = ({userId, following, loggedInUserDocId}) =>  {
    const [profiles, setProfiles] = useState([]);

    useEffect( async () => {
        if(userId){
            const profilesData = await getSuggestedProfiles(userId, following);
            setProfiles(profilesData);
        }
    }, [userId])

    return !profiles ? (
            <Skeleton count={10} height={150} className="mt-5"/>
         ) : (
             <div className="rounded flex flex-col">
                 <div className="text-sm flex items-center align-items justify-between mb-2">
                    <p className="font-bold text-gray-base">Suggetions for you</p>
                 </div>
                 <div className="mt-4 grip gap-5">
                     {profiles.map(profile => (
                        <SuggestedProfile 
                            key={profile?.docId}
                            profileDocId={profile.docId}
                            username={profile.username}
                            profileId={profile.userId}
                            userId={userId}
                            loggedInUserDocId={loggedInUserDocId}
                        />
                     ))}

                 </div>

             </div>
         )
        

}

Suggestions.propTypes = {
    userId: PropTypes.string.isRequired,
    following: PropTypes.array.isRequired,
    loggedInUserDocId: PropTypes.string.isRequired
}

export default Suggestions;