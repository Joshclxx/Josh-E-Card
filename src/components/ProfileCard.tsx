import { MapPin } from "lucide-react";
import { fullName, profile } from "../profile";

export function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="portrait-frame">
        <img
          className="portrait"
          src={profile.portrait}
          alt={`${fullName} wearing a navy polo against an orange and navy creative background`}
          width="1254"
          height="1254"
          fetchPriority="high"
        />
      </div>
      <div className="profile-details">
        <h1>
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <p className="professional-role">{profile.role}</p>
        <p className="location flex items-center">
          <MapPin aria-hidden="true" fill="currentColor" />
          <span>{profile.location}</span>
        </p>
      </div>
    </div>
  );
}
