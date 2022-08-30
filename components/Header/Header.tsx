import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  Bars3CenterLeftIcon,
  PhoneIcon,
  PlayIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  Square2StackIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import { Disclosure, Menu } from "@headlessui/react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { BellIcon, Bars3Icon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Analytics",
    href: "#",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    href: "#",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    href: "#",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    href: "#",
    description: "Connect with third-party tools that you're already using.",
    icon: Square2StackIcon,
  },
  {
    name: "Automations",
    href: "#",
    description:
      "Build strategic funnels that will drive your customers to convert",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <div className="relative bg-gray-50">
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex px-2 lg:px-0">
                  <div className="flex flex-shrink-0 items-center">
                    <svg
                      className="block h-8 w-auto lg:hidden"
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.706 7.15L15.919 11.235L17.557 4.091L15.377 5.245L13.74 0.798L12.106 5.245L9.926 4.091L11.562 11.235L7.695 7.064L7.444 8.884L4.272 7.96L5.736 11.42L4.392 11.786L8.925 15.17C14.081 13.181 17.315 13.759 19.211 14.527C18.9417 15.5919 18.5254 16.614 17.974 17.564C17.8165 17.4773 17.6557 17.3965 17.492 17.322C16.833 17.023 16.042 16.782 15.09 16.64C14.5845 16.5655 14.0748 16.5221 13.564 16.51C13.3291 16.5037 13.094 16.5027 12.859 16.507C11.788 16.526 10.574 16.65 9.195 16.914L9.041 16.942C8.79 16.988 8.546 17.026 8.308 17.057C4.845 17.51 2.708 16.484 1.426 15.315C1.2928 14.9322 1.17866 14.5431 1.084 14.149C2.369 15.49 4.633 16.665 8.386 15.367L3.316 11.581L5.079 11.101L3.436 7.216L7.044 8.268L7.358 5.993L10.693 9.59L9.223 3.175L11.844 4.563L13.444 0.216C13.654 0.244 13.864 0.274 14.073 0.307L15.637 4.563L18.259 3.175L16.789 9.59L19.709 6.441L19.706 7.151"
                        fill="#FFFFFE"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.37401 17.862C4.80201 18.148 2.78901 17.152 1.65401 15.918C1.83701 16.371 2.04801 16.816 2.28701 17.253L2.32501 17.321C3.38901 18.101 5.17501 18.843 8.17801 19.086C11.33 19.341 13.403 20.19 14.766 21.162C15.5665 20.549 16.2937 19.8457 16.933 19.066C15.39 18.186 12.781 17.51 8.37401 17.862Z"
                        fill="#FFFFFE"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.325 17.321C4.03 20.403 6.769 22.15 9.935 23.527C10.026 23.5686 10.1249 23.5901 10.225 23.5901C10.3251 23.5901 10.424 23.5686 10.515 23.527C11.443 23.097 12.474 22.667 13.344 22.137C13.847 21.831 14.321 21.505 14.766 21.162C13.403 20.19 11.33 19.341 8.178 19.086C5.176 18.843 3.388 18.102 2.325 17.321ZM9.196 16.914C5.206 17.68 2.815 16.583 1.427 15.316C1.497 15.518 1.572 15.719 1.653 15.918C2.789 17.152 4.803 18.148 8.374 17.862C12.781 17.51 15.39 18.186 16.934 19.066C17.322 18.589 17.67 18.088 17.976 17.563C16.286 16.635 13.564 16.077 9.196 16.914Z"
                        fill="#0A0B09"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.212 14.528C19.452 13.589 19.593 12.594 19.631 11.541C19.683 10.078 19.7 8.615 19.706 7.151L15.919 11.235L17.557 4.091L15.377 5.245L13.74 0.797997L12.106 5.245L9.926 4.091L11.562 11.235L7.695 7.064L7.444 8.884L4.272 7.96L5.736 11.42L4.392 11.786L8.925 15.17C14.081 13.18 17.316 13.759 19.211 14.528"
                        fill="#D8232A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.26 3.175L16.79 9.59L19.709 6.441C19.713 5.011 19.711 3.58 19.724 2.149C19.727 1.889 19.666 1.744 19.392 1.65C17.6615 1.04713 15.8813 0.597725 14.072 0.306998L15.637 4.563L18.259 3.175H18.26ZM8.38701 15.367L3.31701 11.581L5.08001 11.101L3.43701 7.216L7.04501 8.268L7.35901 5.993L10.694 9.59L9.22401 3.175L11.845 4.563L13.444 0.215998C13.004 0.158998 12.564 0.110998 12.12 0.0759984C8.36501 -0.221002 4.72801 0.367998 1.18101 1.601C0.838009 1.721 0.721009 1.874 0.724009 2.239C0.744009 3.848 0.744009 7.069 0.744009 7.069C0.744009 8.519 0.729009 9.969 0.747009 11.421C0.759009 12.356 0.873009 13.266 1.08501 14.151C2.37001 15.491 4.63501 16.665 8.38701 15.367Z"
                        fill="#0A0B09"
                      ></path>
                    </svg>

                    <svg
                      className="hidden h-8 w-auto lg:block"
                      viewBox="0 0 336 91"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <path id="a" d="M0 0h31.141v30.065H0z"></path>
                      </defs>
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M131.154 16.4l-6.772.019-.954-6.051c-.898-.892-2.03-1.597-3.393-2.113-1.364-.516-2.972-.772-4.824-.766-3.953.011-6.992 1.456-9.116 4.334-2.124 2.878-3.18 6.626-3.166 11.245l.005 1.591c.014 4.62 1.086 8.372 3.217 11.257 2.13 2.887 5.13 4.323 9.001 4.312 1.79-.005 3.427-.27 4.913-.795 1.486-.523 2.634-1.234 3.442-2.132l.919-6.058 6.772-.02.027 8.989c-1.825 2.128-4.155 3.824-6.992 5.092-2.836 1.267-6.012 1.906-9.529 1.917-6.096.018-11.096-2.08-15-6.292-3.902-4.212-5.864-9.626-5.883-16.243l-.005-1.529c-.019-6.595 1.9-12.021 5.757-16.277 3.858-4.256 8.855-6.393 14.993-6.411 3.516-.01 6.691.62 9.525 1.891 2.833 1.271 5.179 2.955 7.037 5.05l.026 8.99M148.173 40.564c1.335-.004 2.549-.295 3.64-.875 1.091-.58 1.939-1.307 2.543-2.179l-.015-5.009-4.523.014c-1.881.006-3.307.45-4.276 1.332-.969.884-1.452 1.944-1.448 3.178.004 1.114.365 1.981 1.086 2.607.72.625 1.718.936 2.993.932zm7.697 5.897a15.822 15.822 0 01-.642-1.683 13.203 13.203 0 01-.43-1.744c-1.05 1.217-2.327 2.203-3.832 2.956-1.505.752-3.23 1.133-5.172 1.139-3.218.01-5.775-.859-7.673-2.603-1.897-1.746-2.85-4.126-2.86-7.141-.008-3.076 1.22-5.457 3.683-7.145 2.464-1.687 6.084-2.537 10.86-2.552l4.523-.013-.01-3.218c-.004-1.579-.463-2.801-1.376-3.669-.913-.867-2.26-1.299-4.041-1.294-1.012.004-1.912.123-2.701.358-.789.235-1.426.516-1.91.84l-.567 3.524-6.678.02.01-7.286c1.615-1.098 3.47-2.024 5.561-2.78 2.093-.754 4.373-1.135 6.842-1.143 4.068-.012 7.374.976 9.92 2.96 2.546 1.987 3.824 4.822 3.835 8.505l.04 13.569c.002.506.008.982.02 1.427.01.445.048.87.11 1.274l2.702.357.017 5.312-10.23.03zM169.19 41.108l4.247-.924-.06-20.369-4.708-.897-.016-5.342 12.962-.038.409 4.795c.763-1.702 1.752-3.03 2.963-3.986 1.211-.955 2.616-1.434 4.215-1.439.466-.001.956.033 1.473.102.516.07.946.154 1.29.254l-.916 8.078-3.644-.081c-1.295.004-2.367.261-3.215.77-.849.508-1.494 1.227-1.937 2.16l.047 15.967 4.253.899.016 5.311-17.363.051-.016-5.311M193.11 5.575l-.016-5.343 13.6-.04.121 39.896 4.283.9.016 5.311-17.424.051-.016-5.312 4.277-.924-.103-33.642-4.738-.897M228.648 19.624c-1.639.005-2.933.636-3.88 1.894-.947 1.257-1.53 2.908-1.746 4.953l.091.15 10.867-.032-.002-.789c-.005-1.881-.45-3.383-1.333-4.503-.884-1.12-2.216-1.679-3.997-1.673zm0 27.258c-4.735.013-8.525-1.493-11.366-4.52-2.843-3.028-4.27-6.88-4.284-11.553l-.004-1.215c-.014-4.877 1.314-8.899 3.986-12.063 2.672-3.165 6.265-4.744 10.778-4.737 4.432-.013 7.876 1.312 10.333 3.977 2.456 2.663 3.692 6.272 3.705 10.826l.014 4.826-19.61.058-.06.182c.168 2.165.897 3.944 2.186 5.337 1.29 1.392 3.037 2.085 5.243 2.079 1.963-.006 3.592-.208 4.885-.607 1.295-.398 2.709-1.024 4.245-1.879l2.414 5.457c-1.353 1.076-3.105 1.982-5.259 2.717-2.153.734-4.555 1.107-7.206 1.115zM256.393 4.477l.024 8.831 5.769-.017.017 6.223-5.769.017.05 16.727c.005 1.275.27 2.184.797 2.729.53.545 1.239.816 2.127.813.609-.001 1.14-.028 1.596-.08.455-.052.965-.14 1.531-.263l.778 6.403c-.99.306-1.972.538-2.942.692-.972.155-2.024.234-3.156.238-3.058.008-5.411-.825-7.066-2.5-1.654-1.675-2.486-4.333-2.499-7.976l-.049-16.756-3.082.014-.019-6.223 3.084-.014-.025-8.831 8.834-.027M273.964 30.011c.01 2.995.541 5.398 1.6 7.206 1.058 1.808 2.76 2.708 5.108 2.701 2.288-.007 3.96-.922 5.015-2.747 1.059-1.824 1.583-4.224 1.574-7.2l-.003-.637c-.007-2.914-.551-5.29-1.63-7.129-1.078-1.838-2.77-2.754-5.076-2.747-2.307.007-3.986.933-5.033 2.777-1.046 1.846-1.565 4.224-1.555 7.138v.638zm-8.866-.611c-.015-4.897 1.344-8.913 4.077-12.048 2.735-3.135 6.52-4.71 11.355-4.724 4.857-.014 8.66 1.533 11.413 4.64 2.753 3.11 4.134 7.123 4.149 12.04l.002.638c.015 4.938-1.344 8.964-4.077 12.08-2.733 3.113-6.51 4.678-11.325 4.692-4.877.015-8.69-1.528-11.443-4.625-2.75-3.1-4.134-7.117-4.148-12.055l-.003-.638zM298.359 40.712l4.247-.924-.06-20.368-4.706-.897-.018-5.342 12.962-.039.41 4.705c1.087-1.683 2.43-2.993 4.024-3.928 1.596-.936 3.386-1.407 5.37-1.413 3.319-.01 5.911 1.025 7.78 3.104 1.868 2.079 2.809 5.344 2.821 9.797l.042 14.296 4.254.9.015 5.311-16.938.051-.015-5.312 3.791-.923-.041-14.266c-.008-2.206-.458-3.768-1.352-4.687-.891-.918-2.24-1.374-4.04-1.37-1.174.005-2.226.246-3.154.724a6.496 6.496 0 00-2.334 2.025l.052 17.607 3.587.9.015 5.313-16.695.048-.017-5.312M105.206 58.81l.009 2.971-2.632.515.038 12.826c.005 1.621.445 2.832 1.319 3.634.874.802 2.071 1.2 3.59 1.195 1.541-.004 2.75-.407 3.625-1.21.875-.8 1.31-2.017 1.306-3.648l-.038-12.827-2.618-.499-.008-2.97 10.176-.03.009 2.97-2.631.515.038 12.826c.008 2.757-.895 4.887-2.707 6.388-1.813 1.502-4.193 2.257-7.14 2.266-2.938.01-5.31-.732-7.121-2.224-1.81-1.49-2.72-3.615-2.728-6.371l-.038-12.827-2.617-.498-.009-2.97 2.616-.008 4.928-.014 2.633-.01M121.337 80.383l2.36-.513-.033-11.324-2.617-.498-.009-2.971 7.207-.022.227 2.616c.605-.936 1.35-1.663 2.238-2.184.887-.52 1.882-.782 2.985-.785 1.845-.006 3.287.57 4.326 1.725 1.038 1.156 1.56 2.972 1.568 5.447l.024 7.949 2.364.498.009 2.954-9.417.028-.01-2.953 2.11-.513-.025-7.931c-.003-1.227-.253-2.095-.75-2.606-.497-.51-1.245-.764-2.247-.761-.652.002-1.237.136-1.754.402a3.597 3.597 0 00-1.296 1.126l.03 9.789 1.992.5.009 2.953-9.283.028-.008-2.954M150.644 60.618l-4.928.015-.011-3.697 4.928-.014.011 3.696zm-7.25 19.7l2.379-.513-.034-11.324-2.634-.499-.009-2.97 7.561-.023.044 14.801 2.364.499.009 2.954-9.67.028-.01-2.953zM161.639 67.925l-1.72.325 2.437 8.162.326 1.72h.1l.35-1.722 2.356-8.159-1.757-.332-.008-2.971 8.286-.025.009 2.97-1.586.258-5.339 15.054-4.709.013-5.445-15.02-1.587-.248-.009-2.971 8.287-.025.009 2.97M180.916 68.355c-.911.003-1.63.354-2.157 1.052-.526.7-.85 1.617-.97 2.754l.05.085 6.042-.018v-.439c-.004-1.046-.251-1.881-.742-2.504-.492-.623-1.233-.933-2.223-.93zm.484 15.154c-2.632.007-4.74-.83-6.32-2.513-1.58-1.682-2.374-3.824-2.381-6.423l-.002-.675c-.008-2.711.73-4.947 2.216-6.707 1.486-1.759 3.483-2.638 5.992-2.633 2.464-.008 4.38.73 5.745 2.21 1.366 1.481 2.053 3.488 2.06 6.02l.008 2.683-10.903.032-.033.1c.093 1.205.498 2.194 1.215 2.968.717.774 1.689 1.16 2.915 1.156 1.091-.004 1.997-.116 2.716-.337.72-.221 1.506-.57 2.36-1.045l1.343 3.034c-.753.598-1.728 1.102-2.925 1.511-1.197.408-2.532.615-4.006.619zM190.675 80.17l2.362-.512-.034-11.324-2.617-.499-.009-2.97 7.207-.022.226 2.665c.425-.945.974-1.684 1.648-2.215.674-.53 1.455-.797 2.344-.8.258 0 .531.019.818.057.287.04.526.086.718.141l-.51 4.491-2.025-.045c-.72.002-1.316.145-1.788.428-.472.282-.83.683-1.077 1.2l.027 8.878 2.364.5.008 2.954-9.653.027-.009-2.953M218.971 71.056l-3.308.01-.53-2.277c-.338-.269-.764-.492-1.276-.671a5.076 5.076 0 00-1.697-.265c-.867.002-1.552.198-2.057.588-.505.39-.757.878-.756 1.463.002.551.245 1.009.73 1.372.485.365 1.454.686 2.906.962 2.263.444 3.941 1.1 5.035 1.969 1.094.87 1.643 2.069 1.648 3.598.005 1.643-.698 2.986-2.106 4.03-1.41 1.046-3.267 1.572-5.573 1.58-1.407.003-2.699-.198-3.876-.606a9.89 9.89 0 01-3.135-1.754l-.063-4.101 3.443-.01.682 2.378c.293.246.693.428 1.2.545a7.009 7.009 0 001.587.172c1-.003 1.763-.184 2.285-.547.522-.362.782-.851.78-1.47-.001-.54-.267-1.007-.797-1.399-.53-.392-1.504-.738-2.923-1.038-2.15-.432-3.775-1.077-4.875-1.935-1.1-.858-1.651-2.028-1.656-3.513-.004-1.53.622-2.851 1.879-3.964 1.257-1.112 3.05-1.671 5.379-1.678 1.418-.004 2.76.183 4.027.561 1.267.38 2.26.866 2.983 1.46l.064 4.54M228.981 60.377l-4.928.014-.01-3.696 4.927-.014.011 3.696zm-7.25 19.7l2.379-.514-.034-11.323-2.634-.499-.009-2.97 7.561-.023.044 14.801 2.364.5.009 2.953-9.67.03-.01-2.955z"
                          fill="#1A1919"
                        ></path>
                        <g transform="translate(232.884 60.243)">
                          <mask id="b" fill="#fff">
                            <use xlinkHref="#a"></use>
                          </mask>
                          <path
                            d="M6.597 0l.014 4.472 3.206-.01.01 3.46-3.206.01.027 9.3c.002.708.15 1.215.444 1.517.293.303.687.454 1.182.452a8.42 8.42 0 00.886-.044c.254-.03.537-.078.852-.146l.433 3.56c-.551.17-1.097.297-1.636.384-.54.085-1.125.13-1.755.131-1.7.005-3.009-.458-3.928-1.389-.92-.93-1.383-2.41-1.389-4.434L1.71 7.946l-1.7.01L0 4.494l1.7-.009L1.685.015 6.597 0M31.141 7.37l-1.704.258-6.664 17.791c-.525 1.318-1.229 2.424-2.108 3.314-.881.892-2.21 1.341-3.988 1.347a6.386 6.386 0 01-1.172-.1c-.367-.066-.798-.16-1.292-.282l.563-3.597c.158.023.32.044.49.067.168.021.313.033.439.033.82-.003 1.45-.205 1.888-.606.438-.4.773-.9 1.007-1.496l.554-1.385-5.834-15.02-1.705-.266-.009-2.97 8.946-.027.008 2.97-2.041.345 2.518 7.283.259 1.315.1.017 2.861-8.633-2.06-.331-.01-2.971 8.947-.026.007 2.97"
                            fill="#1A1919"
                            mask="url(#b)"
                          ></path>
                        </g>
                        <path
                          d="M72.57 27.666L58.194 43.17l6.216-27.122-8.278 4.382-6.208-16.883-6.207 16.883-8.278-4.382 6.216 27.122L26.97 27.335l-.953 6.915-12.041-3.512 5.557 13.135-5.101 1.39 17.207 12.85c19.577-7.551 31.858-5.357 39.054-2.44-1.059 4.135-2.625 7.98-4.694 11.529a26.954 26.954 0 00-1.831-.918c-2.501-1.134-5.506-2.054-9.121-2.59a47.477 47.477 0 00-4.45-.436 59.197 59.197 0 00-4.02-.067c-4.065.07-8.674.541-13.912 1.546-.197.037-.39.07-.585.105-.951.173-1.878.317-2.782.435-13.148 1.72-21.264-2.173-26.13-6.614a46.545 46.545 0 01-1.298-4.425c4.878 5.09 13.476 9.55 27.725 4.624l-19.25-14.374 6.695-1.826-6.24-14.75 13.699 3.995 1.19-8.635 12.664 13.656-5.582-24.355 9.955 5.27 6.068-16.506c.798.106 1.593.22 2.388.345l5.941 16.16 9.954-5.27-5.581 24.356L72.58 24.972l-.01 2.694"
                          fill="#FFFFFE"
                        ></path>
                        <path
                          d="M29.545 68.335C15.984 69.42 8.339 65.637 4.027 60.954c.699 1.718 1.5 3.409 2.405 5.068.048.088.098.172.146.259 4.038 2.964 10.822 5.778 22.222 6.7 11.966.969 19.839 4.191 25.015 7.882 3.131-2.416 5.875-5.07 8.228-7.957-5.86-3.341-15.767-5.908-32.498-4.57"
                          fill="#FFFFFE"
                        ></path>
                        <path
                          d="M6.578 66.28C13.05 77.984 23.45 84.614 35.47 89.843c.714.31 1.49.327 2.2 0 3.525-1.633 7.44-3.26 10.744-5.273a59.901 59.901 0 005.4-3.706c-5.175-3.69-13.048-6.913-25.014-7.882-11.4-.922-18.184-3.736-22.222-6.7M32.664 64.737c-15.15 2.905-24.227-1.26-29.495-6.069.266.767.55 1.53.858 2.286 4.312 4.683 11.957 8.465 25.518 7.381 16.731-1.337 26.638 1.23 32.498 4.57A44.442 44.442 0 0066 67.198c-6.414-3.521-16.753-5.641-33.337-2.46"
                          fill="#0A0B09"
                        ></path>
                        <path
                          d="M70.696 55.674c.911-3.563 1.446-7.342 1.588-11.34.197-5.553.261-11.11.287-16.668L58.193 43.17l6.216-27.122-8.278 4.382-6.208-16.883-6.207 16.883-8.278-4.382 6.216 27.122L26.97 27.335l-.953 6.915-12.041-3.512 5.557 13.135-5.101 1.39 17.207 12.85c19.58-7.552 31.862-5.357 39.058-2.439"
                          fill="#D8232A"
                        ></path>
                        <g fill="#0A0B09">
                          <path d="M67.076 12.573l-5.581 24.355L72.58 24.972c.015-5.432.006-10.865.058-16.296.012-.987-.222-1.54-1.263-1.895-6.608-2.267-13.33-4.028-20.195-5.1l5.941 16.162 9.954-5.27M29.594 58.862l-19.25-14.374 6.695-1.826-6.24-14.75 13.699 3.995 1.19-8.635 12.664 13.656-5.582-24.355 9.955 5.27 6.068-16.506c-1.667-.219-3.341-.399-5.025-.532C29.512-.325 15.7 1.914 2.234 6.595.932 7.052.484 7.633.5 9.016c.077 6.11.073 18.337.073 18.337 0 5.509-.057 11.018.012 16.526.046 3.55.48 7.006 1.285 10.364 4.878 5.091 13.476 9.546 27.724 4.62"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <a
                      href="#"
                      className="inline-flex items-center border-b-2 border-red-carleton px-1 pt-1 text-sm font-medium text-gray-900"
                    >
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      Team
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      Calendar
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassCircleIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XCircleIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <button className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Settings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 pt-2 pb-3">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                <a
                  href="#"
                  className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                >
                  Calendar
                </a>
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      Tom Cook
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      tom@example.com
                    </div>
                  </div>
                  <button className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Game On: Teaching Tweens </span>
              <span className="block text-red-carleton xl:inline">
                Digital Literacy
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-carleton px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-red-carleton hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default Header;
