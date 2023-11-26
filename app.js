const list = [
  {
    thumbnail: "https://crushingit.tech/hackathon-assets/payment.png",
    title: "Customize your online store",
    description:
      "Choose a theme and add your logo, colors, and images to reflect your brand.",
    url: "https://help.shopify.com/en/manual/domains",
    actions: [
      {
        name: "Customize theme",
        type: "primary",
      },
    ],
  },
  {
    thumbnail: "https://crushingit.tech/hackathon-assets/product.png",
    title: "Add your first product",
    description:
      "Write a description, add photos, and set pricing for the products you plan to sell",
    url: "https://help.shopify.com/en/manual/products/add-update-products",
    actions: [
      {
        name: "Add product",
        type: "primary",
      },
      {
        name: "Import product",
        type: "secondary",
      },
    ],
  },
  {
    thumbnail: "https://crushingit.tech/hackathon-assets/website.png",
    title: "Add a custom domain",
    description:
      "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
    url: "https://help.shopify.com/en/manual/domains",
    actions: [
      {
        name: "Add domain",
        type: "primary",
      },
    ],
  },
  {
    thumbnail: "https://crushingit.tech/hackathon-assets/customise-store.png",
    title: "Name your store",
    description:
      "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.",
    url: "https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/setup-business-settings#set-or-change-your-online-store-name-and-legal-business-name",
    actions: [
      {
        name: "Name store",
        type: "primary",
      },
    ],
  },
  {
    thumbnail: "https://crushingit.tech/hackathon-assets/name-store.png",
    title: "Setup a payment provider",
    description:
      "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.",
    url: "https://help.shopify.com/en/manual/payments",
    actions: [
      {
        name: "Setup payment",
        type: "primary",
      },
    ],
  },
];
const setupList = document.querySelector(".setup-list");

function makeList(_list) {
  for (const item of _list) {
    const item = document.createElement("li");
    item.className = "setup";
    const itemComponent = makeItemTemplate(item);
    item.innerText = itemComponent;

    setupList.appendChild(itemComponent);
  }
}

function makeItemTemplate({ thumbnail, title, description, actions, url }) {
  return `
    <button>
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
          stroke-linejoin="round" stroke-dasharray="4 6" />
      </svg>
    </button>
    <div class="setup-item-content">
      <div class="setup-item-title text-large">${title}</div>
      <div class="setup-item-content">
        <p>${description}<a
            href=${url} target="_blank" rel="noopener noreferrer">Learn
            more</a></p>
      </div>
    </div>
    <img class="setup-item-thumbnail" src=${thumbnail} alt="thumbnail" />
  `;
}

function initializeApp() {
  makeList(list);
}

// document.addEventListener("load", initializeApp);
// ${actions.map((action) => {
//     return (
//       <button
//         class={`btn ${
//           action.type === primary ? "btn-primary" : "btn-secondary"
//         } text-small`}
//       >
//         {action.name}
//       </button>
//     );
//   })}
