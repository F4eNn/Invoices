
<p align="center">The part of design is from <a target="_blank" href="https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl">here</a>.</p>
<img src='./.github/preview.jpg' alt='Ink Wise home page banner' width='100%' height="700px" />

<h1 align="center">Live🎮</h1>
<p align='center'><a target='_blank' href='https://ink-wise.vercel.app/' align='center' >🎈 Invoices 🎈</a></p>

</br>

<h2>A full-stack invoice management app where the main focus is to enable the user to:</h2>

- Create, read, update, and delete invoices
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Create an account
- Change credentials e.g. email or password
- Edit general info e.g. profile image, name
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode

</br>

<h2>Expected Behaviour</h2>

- Creating an invoice
  - When creating a new invoice, an ID needs to be created. Each ID should be 2 random uppercased letters followed by 4 random numbers.
  - Invoices can be created either as drafts or as pending. Clicking `Save as Draft` should allow the user to leave any form field blank, but should create an ID if one doesn't exist and set the status to `draft`. Clicking `Save & Send` should require all forms fields to be filled in, and should set the status to `pending`.
  - The `total` should be the sum of all items on the invoice.
- Editing an invoice
  - When saving changes to an invoice, all fields are required when the `Save Changes` button is clicked. If the user clicks `Cancel`, any unsaved changes should be reset.
  - If the invoice being edited is a `draft`, the status needs to be updated to "pending" when the "Save Changes" button is clicked. All fields are required at this stage.
- Menage an account
  - Validate the update form
  - Allow user to select profile photo available on device locally
- Users should be able to mark invoices as paid by clicking the `Mark as Paid` button. This should change the invoice's status to `paid`.
- See page transitions
- Users should receive a confirmation modal when trying to delete invoices.

</br>

<h2> Mainly Built with 🛠</h2> 

Tools | type |
---| --- |
Next.js | React framework |
React | JS library |
MUI | Library for UI |
React-hook-form | Library for form validation |
Tailwind | Framework CSS |
Framer-motion | Library for animation |
Firebase | Backend platform |
Validator.js | String validation library

...And other minor tools like, `react-datepicker`, `react-toastify`, `react-spinners` etc.

</br>

<h3>How to run locally</h3>

<p>First, clone repo and install dependencies</p>

```bash
git clone https://github.com/F4eNn/Invoices.git 
```

```bash
npm i
# or
yarn add
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

