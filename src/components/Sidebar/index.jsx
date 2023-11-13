import React, { useState } from "react";

import {
  Children,
  SidebarContainer,
  SidebarWrapper,
} from "./SidebarStyles";

import { SidebarItems } from "../Index";

const MOBILE_VIEW = window.innerWidth < 468;

export default function Sidebar({ children }) {
    const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);
  
    const handleSidebarDisplay = (e) => {
      e.preventDefault();
      if (window.innerWidth > 468) {
        setDisplaySidebar(!displaySidebar);
      } else {
        setDisplaySidebar(false);
      }
    };
  
    return (
      <React.Fragment>
        <SidebarContainer displaySidebar={displaySidebar}>
          <SidebarWrapper>
              {/* Render the SidebarItems component */}
            <SidebarItems displaySidebar={displaySidebar} />
          </SidebarWrapper>
        </SidebarContainer>
              {/* Render the children */}
        <Children displaySidebar={displaySidebar}>{children}</Children>
      </React.Fragment>
    );
  }