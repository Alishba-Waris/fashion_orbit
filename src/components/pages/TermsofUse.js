import React from 'react'
import "../../assets/css/TermsofUse.css";


const TermsofUse = () => {
    return (
        <>
            <div className="tou_container">
                <h1 className="tou_title">TERMS OF USE</h1>

                <h2 className='tou_h'>Table of Content</h2>
                <ul className="tou">
                    <li><a href="#introduction">Introduction</a></li>
                    <li><a href="#information-collection">Information Collection</a></li>
                    <li><a href="#use-of-information">Use of Information</a></li>
                    <li><a href="#marketing-updates">Marketing Updates</a></li>
                    <li><a href="#your-rights">Your Rights</a></li>
                </ul>

                <h2 className='tou_h' id="introduction">INTRODUCTION</h2>
                <p className='tou_p'>FashionOrbit’s top priority is your privacy protection when dealing with us. To safeguard your trust, we have a policy that recognizes the importance of protecting your personal information; explaining what personal information constitutes, how we use the information, who has access to your data, and what are your rights regarding your personal information.</p>

                <p className='tou_p'>This Privacy Policy does not apply to websites maintained by other companies or organizations to which we link and FashionOrbit is not responsible for any personal information you submit to third parties via our website. Please ensure that you read the Privacy Policy of such other companies or organizations before submitting your details. Your access and use of FashionOrbit.pk constitute your acceptance of our Privacy Policy and Terms of Use.</p>

                <h2 className='tou_h' id="information-collection">INFORMATION COLLECTION</h2>
                <p className='tou_p'>FashionOrbit may collect and use your personal data for the following purposes:</p>
                <ul className='tou_IS'>
                    <li>For signing up and order processing, your personal contact details including name, title, address, email address and telephone number are collected.</li>
                    <li>Details of transactions, purchases and queries.</li>
                    <li>Correspondence record with you via telephone, messengers, live chat, social media, emails or any other medium.</li>
                    <li>Details of your browsing and visits to the website, and also the information regarding the interaction pattern of your device with our online store including search, browsing, pages you accessed, and the links clicked to.</li>
                </ul>

                <h2 className=' tou_h' id="use-of-information">USE OF DATA & INFORMATION</h2>
                <p className='tou_p'>We collect, maintain, and unveil information for the following purposes and ensure that the data is not shared for any irrelevant or incompatible purpose.</p>

                <h2 className='tou_h' id="marketing-updates">MARKETING UPDATES</h2>
                <p className='tou_p'>We email our users who subscribe to our services on a regular basis. For example, we may use your email address to confirm your request, to send you notice of payments, information about changes to our products and services, and notices and other disclosures as required by law.</p>

                <h2 className='tou_h'id="your-rights">YOUR RIGHTS</h2>
                <p className='tou_p'>You have the right to request information about the personal data we hold on you. If your data is incorrect, incomplete, or irrelevant you can ask to have the information corrected or removed.</p>
            </div>
        </>
    )
}

export default TermsofUse