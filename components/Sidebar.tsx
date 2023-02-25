"use client"

import { signOut, useSession } from "next-auth/react";
import { collection, orderBy, query } from "firebase/firestore"; 
import {useCollection} from "react-firebase-hooks/firestore";
import { db } from "../firebase"
import NewChat from "./NewChat"
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const {data: session} = useSession();

  const [chats, loading, error] = useCollection(
    session && query(collection(db, "users", session.user?.email!, "chats"), orderBy("createdAt", "asc")) 
  );

  return (
    <div className="p-2  flex flex-col h-screen">
        <div className="flex-1"> 
           <div>
            {/* NewChat */}
           <NewChat />
                {/* ModelSelection */}
            <div className="hidden sm:inline">
               <ModelSelection />
            </div>  
           <div className="flex flex-col space-y-2 my-2">

          {loading && (
            <div className="animate-pulse text-center text-white">
              <p>Loading Chats...</p>
            </div>
          )}


            {/* Map trhrough the chatRows */}
           {chats?.docs.map(chat => (
              <ChatRow key={chat.id} id={chat.id}/>
            ))}
           </div>
           </div>
        </div>
        {session && (<div
        className="chatRow justify-between hover:bg-gray-700/50"  onClick={() => signOut()}>
         <div className="space-x-2 flex items-center">
         <ArrowRightOnRectangleIcon className="w-5 h-5"/>
          <p className="text-white text-lg">Log out</p>
         </div>
          <img
        
        src={session.user?.image!}
        alt="profile pic"
        className="h-9 w-9 rounded-full cursor-pointer mx-auto  hover:opacity-50
        "
        />
          </div>)}
    </div>
  );
}

export default Sidebar