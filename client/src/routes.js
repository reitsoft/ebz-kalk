import Dashboard from "views/Dashboard.js";
import Blocks from "views/Blocks"
import Components from "views/Components"
import Articles from "views/Articles"

import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
// import Icons from "views/Icons.js";
// import Maps from "views/Maps.js";
// import Notifications from "views/Notifications.js";
// import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-chart-bar",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/blocks",
    name: "Blocks",
    icon: "fas fa-th-large",
    component: Blocks,
    layout: "/admin",
  },
  {
    path: "/components",
    name: "Components",
    icon: "fas fa-project-diagram",
    component: Components,
    layout: "/admin",
  },
  {
    path: "/articles",
    name: "Articles",
    icon: "fas fa-puzzle-piece",
    component: Articles,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "fas fa-user",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "fas fa-list",
    component: TableList,
    layout: "/admin",
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
