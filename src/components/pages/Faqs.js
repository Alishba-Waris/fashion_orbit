import React from 'react';
import "../../assets/css/Faqs.css";

const Faqs = () => {
  return (
    <>
      <div className="faq-section">
        <div className="faq-item">
          <h3 className="faq-question">Do I need to create a member account?</h3>
          <p className="faq-answer">
            You can browse our website and add items to your basket without creating an account, and can place the order with guest checkout. But creating a member account will provide you with the following benefits:
          </p>
          <ul className="faq-list">
            <li>Making the shopping process easier</li>
            <li>Save delivery addresses</li>
            <li>View all previous orders from your account</li>
            <li>Check your order status before it’s shipped</li>
          </ul>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">What if I forget my password?</h3>
          <p className="faq-answer">
            Click on ‘Forgot Your Password’ available at the login/sign-up page. Enter your email address and click on ‘Reset Password’. A set of instructions will be sent to your registered email to reset your password. After your credentials have been verified, you will be able to create a new password.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">How can I update or edit my shipping/billing address details?</h3>
          <p className="faq-answer">
            First login and click on ‘My Account’. You will be able to edit/update your particulars in your account and save them for future orders. You can also update your password from there.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">How do I order online?</h3>
          <p className="faq-answer">
            To purchase any product on the Nishat eStore, simply click on the item you wish to buy, select the required size/color and click 'add to cart'. You will get a pop-up that added to your cart. Click ‘proceed to checkout’ button and provide all your delivery details at checkout page. Don’t forget to provide a valid phone number and email. After that select your desired payment option from the dropdown list and click ‘place order’ button.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">How do I know that my order is placed or not?</h3>
          <p className="faq-answer">
            Nishat eStore uses a highly precise automated email system. After successfully placing the order, you will get the confirmation email at your valid email address within time. You will get your order summary/invoice with your order number. If you do not receive an email, your order was not successfully placed.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">Why does the item in my cart now say it is unavailable?</h3>
          <p className="faq-answer">
            Unfortunately, adding items to your cart does not reserve them. Items remain available to others until they are checked out and purchased. If you receive an error about unavailable items during checkout, remove them to continue the process. For assistance, contact nishatonline@nishatmills.com.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">Can I cancel my order?</h3>
          <p className="faq-answer">
            Yes, you can cancel or change your order while you are still shopping by removing it from your cart. However, once your order is confirmed, it cannot be changed or canceled prior to dispatch. If you need to return it after delivery, please refer to our Returns Policy.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">How can I pay on your site?</h3>
          <p className="faq-answer">
            At Nishat eStore, we offer the following payment options:
          </p>
          <ul className="faq-list">
            <li>Cash On Delivery (Only in Pakistan)</li>
            <li>Online/Credit Card (Visa or Master Credit/Debit)</li>
          </ul>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">How secure are my credit card and personal information?</h3>
          <p className="faq-answer">
            Your security while shopping online with Nishat is of utmost importance. We use SSL encryption to keep your personal and payment information safe. Look for the padlock icon in your browser to verify our site's security.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">What currency do you use?</h3>
          <p className="faq-answer">All prices are displayed in Pakistani Rupees (PKR), including GST.</p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">How long will my order take to be delivered?</h3>
          <p className="faq-answer">
            Shipping within Pakistan takes 7 working days, and international shipments take 14 working days. During high-demand periods, such as Mother’s Day, delivery may take between 5-7 working days.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">What courier services do you use for shipping?</h3>
          <p className="faq-answer">
            We use Call Courier, Leopards, M&P, TCS, TRAX, and Swyft for domestic deliveries. For international orders, we use DHL.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">What if I am not available at the time of order delivery?</h3>
          <p className="faq-answer">
            Our courier attempts delivery twice. Please ensure that your delivery address and postal code are accurate. After two failed attempts, the item will be returned to Nishat, and you will receive an email confirmation.
          </p>
        </div>


        <div className="faq-item">
          <h3 className="faq-question">How do I check the delivery status?</h3>
          <p className="faq-answer">
            After dispatch, you will receive a tracking number via SMS or email. You can track your order on the relevant courier's website:
          </p>
          <table className="tracking-table">
            <thead>
              <tr>
                <th>Courier Service</th>
                <th>Tracking Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DHL</td>
                <td><a href="http://www.dhl.com.pk/en/express/tracking.html">Track Order</a></td>
              </tr>
              <tr>
                <td>Call Courier</td>
                <td><a href="https://callcourier.com.pk/tracking/">Track Order</a></td>
              </tr>
              <tr>
                <td>TCS</td>
                <td><a href="https://www.tcsexpress.com/tracking">Track Order</a></td>
              </tr>
              <tr>
                <td>TRAX</td>
                <td><a href="https://parceltracking.swyftlogistics.com/">Track Order</a></td>
              </tr>
              <tr>
                <td>Riders</td>
                <td><a href="https://track.withrider.com/#/">Track Order</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



    </>
  )
}

export default Faqs