# Timeless Shopify Theme

> A minimalistic Shopify Theme built with Tailwind CSS

An iteration of my archived theme [Danshari](https://github.com/mitchuman/danshari).
Inspired from the flaws (and features) of [Dawn](https://github.com/Shopify/dawn).

Fulfills Shopify's [Theme store requirements](https://shopify.dev/docs/themes/store/requirements).

## Tailwind CSS

> Configured in `snippets/tailwind.liquid`

Use the following style tag for use with Tailwind:

```html
<style type="text/tailwindcss">
  @apply ...;
</style>
```

To add custom CSS, use the **Custom CSS fields** found within the [theme editor](https://shopify.dev/docs/themes/tools/online-editor)

## Polaris Icons

> Defined in `snippets/icon.liquid`

```liquid
<!-- Example -->
{% render 'icon' with 'cart' %}
```

Refer to https://polaris.shopify.com/icons
