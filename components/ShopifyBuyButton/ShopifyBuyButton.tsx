import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

export interface Props {
  domain: string;
  storefrontAccessToken: string;
  productID: string;
  componentID: string;
  moneyFormat?: string;
  options: object;
}

export const SHOPIFY_BUY_BUTTON_SCRIPT =
  "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

export default function ShopifyBuyButton({
  domain,
  storefrontAccessToken,
  productID,
  componentID,
  moneyFormat,
  options,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!window.ShopifyBuy) {
      const existingScript = document.getElementById("shopifyButton");
      // Avoid the script to be added multiple time to the DOM
      if (!existingScript) {
        loadScript();
      } else {
        setLoaded(true);
      }
    }
  }, []);

  const loadScript = () => {
    const script = document.createElement("script");
    script.src = SHOPIFY_BUY_BUTTON_SCRIPT;
    script.addEventListener("load", () => setLoaded(true));
    script.async = true;
    script.id = "shopifyButton";
    document.body.appendChild(script);
  };

  const initComponent = () => {
    if (window.ShopifyBuy) {
      const ShopifyBuy = window.ShopifyBuy;
      var client = ShopifyBuy.buildClient({
        domain: domain,
        storefrontAccessToken: storefrontAccessToken,
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent("product", {
          id: productID,
          node: document.getElementById(componentID),
          moneyFormat: moneyFormat || "%24%7B%7Bamount%7D%7D",
          options: options[0],
        });
      });
    } else {
      setTimeout(() => {
        initComponent();
      }, 100);
    }
  };

  useEffect(() => {
    if (!loaded) return;
    initComponent();
  }, [loaded]);

  return <>{loaded ? <div id={componentID}></div> : null}</>;
}
