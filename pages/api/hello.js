const bodyParams = {
  query: '\n mutation CartLineAdd($cartId: ID!, $lines: [CartLineInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {\n  cartLinesAdd(cartId: $cartId, lines: $lines) {\n    cart {\n      ...CartFragment\n    }\n    userErrors {\n      field\n      message\n    }\n  }\n}\n    \n    fragment CartFragment on Cart {\n  id\n  checkoutUrl\n  buyerIdentity {\n    countryCode\n    customer {\n      id\n      email\n      firstName\n      lastName\n      displayName\n    }\n    email\n    phone\n  }\n  lines(first: $numCartLines) {\n    edges {\n      node {\n        id\n        quantity\n        attributes {\n          key\n          value\n        }\n        merchandise {\n          ... on ProductVariant {\n            id\n            availableForSale\n            compareAtPriceV2 {\n              ...MoneyFragment\n            }\n            priceV2 {\n              ...MoneyFragment\n            }\n            requiresShipping\n            title\n            image {\n              ...ImageFragment\n            }\n            product {\n              handle\n              title\n            }\n            quantityAvailable\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n  estimatedCost {\n    subtotalAmount {\n      ...MoneyFragment\n    }\n    totalAmount {\n      ...MoneyFragment\n    }\n    totalDutyAmount {\n      ...MoneyFragment\n    }\n    totalTaxAmount {\n      ...MoneyFragment\n    }\n  }\n  note\n  attributes {\n    key\n    value\n  }\n  discountCodes {\n    code\n  }\n}\n    \n\n    fragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\n    \n\n    fragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n',
  variables: {
    cartId: 'gid://shopify/Cart/a65be95fa42981fcf1d3e8e6219e2570',
    lines: [
      {
        merchandiseId: `gid://shopify/ProductVariant/43447688822999`,
        quantity: 2,
      },
    ],
  },
};

fetch('https://opi-uki.myshopify.com/api/2022-10/graphql.json', {
  headers: {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'content-type': 'application/json',
    'x-shopify-storefront-access-token': 'f2b819b92073d23d4e5f7fca536aa38e',
  },
  body: JSON.stringify(bodyParams),
  method: 'POST',
}).then((response) => response.json()).then(() => {
  //
}).catch(() => {
  //
});
