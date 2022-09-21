# Component Reference

This component is used to create a full width container with a background color.

## Usage

```jsx
import { Container } from '{path}/layout/Container/Container';

<Container>
    {add content}
</Container>
```

## Options

The available props can be added like the following example:

```jsx
<Container bgColor="gray">
    {add content}
</Container>
```

-   `bgColor` - attribute only accepts `gray` which adds the custom background color `bg-cu-black-50` to the component

## Fallbacks

If you do not specify any of the options below the defaults are set as per the following:

-   `bgColor` - applies the `bg-white` class from Tailwind

## Other Styles

In addition to options that are passed the following Tailwind classes are set on the component by default:

-   `py-8` -- adds 2rem (32px) of padding on the Y-axis (top & bottom)
