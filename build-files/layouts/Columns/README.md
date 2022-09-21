# Component Reference

This component is used to create a column layout that adheres to a set max width.

## Usage

```jsx
import Columns from '{path}/layout/Columns/Columns';

<Columns>
    {add content}
</Columns>
```

## Options

AddInfo

## Grid Breakpoints

AddInfo

## Deafult Styles

In addition to options that are passed the following Tailwind classes are set on the component by default:

-   `mx-auto` - set and auto margin on the X-axis (left & right)
-   `grid` - applies grid layout to all direct decendants
-   `grid-cols-1` - applies grid column template 1 for all mobile views
-   `gap-8` - adds a grid gap of 2rem (32px)
-   `px-8` - adds 2rem (32px) of padding on the X-axis (left & right)
-   `mb-8` - adds 2rem (32px) of margin on the bottom
-   `[&:last-child]:mb-0` - remove margin bottom on last child in a series
