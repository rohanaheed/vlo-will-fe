export const emailNavigation = [
  { id: 'inbox', name: 'Inbox', icon: 'Inbox', count: 128 },
  { id: 'drafts', name: 'Drafts', icon: 'FileText', count: 9 },
  { id: 'sent', name: 'Sent', icon: 'Send', count: 0 },
  { id: 'scheduled', name: 'Scheduled', icon: 'Clock', count: 23 },
  { id: 'spam', name: 'Spam', icon: 'ShieldAlert', count: 23 },
  { id: 'delete', name: 'Delete', icon: 'Trash2', count: 0 },
  { id: 'archive', name: 'Archive', icon: 'Archive', count: 0 },
];

export const secondaryNavigation = [
  { id: 'read_receipts', name: 'Read Receipts', icon: 'CheckSquare', count: 972 },
  { id: 'scheduled_sends', name: 'Scheduled Sends', icon: 'Clock', count: 342 },
  { id: 'follow_up', name: 'Follow-up Reminders', icon: 'BellRing', count: 128 },
  { id: 'ai_drafting', name: 'AI Email Drafting', icon: 'Sparkles', count: 8 },
];

export const extraNavigation = [
  { id: 'social', name: 'Social', icon: 'Users', count: 972 },
  { id: 'updates', name: 'Updates', icon: 'Info', count: 342 },
  { id: 'forums', name: 'Forums', icon: 'MessageSquare', count: 128 },
  { id: 'shopping', name: 'Shopping', icon: 'ShoppingCart', count: 8 },
  { id: 'promotions', name: 'Promotions', icon: 'Clock', count: 21 },
];

export const labels = [
  { id: 'label_promotions_1', name: 'Promotions', color: 'bg-yellow-500', count: 21 },
  { id: 'label_promotions_2', name: 'Promotions', color: 'bg-yellow-500', count: 21 },
];

export const topNavFolders = [
  { id: 'all_mail', name: 'All mail' },
  { id: 'unread', name: 'Unread' },
];

export const emails = [
  {
    id: 1,
    sender: 'Alice Smith',
    senderAvatar: 'https://i.pravatar.cc/150?u=alice',
    subject: 'Project Update',
    snippet: 'A SaaS (Software as a Service) platform offers cloud-based software solutions, accessible via the internet.',
    time: '1 min ago',
    tags: ['Project', 'Work'],
    isStarred: true,
    hasAttachment: true,
  },
  {
    id: 2,
    sender: 'Alice Smith',
    senderAvatar: 'https://i.pravatar.cc/150?u=alice',
    subject: 'Project Update',
    snippet: 'A SaaS (Software as a Service) platform offers cloud-based software solutions, accessible via the internet.',
    time: '1 min ago',
    tags: ['Project', 'Work'],
    isStarred: false,
    hasAttachment: true,
  },
  {
    id: 3,
    sender: 'Alice Smith',
    senderAvatar: 'https://i.pravatar.cc/150?u=alice',
    subject: 'Project Update',
    snippet: 'A SaaS (Software as a Service) platform offers cloud-based software solutions, accessible via the internet.',
    time: '1 min ago',
    tags: ['Project', 'Work'],
    isStarred: true,
    hasAttachment: true,
  },
  {
    id: 4,
    sender: 'Alice Smith',
    senderAvatar: 'https://i.pravatar.cc/150?u=alice',
    subject: 'Project Update',
    snippet: 'A SaaS (Software as a Service) platform offers cloud-based software solutions, accessible via the internet.',
    time: '1 min ago',
    tags: ['Project', 'Work'],
    isStarred: true,
    hasAttachment: true,
  },
];
