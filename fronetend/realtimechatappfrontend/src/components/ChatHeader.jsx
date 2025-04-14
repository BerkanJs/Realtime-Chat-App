import React from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { X, User } from "lucide-react";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        {/* Sol taraf: avatar + isim */}
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="size-10 rounded-full relative flex items-center justify-center bg-gray-200">
              {selectedUser.profilePic ? (
                <img
                  src={selectedUser.profilePic}
                  alt=""
                  className="size-10 rounded-full object-cover"
                />
              ) : (
                <User className="text-gray-500" />
              )}
            </div>
          </div>
          <div>
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Sağ taraf: kapatma butonu */}
        <button
          onClick={() => setSelectedUser(null)}
          className="p-2 rounded-full hover:bg-base-200 transition"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
