import user from '../components/sidebar/user';
import { firebase, FieldValue } from '../lib/firebase';

export const doesUserNameExists =  async (userName) => {
    const result = await firebase.firestore().collection('users')
        .where('username', '==', userName).get();

    return result.docs.length > 0;
}

export const getUserByUserId = async(userId) => {
    const results = await firebase.firestore().collection('users').where('userId', '==', userId).get();

    const user = results.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));

    return user;
}

export const getSuggestedProfiles = async(userId, following) => {
    const results = await firebase.firestore().collection('users').limit('10').get();

    return results.docs.map(user => ({ ...user.data(), docId: user.id}))
        .filter(profile => profile.userId !== userId && !following.includes(profile.userId));
}

export const updateLoggedInUserFollowing = async (loggedInUserDocId, profileId, isFollowingProfile) => firebase.firestore().collection('users')
        .doc(loggedInUserDocId)
        .update({following: isFollowingProfile ? FieldValue.arrayRemove(profileId) : FieldValue.arrayUnion(profileId)
    })

export const updateFollowedUserFollowers = async(profileDocId, loggedInUserDocId, isFollowingProfile) => firebase.firestore().collection('users')
        .doc(profileDocId).update({
        followers: isFollowingProfile ? FieldValue.arrayRemove(loggedInUserDocId) : FieldValue.arrayUnion(loggedInUserDocId)
    })