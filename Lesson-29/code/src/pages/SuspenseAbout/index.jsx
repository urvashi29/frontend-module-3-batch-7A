import React from "react";
// import Profile from '../../components/Profile';

const Profile = React.lazy(() => import("../../components/Profile"));

// api call & dislaying data or any async
const index = () => {
  return (
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <Profile />
    </React.Suspense>
  );
};

export default index;
