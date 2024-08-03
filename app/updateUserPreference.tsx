import { db } from './firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const updateUserPreferences = async (userId: string, preferences: { likes: string[]; }) => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, { preferences });
    console.log('User preferences updated successfully');
  } catch (error) {
    console.error('Error updating user preferences:', error);
  }
};

// Example usage
updateUserPreferences('USER_ID', { likes: ['news', 'technology'] });
