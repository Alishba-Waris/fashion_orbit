import React from 'react';
import "../../assets/css/PrivacyPolicy.css";

const PrivacyPolicy = () => {
    return (

        <>
            <div className="privacy-policy-container">
                <h1 className="privacy-title">Privacy Policy</h1>

                <p className="privacy-intro">
                    Welcome to FashionOrbit! Your privacy is critically important to us. This policy outlines how we collect, use, and protect your personal 
                    information when you visit and shop on our website.
                </p>

                <h2 className="section-title">Information We Collect</h2>
                <p className="privacy-text">
                    We collect personal information such as your name, email address, billing and shipping details, and phone number when you place an order or 
                    create an account on FashionOrbit. We also collect non-personal data, like browsing history and device details, to improve your shopping 
                    experience.
                </p>

                <h2 className="section-title">How We Use Your Information</h2>
                <p className="privacy-text">
                    Your personal data is used for processing orders, handling customer service inquiries, and sending promotional emails (if you opt in). We do
                     not sell or share your information with third-party services without your explicit consent, except for shipping and payment providers.
                </p>

                <h2 className="section-title">Cookies</h2>
                <p className="privacy-text">
                    FashionOrbit uses cookies to personalize your shopping experience and remember your preferences. You can disable cookies in your browser, 
                    but this may limit your ability to use certain features of the website.
                </p>

                <h2 className="section-title">Data Security</h2>
                <p className="privacy-text">
                    We take the security of your personal information seriously and use SSL encryption to protect your data. However, please note that no method 
                    of online transmission or storage is 100% secure.
                </p>

                <h2 className="section-title">Your Rights</h2>
                <p className="privacy-text">
                    You have the right to access, update, or delete your personal information at any time. Simply contact our customer service team, and we will
                     assist you with any requests related to your data.
                </p>

                <h2 className="section-title">Changes to This Policy</h2>
                <p className="privacy-text">
                    We may update this privacy policy periodically. Any changes will be posted on this page, so please review it regularly to stay informed 
                    of how we protect your data.
                </p>

                <p className="privacy-contact">
                    If you have any questions about our Privacy Policy, feel free to contact us at: <a href="mailto:privacy@fashionorbit.com">
                        privacy@fashionorbit.com</a>.
                </p>
            </div>

        </>
    )
}

export default PrivacyPolicy