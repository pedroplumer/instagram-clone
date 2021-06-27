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

// export const getSuggestedProfiles = async(userId) => {



//     return profiles;
// }