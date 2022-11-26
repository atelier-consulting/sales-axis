# Sales Axis

## Brief
Client has design of landing page and user dashboard in Figma.
Pages have several common reusable components, some of them should have configurable appearance and layout.
Client wants those pages sliced into plain HTML and CSS that can be used without any third party library.
Also client wants those reusable components to be easily implemented using any backend or frontend technology.

## Tools
- [Pug](https://tailwindcss.com) as templating language, utilizing mixins for component isolation and reusability.
- [TailwindCSS](https://tailwindcss.com) as styling tool that forses adherence to brand standards and streamlines further codebase expansion and maintainability.
- [Parcel](https://parceljs.org/)'s [Targets](https://parceljs.org/features/targets/) for setting up multiple build configurations: complete minified pages for production, isolated and human-readable components for incorporating into any framework.

## Result
- Grab both minified and human-readable versions from [latest release](https://github.com/atelier-consulting/sales-axis/releases/latest). 
- View [sliced landing](https://atelier.consulting/projects/sales-axis/showcase/) in browser.

