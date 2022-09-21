# Component Reference

This component is used to create a full width container with a background color.

## Usage

```jsx
import { DashboardPanel } from '{path}/layout/DashboardPanel/DashboardPanel';

<DashboardPanel>
    {add content}
</DashboardPanel>
```

## Options

The available props can be added like the following example:

```jsx
<DashboardPanel innerPadding="px-6 py-4">
    {add content}
</DashboardPanel>
```

-   `innerPadding` - use any padding class from Tailwind

## Fallbacks

If you do not specify any of the options below the defaults are set as per the following:

-   `innerPadding` - adds the `p-0` class from Tailwind

## Other Styles

The `Dashboard Panel` component is an opinionated design and uses several classes to create the look and feel. For a more open ended component check out the `Clean Panel` component.
