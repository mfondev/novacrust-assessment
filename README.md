 Novacrust Payment Assessment

This project is a front-end assessment for Novacrust. It demonstrates the implementation of custom UI components, responsive layouts, and form interactions using **Next.js**, **React**, **TailwindCSS**, and **ShadCN**.

## Features

- Custom Select components with search, icons, and dynamic options.
- Tabs with active state styling and full-width indicators.
- Responsive layouts compatible with desktop and mobile screens.
- Custom fonts: Instrument Sans, Outfit, and Clash Display.
- Form validation for email input and disabled states for buttons.
- Styled buttons and inputs matching the design specifications.
- Placeholder and option styling with distinct fonts for selected items and dropdowns.

## Technologies Used

- **Next.js**  
- **React**  
- **TailwindCSS**  
- **ShadCN**  
- **Lucide Icons / React Icons**  

## Project Structure

/components # Custom components (Select, Button, Tabs, etc.)
/pages # Next.js pages
/assets # Icons and fonts
/globals.css # Global styles and font imports

bash
Copy code

## Setup Instructions

1. Clone the repository:

```bash
git clone <repository-url>
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Run the development server:

bash
Copy code
npm run dev
# or
yarn dev
Open http://localhost:3000 to view the project.

Assumptions & Trade-offs
This project focuses on front-end implementation; no backend/API integration was required.

Email input validation is limited to basic HTML5 validation.

Custom fonts are imported from Google Fonts and local assets, with fallback fonts included.

Tabs and Select components use Radix UI for accessibility and behavior; additional animations were kept minimal for performance.

Some design trade-offs were made for responsiveness on smaller screens.

Placeholder and option font styling is applied separately to distinguish selected items from dropdown lists.




