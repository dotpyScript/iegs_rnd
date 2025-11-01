# WelcomeSection Component Usage

The `WelcomeSection` component displays a personalized welcome message with user profile, pending stats, and quick action buttons.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `userName` | string | 'Admin' | The name of the user |
| `userAvatar` | string | (default image) | URL to user's profile image |
| `pendingApprovals` | number | 21 | Number of pending approvals |
| `leaveRequests` | number | 14 | Number of leave requests |
| `onAddSchedule` | function | null | Handler for Add Schedule button |
| `onAddRequest` | function | null | Handler for Add Request button |

## Features

- ✅ **Rounded profile image** with ring border and shadow
- ✅ **Personalized welcome message** with colored username
- ✅ **Stats display** with colored numbers (orange for approvals, blue for leave requests)
- ✅ **Two action buttons** - Add Schedule (white) and Add Request (primary blue)
- ✅ **Fully responsive** - stacks on mobile, side-by-side on desktop
- ✅ **Smooth animations** with Framer Motion
- ✅ **Hover effects** on profile image and buttons

## Usage Example

```jsx
import WelcomeSection from '../components/layout/WelcomeSection';

<WelcomeSection
  userName="Admin"
  userAvatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
  pendingApprovals={21}
  leaveRequests={14}
  onAddSchedule={() => console.log('Add Schedule')}
  onAddRequest={() => console.log('Add Request')}
/>
```

## Visual Layout

```
┌────────────────────────────────────────────────────────────────┐
│  [👤]  Welcome back, Admin                  [Add Schedule] [Add Request] │
│        You have 21 pending approvals & 14 leave request          │
└────────────────────────────────────────────────────────────────┘
```

## Customization

### Different User

```jsx
<WelcomeSection
  userName="John Doe"
  userAvatar="https://example.com/user.jpg"
  pendingApprovals={5}
  leaveRequests={2}
/>
```

### Custom Handlers

```jsx
const handleSchedule = () => {
  // Open schedule modal
  setShowScheduleModal(true);
};

const handleRequest = () => {
  // Open request form
  setShowRequestModal(true);
};

<WelcomeSection
  userName="Sarah"
  onAddSchedule={handleSchedule}
  onAddRequest={handleRequest}
/>
```

## Color Coding

- **Pending Approvals**: Orange (`text-orange-500`)
- **Leave Requests**: Blue (`text-blue-500`)
- **User Name**: Primary Blue (`text-primary-600`)

## Positioning

- **Left Side**: Profile image + Welcome text + Stats
- **Right Side**: Two action buttons
- **Mobile**: Stacks vertically with full width buttons
- **Desktop**: Side-by-side layout

