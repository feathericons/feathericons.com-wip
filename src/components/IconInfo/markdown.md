# The <code><IconName /></code> Icon

<BentoBox />

<br />

## Get Started

[Feather]() is a collection of simply beautiful open source icons. Each icon is designed on a `24x24` grid with an
emphasis on simplicity, consistency, and flexibility.

Get started with JavaScript ([docs here](https://github.com/feathericons/feather)) by running this command:

```bash
yarn add feather-icons
# or npm i feather-icons
```

Or for React.js ([docs here](https://github.com/feathericons/react-feather)) with this command:

<!-- TODO: Add Vue docs? -->

```bash
yarn add react-feather
# or npm i react-feather
```

Feather can be used in almost everywhere. [Click here](https://github.com/feathericons/feather#related-projects) to see
all supported environments.

## Using Classes

Because icons are SVGs, you can add classes like `class="icon-sm"` or `class="icon-lg"` to style them. In your CSS,
write rules for the corresponding classes, `.icon-sm` or `.icon-lg`. All icons have a 1:1 aspect ratio, so their `width`
and `height` should be the same.

If you use [Tailwind CSS](https://tailwindcss.com), you can add `class="w-6 h-6"` for `24px` or `class="w-8 h-8"` for
`32px`.

## Using Inline Styles

Another trick you can use is `style="width: 1em; height: 1em;"`. This means that an icon will assume the `width` and
`height` of the parent element’s `font-size`, which by default is `16px`. If the parent element’s `font-size` is `32px`,
your icon will also appear as `32px`.

You can always extract this pattern as a CSS class so you don't need to repeat yourself.

## Contribute on GitHub

You are welcome to submit a pull request to enhance the docs, add translations, and contribute examples.

<small>

[Feather](https://github.com/feathericons/feather) is by [Cole Bemis](https://twitter.com/colebemis) and
[feathericons.com](https://github.com/feathericons/feathericons.com) is by
[Zaydek](https://twitter.com/username_ZAYDEK).<br /> Licensed as
[MIT](https://github.com/feathericons/feather/blob/master/LICENSE). You can use the icons personally and commerically
without attribution.<br /> Built using [Duomo CSS](https://github.com/zaydek/duomo) and
[Prose CSS](https://github.com/zaydek/prose).

</small>

<br />

## Demos

<div>
	<Demos />
</div>

<br />

<More />
