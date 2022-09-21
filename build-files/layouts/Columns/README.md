# Component Reference

This component is used to create a column layout that adheres to a set max width.

## Usage

```jsx
import { Columns } from '{path}/layout/Columns/Columns';

<Columns>
    {add content}
</Columns>
```

## Options

The available props can be added like the following example:

```jsx
<Columns columns="md:grid-cols-2 lg:grid-cols-4" maxWidth="7xl">
    {add content}
</Columns>
```

-   `columns` - use any of the [Tailwind Grid Column Template](https://tailwindcss.com/docs/grid-template-columns) options available, as well as the custom options noted below
-   `maxWidth` - use any of the [Tailwind Max Width](https://tailwindcss.com/docs/max-width) options available
-   `gridGap` - use any of the [Tailwind Grid Gap](https://tailwindcss.com/docs/gap) options available

**Note:** when passing classes into the column attribute it is recommended to set your media queries here. This provides ultimate flexibility to how you want the grid to break for any screen size.

### Custom Columns

-   `grid-cols-one3rd` - creates a one third column grid where the layout has a `33%` wide left column and an auto sized right column
-   `grid-cols-two3rd` - creates a two third column grid where the layout has a `66%` wide left column and an auto sized right column

## Fallbacks

If you do not specify any of the options below the defaults are set as per the following:

-   `columns` - applies the `grid-cols-1` class from Tailwind
-   `maxWidth` - applies the `5xl` size from the max-width class in Tailwind
-   `gridGap` - applies the `gap-8` class from Tailwind

## Other Styles

In addition to options that are passed the following Tailwind classes are set on the component by default:

-   `mx-auto` - set and auto margin on the X-axis (left & right)
-   `grid` - applies grid layout to all direct decendants
-   `grid-cols-1` - applies grid column template 1 for all mobile views
-   `gap-8` - adds a grid gap of 2rem (32px)
-   `px-8` - adds 2rem (32px) of padding on the X-axis (left & right)
-   `mb-8` - adds 2rem (32px) of margin on the bottom
-   `[&:last-child]:mb-0` - remove margin bottom on last child in a series