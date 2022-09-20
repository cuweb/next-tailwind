# Component Reference

This component is used to create a full width container with a background color.

## Usage

```jsx
import { Container } from '{path}/layout/Container/Container';

<Container>
    {add content}
</Container>
```

## Default

If you do not specify any of the options below the defaults are set as per the following:

-   `bgColor` - Applies the `bg-white` class from Tailwind

## Options

The available props can be added like the following example:

```jsx
<Container bgColor="gray">
    {add content}
</Container>
```

-   `bgColor` at the moment the prop only accepts gray and the custom color `cu-black-50` is applied

## Default Styles Applied

In addition to options that are passed the following Tailwind classes are set on the component by default:

-   `py-8` -- Adds 2rem (32px) of padding on the Y-axis (top & bottom)
