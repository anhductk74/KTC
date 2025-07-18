import LoginPage from "../page/login"
import Tasks from "../page/dashboard";
import User from "../page/user";

const routes = [
    {
      path: '/login',
      showOnMenu: false,
      isPublic: true,
      name: 'Login',
      index: true,
      element: <LoginPage />,
      roles: [],
    },
    {
      path: '/home',
      showOnMenu: true,
      name: 'Home',
      index: true,
      element: <Tasks />,
      roles: ['managers', 'leaders', 'users'],
    },
    {
      path: '/task',
      showOnMenu: true,
      name: 'Tasks',
      index: true,
      element: <Tasks />,
      roles: ['managers', 'leaders'],
    },
  
    // {
    //   path: '/my-tasks',
    //   showOnMenu: true,
    //   name: 'My Tasks',
    //   index: true,
    //   element: <MyTasks />,
    //   roles: ['users'],
    // },
  
    {
      path: '/security',
      showOnMenu: true,
      name: 'Security',
      index: true,
      element: <div>Security</div>,
      roles: ['sdsds'],
    },
    {
      path: '/user-management',
      showOnMenu: true,
      name: 'User',
      index: true,
      element: <User />,
      roles: ['managers'],
    },
    
  ];

export default routes;