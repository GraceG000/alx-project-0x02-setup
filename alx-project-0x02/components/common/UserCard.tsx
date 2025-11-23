// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="text-pink-700 mb-1">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-pink-700 mb-1">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="text-pink-700">
        <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
      <p className="text-pink-700">
        <strong>Geo:</strong> {user.geo?.lat}, {user.geo?.lng}
      </p>
       <p className="text-pink-700 mb-1">
        <strong>Phone:</strong> {user.phone}
      </p>
       <p className="text-pink-700 mb-1">
        <strong>Website:</strong> {user.website}
      </p>
      <p className="text-pink-700">
        <strong>Company:</strong> {user.company.name}, {user.company.catachPhrase}, {user.company.bs}
      </p>
    </div>
  );
};

export default UserCard;
