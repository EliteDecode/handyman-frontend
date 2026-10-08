# Handyman

Handyman is a marketplace that connects people who need home services — plumbing, electrical work, carpentry, cleaning, repairs and more — with skilled, verified handymen nearby. Customers book trusted professionals in a few clicks, and handymen get a steady flow of jobs and a professional profile to grow their business.

## Business idea

Finding a reliable handyman usually depends on word of mouth, and customers have no easy way to check skills, prices or reviews. Skilled artisans, meanwhile, struggle to find enough work. Handyman solves both sides:

- **Customers** search services, compare handymen, check availability and book a job.
- **Handymen** sign up, verify their identity and certifications, show a portfolio, set their availability and receive job requests.
- **Trust** is built through identity verification, certifications and a transparent job history.
- **Payments** flow through the platform, with transaction history and upcoming payouts for handymen.

The platform earns a commission on completed jobs.

## Key features

### Customers
- Sign up and log in with email, Google or Facebook
- Browse services, service listings and service details
- Check handyman availability and send job requests
- Dashboard with requests, service history, notifications and transactions

### Handymen
- Role selection and guided profile completion
- Personal information, verification and identification, certifications
- Portfolio and availability calendar
- Job requests and job details
- Dashboard overview, transaction history and upcoming payouts

### Everyone
- Email verification, OTP and password reset
- Help and support centre with FAQs and contact support
- Terms and privacy pages
- Nigerian states and LGAs for location, plus Google Maps

## Tech stack

- React + TypeScript, built with Vite
- Redux Toolkit, Axios
- shadcn/ui, Tailwind CSS, Material UI, Mantine and Ant Design
- Formik + Yup
- Google Maps, Chart.js and MUI X Charts

## Getting started

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Contributing

The project is organised into `components`, `hooks`, `layouts`, `lib`, `pages`, `routes`, `services`, `store`, `types` and `utils` under `src/`. New work is done on feature branches (for example `feat/customer-dashboard`) and merged into `development` through pull requests before release.
