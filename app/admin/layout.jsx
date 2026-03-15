import AdminRouteGuard from "./AdminRouteGuard";

export default function AdminLayout({ children }) {
  return <AdminRouteGuard>{children}</AdminRouteGuard>;
}
