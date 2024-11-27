# Wedding Website 💍🎉

Welcome to the repository for our **Wedding Website**! This project is a simple and elegant web application designed to share all the important details about our special day, including RSVP options, a wishing well, FAQs, and more.

---

## 🚀 Features

- **Responsive Design**: Fully mobile-friendly to ensure a smooth experience across all devices.
- **RSVP Form**: Guests can easily RSVP online.
- **Wishing Well**: A dedicated section to contribute to our honeymoon fund.
- **FAQs**: Answers to common questions about the event.
- **Scroll Navigation**: Smooth scroll navigation for quick access to each section.
- **Modern Design**: Beautifully styled using Bootstrap and custom CSS.

---

## 📂 Project Structure

```
/public
  ├── index.html       # Main HTML file
  ├── favicon.ico      # Website icon
/src
  ├── components       # React components for different sections
  │   ├── Navbar.js    # Navigation bar
  │   ├── RSVPForm.js  # RSVP form
  │   ├── WishingWell.js # Honeymoon fund section
  │   ├── FAQs.js      # Frequently Asked Questions
  │   ├── Footer.js    # Footer section
  ├── App.js           # Main app entry point
  ├── index.js         # React DOM rendering
  ├── styles.css       # Custom styles
```

---

## 🛠️ Technologies Used

- **React**: JavaScript library for building the UI.
- **React Router**: For navigation and hash-based scrolling.
- **Bootstrap 5**: For responsive design and components.
- **EmailJS**: For RSVP form submission.
- **GitHub Pages**: For deployment.

---

## 💻 Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/wedding-site.git
   cd wedding-site
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Set Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   REACT_APP_EMAILJS_USER_ID=your_emailjs_user_id
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

The website is deployed using **GitHub Pages**. To deploy:

1. Build the app:
   ```bash
   npm run build
   ```

2. Push to the `gh-pages` branch:
   ```bash
   npm run deploy
   ```

---

## 📋 Roadmap

- [ ] Add a countdown timer to the wedding date.
- [ ] Include a photo gallery of pre-wedding events.
- [ ] Improve RSVP form validations.
- [ ] Add dark mode support.

---

## 💌 Contributing

We appreciate your interest in contributing! Feel free to open issues or submit pull requests with suggestions or fixes.

---

## 🖼️ Preview

You can visit the live site here: **[Wedding Website](https://theguardswedding.site/)**

---

## 📄 License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project as you like. See the `LICENSE` file for more details.

---

Thank you for visiting our repository! We’re excited to celebrate this special day with you all! ❤️