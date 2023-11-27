// const list = [
//   {
//     thumbnail: "https://crushingit.tech/hackathon-assets/payment.png",
//     title: "Customize your online store",
//     description:
//       "Choose a theme and add your logo, colors, and images to reflect your brand.",
//     url: "https://help.shopify.com/en/manual/domains",
//     actions: [
//       {
//         name: "Customize theme",
//         type: "primary",
//       },
//     ],
//   },
//   {
//     thumbnail: "https://crushingit.tech/hackathon-assets/product.png",
//     title: "Add your first product",
//     description:
//       "Write a description, add photos, and set pricing for the products you plan to sell",
//     url: "https://help.shopify.com/en/manual/products/add-update-products",
//     actions: [
//       {
//         name: "Add product",
//         type: "primary",
//       },
//       {
//         name: "Import product",
//         type: "secondary",
//       },
//     ],
//   },
//   {
//     thumbnail: "https://crushingit.tech/hackathon-assets/website.png",
//     title: "Add a custom domain",
//     description:
//       "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
//     url: "https://help.shopify.com/en/manual/domains",
//     actions: [
//       {
//         name: "Add domain",
//         type: "primary",
//       },
//     ],
//   },
//   {
//     thumbnail: "https://crushingit.tech/hackathon-assets/customise-store.png",
//     title: "Name your store",
//     description:
//       "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.",
//     url: "https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/setup-business-settings#set-or-change-your-online-store-name-and-legal-business-name",
//     actions: [
//       {
//         name: "Name store",
//         type: "primary",
//       },
//     ],
//   },
//   {
//     thumbnail: "https://crushingit.tech/hackathon-assets/name-store.png",
//     title: "Setup a payment provider",
//     description:
//       "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.",
//     url: "https://help.shopify.com/en/manual/payments",
//     actions: [
//       {
//         name: "Setup payment",
//         type: "primary",
//       },
//     ],
//   },
// ];

function app() {
  const notificationBtn = document.getElementById("notification-button");
  const notificationPopup = document.getElementById("notification-popup");

  function openNotificationMenu() {
    notificationBtn.setAttribute("aria-expanded", "true");
    const menuItems = notificationPopup.querySelectorAll('[role="menuitem"]');
    menuItems.item(0).focus();

    notificationPopup.addEventListener("keyup", function (event) {
      if (event.key == "Escape") {
        toggleNotificationMenu();
      }
    });
  }

  function closeNotificationMenu() {
    notificationBtn.setAttribute("aria-expanded", "false");
    notificationBtn.focus();
  }

  function toggleNotificationMenu(event) {
    const isExpanded = notificationBtn.getAttribute("aria-expanded") === "true";
    notificationPopup.classList.toggle("active");

    if (isExpanded) {
      closeNotificationMenu();
    } else {
      openNotificationMenu();
    }
  }

  notificationBtn.addEventListener("click", toggleNotificationMenu);
}

app();
