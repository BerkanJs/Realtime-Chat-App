import React, { useState } from "react";
import { User, Mail, Calendar, ShieldCheck, Upload } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };
  return (
    <div className="w-full h-[100vh] bg-base-300 flex items-center justify-center pt-15 mx-auto p-6 ">
      <div className="card w-2/3 bg-base-100 shadow-xl p-6 rounded-2xl space-y-6">
        <div className="flex flex-col items-center gap-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {selectedImg || authUser.profilePic ? (
                <img
                  src={selectedImg || authUser.profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-12 h-12 text-gray-500" />
              )}
            </div>
          </div>
          <label
            className="btn btn-sm btn-outline btn-primary"
            htmlFor="upload-photo"
          >
            <Upload className="w-4 h-4 mr-1" /> Fotoğraf Güncelle
            <input
              id="upload-photo"
              type="file"
              className="hidden"
              onChange={handleImageUpload}
              disabled={isUpdatingProfile}
            />
          </label>
          <p className="text-sm text-zinc-400">
            {isUpdatingProfile
              ? "Uploading..."
              : "Click the update button to update your photo"}
          </p>
        </div>

        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            <User className="w-5 h-5" /> {authUser.fullName}
          </h2>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
            <Mail className="w-4 h-4" /> {authUser.email}
          </p>
        </div>

        <div className="divider" />

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Account Info</h3>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Member since:</span>
            </div>
            <span className="badge badge-outline">
              {authUser.createdAt?.split("T")[0]}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-600">
              <ShieldCheck className="w-5 h-5" />
              <span>Account status:</span>
            </div>
            <span className="badge badge-success">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
