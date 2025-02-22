# **ShopSphere**

A modern, fully responsive e-commerce platform built with **Next.js** and integrated with **Stripe** for secure payment processing. **ShopSphere** provides a seamless and intuitive shopping experience, optimized for performance, scalability, and user engagement.

## **Table of Contents**
1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [License](#license)

## **Overview**
**ShopSphere** is a fully functional e-commerce website that allows users to browse products, add items to their cart, and securely purchase them using **Stripe**. The website is responsive and provides an excellent experience across all devices (mobile, tablet, and desktop).

### **Key Features**
- **Responsive design** for mobile and desktop devices.
- **Dynamic product listings** with categories and detailed information.
- **Secure payment integration** using **Stripe** for easy checkout.
- **Search and filter options** to help users find products efficiently.
- **Advanced filtering** based on price, brand, and other product features.
- **Dark/Light mode** toggle for a customizable user interface.

## **Features**
- **Responsive Design**: Ensures a smooth experience on any device.
- **Product Categories & Filters**: Users can easily browse products by category and apply filters like price range, size, and more.
- **Shopping Cart**: Users can add/remove products and proceed to checkout.
- **Stripe Integration**: Secure and efficient payment processing for smooth transactions.
- **Light/Dark Mode**: Option to switch between light and dark themes.
- **Advanced Filters**: Includes budget sliders, brand selection, size, color, etc.

## **Installation**

To get your local copy up and running, follow these steps:

### 1. **Clone the repository**
Clone this repository to your local machine:

```bash
git clone https://github.com/BlueRabbit-ai/ShopSphere.git
```

### 2. **Install dependencies**
Navigate into your project folder and install the required dependencies:

```bash
cd ShopSphere
npm install
```

### 3. **Set up environment variables**
Create a `.env.local` file in the root of your project and add your Stripe keys and any other necessary environment variables:

```bash
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-public-key
STRIPE_SECRET_KEY=your-secret-key
```

### 4. **Start the development server**
Run the following command to start your local development server:

```bash
npm run dev
```

You should now be able to visit the site at [http://localhost:3000](http://localhost:3000).

## **Usage**

Once the application is set up locally, you can start exploring the e-commerce site. Add items to your cart, browse products by category, and complete secure purchases via Stripe.

### **Try the Features**
- Use the search bar to find products.
- Apply filters to narrow down your product selection.
- Toggle between light and dark mode for a personalized experience.

## **Technologies Used**
- **Next.js** – Framework for building fast, scalable, and server-side-rendered web applications.
- **React** – JavaScript library for building user interfaces.
- **Stripe** – Payment processing API for secure transactions.
- **Tailwind CSS** – Utility-first CSS framework for responsive and modern design.
- **Node.js** – JavaScript runtime used for backend services.
- **GitHub** – Version control and collaboration platform.

## **Contributing**
We welcome contributions to **ShopSphere**! If you'd like to contribute, please follow these steps:

### **Fork the repository**
1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes.
3. Commit your changes: `git commit -m 'Add feature'`
4. Push your changes to your fork: `git push origin feature/your-feature-name`
5. Open a pull request to the main repository.

## **License**
This project is free to use and is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
