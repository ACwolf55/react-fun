import React from "react";
import { useState } from "react/cjs/react.production.min";

export default function LandingAUthpage() {
  const [isloggedin, setislogged] = useState(false);

  return (
    <div>
      <header></header>
      <main>
        {
        isloggedin 
        ? 
        <UserNavigatorBar /> 
        : 
        <Auth />
        }
        <div className="landingPage">{routes}</div>
      </main>
    </div>
  );
}
