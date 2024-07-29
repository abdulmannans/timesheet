import React from "react";
import { Outlet } from "react-router-dom";

export default function WebAppLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
