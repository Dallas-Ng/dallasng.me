import 'firebase/analytics';
import Firebase from 'firebase/app';

const FIREBASE_CONFIG = {
	apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FB_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENT_ID
};

if (!Firebase.apps.length) {
	Firebase.initializeApp(FIREBASE_CONFIG);
}

export default Firebase;
