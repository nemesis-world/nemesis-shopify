import { ShopifyBuyButton } from "../components/ShopifyBuyButton";

export default function Home() {
  const options = [
    {
      product: {
        styles: {
          product: {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px",
            },
          },
          title: {
            "font-family": "Roboto, sans-serif",
            "font-weight": "normal",
            "font-size": "16px",
          },
          button: {
            "font-family": "Raleway, sans-serif",
            ":hover": {
              "background-color": "#d72424",
            },
            "background-color": "#ef2828",
            ":focus": {
              "background-color": "#d72424",
            },
            "padding-left": "26px",
            "padding-right": "26px",
            "border-radius": "40px",
          },
          price: {
            "font-family": "Roboto, sans-serif",
          },
          compareAt: {
            "font-family": "Roboto, sans-serif",
          },
          unitPrice: {
            "font-family": "Roboto, sans-serif",
          },
        },
        contents: {
          img: false,
          title: false,
          price: false,
        },
        text: {
          button: "Buy Buy Buy",
        },
        googleFonts: ["Roboto", "Raleway"],
      },
      productSet: {
        styles: {
          products: {
            "@media (min-width: 601px)": {
              "margin-left": "-20px",
            },
          },
        },
      },
      modalProduct: {
        contents: {
          img: false,
          imgWithCarousel: false,
          button: false,
          buttonWithQuantity: true,
        },
        styles: {
          product: {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px",
            },
          },
          button: {
            "font-family": "Raleway, sans-serif",
            ":hover": {
              "background-color": "#d72424",
            },
            "background-color": "#ef2828",
            ":focus": {
              "background-color": "#d72424",
            },
            "padding-left": "26px",
            "padding-right": "26px",
            "border-radius": "40px",
          },
          title: {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "bold",
            "font-size": "26px",
            color: "#4c4c4c",
          },
          price: {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "18px",
            color: "#4c4c4c",
          },
          compareAt: {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            color: "#4c4c4c",
          },
          unitPrice: {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            color: "#4c4c4c",
          },
        },
        googleFonts: ["Raleway"],
        text: {
          button: "Buy buy buy",
        },
      },
      option: {},
      cart: {
        styles: {
          button: {
            "font-family": "Raleway, sans-serif",
            ":hover": {
              "background-color": "#d72424",
            },
            "background-color": "#ef2828",
            ":focus": {
              "background-color": "#d72424",
            },
          },
        },
        text: {
          total: "Subtotal",
          button: "Checkout",
        },
        googleFonts: ["Raleway"],
      },
      toggle: {
        styles: {
          toggle: {
            "font-family": "Raleway, sans-serif",
            "background-color": "#ef2828",
            ":hover": {
              "background-color": "#d72424",
            },
            ":focus": {
              "background-color": "#d72424",
            },
          },
        },
        googleFonts: ["Raleway"],
      },
    },
  ];

  return (
    <div>
      <h1>Hello</h1>
      <ShopifyBuyButton
        storefrontAccessToken="26bfd656f1882a0f5f65ec5e4d38ce01"
        domain="nemesis-lite.myshopify.com"
        productID="6730661625912"
        componentID="whatever"
        options={options}
      />

      <ShopifyBuyButton
        storefrontAccessToken="26bfd656f1882a0f5f65ec5e4d38ce01"
        domain="nemesis-lite.myshopify.com"
        productID="6730661625912"
        componentID="whatever2"
        options={options}
      />

      <ShopifyBuyButton
        storefrontAccessToken="26bfd656f1882a0f5f65ec5e4d38ce01"
        domain="nemesis-lite.myshopify.com"
        productID="6730661625912"
        componentID="whatever3"
        options={options}
      />
    </div>
  );
}
