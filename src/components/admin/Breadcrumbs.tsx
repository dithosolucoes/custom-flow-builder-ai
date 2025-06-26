
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const routeMap: Record<string, string> = {
  admin: 'Dashboard',
  users: 'Usuários',
  analytics: 'Analytics',
  builder: 'Builder',
  settings: 'Configurações',
  docs: 'Documentação',
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Remove 'admin' from the start if present
  const adminIndex = pathnames.indexOf('admin');
  const relevantPaths = adminIndex !== -1 ? pathnames.slice(adminIndex) : pathnames;

  if (relevantPaths.length <= 1) {
    return null;
  }

  return (
    <div className="mb-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/admin" className="flex items-center gap-1">
                <Home className="h-3 w-3" />
                Dashboard
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {relevantPaths.slice(1).map((pathname, index, array) => {
            const href = `/admin/${relevantPaths.slice(1, index + 2).join('/')}`;
            const isLast = index === array.length - 1;
            const displayName = routeMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return (
              <React.Fragment key={pathname}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{displayName}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={href}>{displayName}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
