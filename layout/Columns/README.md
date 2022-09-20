# Component Reference

Description

## Usage

```jsx
import { Columns } from '{path}/layout/Columns/Columns';

<Columns>
    {add content}
</Columns>
```

## Options

Description

-   `columns` prop accepts any of the [Tailwind Grid Column Template](https://tailwindcss.com/docs/grid-template-columns) options available, as well as the custom options noted below
-   `maxWidth` - prop accepts any of the [Tailwind Max Width](https://tailwindcss.com/docs/max-width) options available

The available props can be added like the following example:

```jsx
<Columns columns="grid-cols-2" maxWidth="7xl">
    {add content}
</Columns>
```

## Custom Columns

-   `grid-cols-one3rd` - creates a one third column grid where the layout has a `33%` wide left column and an auto sized right column
-   `grid-cols-two3rd` - creates a two third column grid where the layout has a `66%` wide left column and an auto sized right column

## Default Styles Applied

Desc
