# Component Reference

This component is used to create a column layout that adheres to a set max width.

## Usage

```jsx
import { Columns } from '{path}/layout/Columns/Columns';

<Columns>
    {add content}
</Columns>
```

## Default

If you do not specify any of the options below the defaults are set as per the following:

-   `columns` - Applies the `grid-cols-1` class from Tailwind
-   `maxWidth` - Applies the `5xl` size from the max-width class in Tailwind
-   `breakPoint` - Applies the `md` breakpoint from Tailwind

## Options

The available props can be added like the following example:

```jsx
<Columns columns="grid-cols-2" maxWidth="7xl" breakPoint="sm">
    {add content}
</Columns>
```

-   `columns` prop accepts any of the [Tailwind Grid Column Template](https://tailwindcss.com/docs/grid-template-columns) options available, as well as the custom options noted below
-   `maxWidth` - prop accepts any of the [Tailwind Max Width](https://tailwindcss.com/docs/max-width) options available
-   `breakPoint` - prop accepts any of the [Tailwind Breakpoints](https://tailwindcss.com/docs/responsive-design) options available

### Custom Columns

-   `grid-cols-one3rd` - creates a one third column grid where the layout has a `33%` wide left column and an auto sized right column
-   `grid-cols-two3rd` - creates a two third column grid where the layout has a `66%` wide left column and an auto sized right column

## Default Styles Applied

In addition to options that are passed the following Tailwind classes are set on the component by default:

-   `mx-auto` -- Set and auto margin on the X-axis (left & right)
-   `grid` -- Applies grid layout to all direct decendants
-   `grid-cols-1` -- Applies grid column template 1 for all mobile views
-   `gap-8` -- Adds a grid gap of 2rem (32px)
-   `px-8` -- Adds 2rem (32px) of padding on the X-axis (left & right)
-   `mb-8` -- Adds 2rem (32px) of margin on the bottom
-   `[&:last-child]:mb-0` -- Remove margin bottom on last child in a series
