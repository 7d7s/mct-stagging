'use client';

import { useAdvancedLayout } from '../../hooks/useAdvancedLayout';

function AdminPage() {
  useAdvancedLayout('auth', 'dark'); // Set admin layout and theme

  return <div>Layout-01</div>;
}

export default AdminPage;
