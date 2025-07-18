import { NavLink } from "react-router";
import { useAuthStore } from "../../useAuthStore";
import routes from "../../routes/route";

export default function Navbar() {
    const { loggedInUser, logOut } = useAuthStore((state) => state);
    const userRoles: string[] = loggedInUser?.roles?.map((role: any) => role.code?.toLowerCase()) || [];
    return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#e1e1e1',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingInline: 24,
        paddingBlock: 12,
      }}
    >
      <nav style={{ display: 'flex', gap: '16px' }}>
        {routes.map((route) => {
          if (route.showOnMenu === false) {
            return null; // Skip routes that should not be shown on the menu
          }

          const routeRoles: string[] = route.roles?.map((role: string) => role?.toLowerCase()) || [];
          const hasAccess = userRoles.some((role: string) => {
            return role === 'administrators' || routeRoles.includes(role?.toLowerCase());
          });

          if (!hasAccess) {
            return null; // Skip routes that the user does not have access to
          }

          return (
            <NavLink key={route.path} to={route.path} style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : { fontWeight: 'normal' })}>
              {route.name}
            </NavLink>
          );
        })}
      </nav>
      <div>
        <span style={{ marginRight: '16px' }}>Welcome, {loggedInUser?.username || 'Guest'}</span>
        <button
          onClick={async () => {
            logOut().then(() => {
              // Redirect to login page after logout
              window.location.href = '/login';
            });
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}