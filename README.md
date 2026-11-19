# DevTech IT Solutions Website

A responsive static business website for an IT support and AMC service provider. Built with HTML, CSS and vanilla JavaScript; suitable for GitHub Pages.

## 1. Update your contact details before publishing

Open `script.js` and edit the `CONFIG` section:

```js
const CONFIG = {
  businessName: "DevTech IT Solutions",
  phoneDisplay: "+91 98765 43210",
  phoneLink: "+919876543210",
  whatsappNumber: "919876543210",
  email: "yourname@example.com"
};
```

- `phoneDisplay`: number shown on the website.
- `phoneLink`: phone number with country code, for example `+919876543210`.
- `whatsappNumber`: digits only, including country code, for example `919876543210`.
- `email`: your real business email address.

Do not publish the placeholder contact details.

## 2. Test locally

Open `index.html` in a browser. Test the navigation, enquiry form, phone link and WhatsApp buttons. The enquiry form opens WhatsApp with a pre-filled message; the visitor must press Send. It does not store enquiries in a database.

## 3. Upload to GitHub

Create a new public repository, for example `devtech-it-solutions`.

Upload these files and folders to the repository root:
- `index.html`
- `style.css`
- `script.js`
- `README.md`

Or use Git from the project folder:

```bash
git init
git add .
git commit -m "Create DevTech IT Solutions website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/devtech-it-solutions.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If the repository already has a remote, do not add it again.

## 4. Enable GitHub Pages

1. Open your GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**.
5. Click **Save**.
6. Wait for GitHub Pages to publish the site. Your URL will look like:
   `https://YOUR-USERNAME.github.io/devtech-it-solutions/`

## 5. Important notes

- This is a static website; no backend or database is included.
- The enquiry form prepares a WhatsApp message. Visitors must send it themselves.
- The floating WhatsApp button and phone/email links require your real details in `script.js`.
- AMC prices are sample starting prices. Confirm the scope, visit limits, service hours and final quote with each customer before signing an agreement.
- Review all business claims and contact details before making the site public.
