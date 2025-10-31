# PageHeader Component Usage Examples

The `PageHeader` component is a reusable header for all pages in the dashboard. It provides a consistent layout with title, breadcrumbs, and action buttons.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | 'Admin Dashboard' | The main page title |
| `breadcrumbs` | array | [] | Array of breadcrumb objects |
| `showExport` | boolean | true | Show/hide the Export dropdown |
| `showYearSelector` | boolean | true | Show/hide the year selector button |
| `yearRange` | string | '2024-2025' | Year range text |
| `customActions` | ReactNode | null | Custom action buttons |
| `onExport` | function | null | Export handler function |

## Breadcrumb Object Structure

```javascript
{
  icon: LucideIconComponent,  // Optional - Icon component from lucide-react
  label: 'Page Name',         // Required - Text label
  href: '/path'               // Optional - Link URL (makes it clickable)
}
```

## Usage Examples

### 1. Overview Page (Default)
```jsx
import PageHeader from '../components/layout/PageHeader';
import { FolderKanban } from 'lucide-react';

<PageHeader
  title="Admin Dashboard"
  breadcrumbs={[
    { icon: FolderKanban, label: 'Admin' },
    { label: 'Admin Dashboard' }
  ]}
  showExport={true}
  showYearSelector={true}
  yearRange="2024-2025"
  onExport={(type) => console.log(`Exporting ${type}`)}
/>
```

### 2. Projects Page
```jsx
import PageHeader from '../components/layout/PageHeader';
import { Home, FolderKanban } from 'lucide-react';

<PageHeader
  title="R&D Projects"
  breadcrumbs={[
    { icon: Home, label: 'Home', href: '/' },
    { icon: FolderKanban, label: 'Projects' }
  ]}
  showExport={true}
  showYearSelector={false}
  onExport={(type) => handleProjectsExport(type)}
/>
```

### 3. Team Page
```jsx
import PageHeader from '../components/layout/PageHeader';
import { Home, Users } from 'lucide-react';

<PageHeader
  title="Team Management"
  breadcrumbs={[
    { icon: Home, label: 'Home', href: '/' },
    { icon: Users, label: 'Team' }
  ]}
  showExport={true}
  showYearSelector={false}
  onExport={(type) => handleTeamExport(type)}
/>
```

### 4. Drone Operations Page
```jsx
import PageHeader from '../components/layout/PageHeader';
import { Home, Plane } from 'lucide-react';

<PageHeader
  title="Drone Operations"
  breadcrumbs={[
    { icon: Home, label: 'Home', href: '/' },
    { icon: Plane, label: 'Drone Ops' }
  ]}
  showExport={true}
  showYearSelector={true}
  yearRange="2024-2025"
  onExport={(type) => handleDroneExport(type)}
/>
```

### 5. Reports Page (No Export, Custom Actions)
```jsx
import PageHeader from '../components/layout/PageHeader';
import { Home, FileText, Plus, Filter } from 'lucide-react';
import Button from '../ui/Button';

<PageHeader
  title="Reports"
  breadcrumbs={[
    { icon: Home, label: 'Home', href: '/' },
    { icon: FileText, label: 'Reports' }
  ]}
  showExport={false}
  showYearSelector={false}
  customActions={
    <>
      <Button variant="secondary" icon={Filter}>Filter</Button>
      <Button icon={Plus}>New Report</Button>
    </>
  }
/>
```

### 6. Settings Page (Simple, No Actions)
```jsx
import PageHeader from '../components/layout/PageHeader';
import { Home, Settings } from 'lucide-react';

<PageHeader
  title="Settings"
  breadcrumbs={[
    { icon: Home, label: 'Home', href: '/' },
    { icon: Settings, label: 'Settings' }
  ]}
  showExport={false}
  showYearSelector={false}
/>
```

### 7. Nested Page (Multi-level Breadcrumb)
```jsx
import PageHeader from '../components/layout/PageHeader';
import { Home, FolderKanban, FileText } from 'lucide-react';

<PageHeader
  title="Project Details"
  breadcrumbs={[
    { icon: Home, label: 'Home', href: '/' },
    { icon: FolderKanban, label: 'Projects', href: '/projects' },
    { icon: FileText, label: 'Autonomous Drone X1' }
  ]}
  showExport={true}
  showYearSelector={false}
  onExport={(type) => handleProjectDetailExport(type)}
/>
```

### 8. With Custom Export Handler
```jsx
const handleExport = async (type) => {
  try {
    // Show loading state
    setExporting(true);
    
    // Call API
    const response = await exportService.exportData(type, 'overview');
    
    // Download file
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `overview-${type}-${Date.now()}.${type}`;
    a.click();
    
    // Cleanup
    window.URL.revokeObjectURL(url);
    setExporting(false);
    
    // Show success message
    toast.success(`Exported as ${type.toUpperCase()}`);
  } catch (error) {
    console.error('Export failed:', error);
    setExporting(false);
    toast.error('Export failed');
  }
};

<PageHeader
  title="Admin Dashboard"
  breadcrumbs={[...]}
  onExport={handleExport}
/>
```

## Features

- ✅ Fully responsive (mobile-first)
- ✅ Smooth animations with Framer Motion
- ✅ Click-outside-to-close for dropdown
- ✅ Customizable breadcrumbs with icons
- ✅ Optional export functionality
- ✅ Optional year selector
- ✅ Support for custom action buttons
- ✅ Consistent with design system
- ✅ Hover effects and transitions

## Best Practices

1. **Always include breadcrumbs** for better navigation
2. **Use icons** for the first breadcrumb item (typically Home or parent section)
3. **Last breadcrumb** should be the current page (not clickable)
4. **Provide onExport handler** when showExport is true
5. **Use custom actions** when you need page-specific buttons
6. **Hide year selector** on pages where it doesn't make sense

