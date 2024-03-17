"use client";
import Link from "next/link";
import { useUserAuth } from "./auth-context";

export default function SignIn() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    async function handleSignIn() {
        try {
            await gitHubSignIn();
        }
        catch (error){
            console.error(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        }
        catch (error){
            console.error(error);
        }
    }

    return (
        <div>
        {user ? (
            <div>
                <p className="text-lg">Signed in as {user.displayName} ({user.email}).</p>
                <button onClick={handleSignOut} className="text-lg hover:underline">Sign Out</button><br/>
                <Link href="/week-8/shopping-list" className="hover:underline">Continue to your Shopping List</Link>
            </div>
        ) : (
            <button onClick={handleSignIn} className="text-lg hover:underline">Sign In with GitHub</button>
        )}
        </div>
        )
    }