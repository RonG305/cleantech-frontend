export const providerSidebarItems = [
  {
    title: "Overview",
    url: "/provider/dashboard",
    icon: "solar:widget-5-linear",
  },

  {
    title: "Jobs",
    icon: "solar:clipboard-list-linear",
    url: "/provider/dashboard/jobs",
  },

  {
    title: "Services",
    icon: "solar:broom-linear",
  },

  {
    title: "Calendar",
    url: "/provider/calendar",
    icon: "solar:calendar-linear",
  },

  {
    title: "Customers",
    icon: "solar:users-group-rounded-linear",
  },

  {
    title: "Earnings",
    icon: "solar:wallet-money-linear",
    children: [
      {
        title: "Earnings Overview",
        url: "/provider/earnings",
      },
      {
        title: "Payouts",
        url: "/provider/earnings/payouts",
      },
      {
        title: "Invoices",
        url: "/provider/earnings/invoices",
      },
    ],
  },

  {
    title: "Messages",
    url: "/provider/inbox",
    icon: "solar:inbox-linear",
  },

  {
    title: "Reports",
    icon: "solar:chart-linear",
   
  },

  {
    title: "Settings",
    icon: "solar:settings-linear",
    children: [
      {
        title: "Profile",
        url: "/provider/settings/profile",
      },
      {
        title: "Business Info",
        url: "/provider/settings/business",
      },
      {
        title: "Payment Details",
        url: "/provider/settings/payments",
      },
      {
        title: "Notifications",
        url: "/provider/settings/notifications",
      },
    ],
  },
]
