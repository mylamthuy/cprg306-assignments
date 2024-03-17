"use client";
// Import the useUserAuth hook
//import { useUserAuth } from "./_utils/auth-context";
import SignIn from "./_utils/sign-in";

export default function Page() {
 
// Use the useUserAuth hook to get the user object and the login and logout functions
//const { user } = useUserAuth();

return (
    <div className="m-2 p-2">
      <h1 className="text-4xl font-bold m-2">Shopping List App</h1>
      <SignIn />
    </div>
);
}

// "use client";

// import { useUserAuth } from "./_utils/auth-context";

// export default function Page() {
//   const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

//   console.log(user);

//   return (
//     <div>
//       <h1>Week 8</h1>
//       <p>{user ? "Hi there!" : "Please sign in"}</p>
//       <p>{user?.email}</p>
//       {user && user.displayName}
//       <p>
//         {user ? (
//           <button onClick={firebaseSignOut}>Sign Out</button>
//         ) : (
//           <button onClick={gitHubSignIn}>Sign In with GitHub</button>
//         )}
//       </p>
//     </div>
//   );
// }
