# Netlify Form Email Configuration

## Current Email Format

By default, Netlify sends form submissions via email in a simple text format that includes all form fields. The email will look something like this:

```
New form submission from your site

Name: John Doe
Email: john@example.com
Phone: +1234567890
Phone With Code: +1234567890
Company: ABC Company
Country: United States
Product Type: >21 mm
Quantity: 10 tons
Message: I'm interested in bulk makhana export.
```

## Customizing Email Format

You can customize the email format in two ways:

### Option 1: Netlify Dashboard (Recommended)

1. Go to your Netlify dashboard
2. Navigate to **Site settings** → **Forms** → **Form notifications**
3. Find your form (named "quote-request")
4. Click **Edit** on the notification
5. Customize the email template:
   - **Subject line**: Customize the email subject
   - **Email body**: Use HTML or plain text to format the email
   - You can use form field values with `{{field_name}}`

Example custom email template:

```html
<h2>New Quote Request</h2>
<p><strong>Contact Information:</strong></p>
<ul>
  <li>Name: {{name}}</li>
  <li>Email: {{email}}</li>
  <li>Phone: {{phoneWithCode}}</li>
  <li>Company: {{company}}</li>
  <li>Country: {{country}}</li>
</ul>
<p><strong>Product Details:</strong></p>
<ul>
  <li>Product Type: {{productType}}</li>
  <li>Quantity: {{quantity}}</li>
</ul>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

### Option 2: Custom Notification Function

For more advanced customization, you can use Netlify Functions:

1. Create a function at `netlify/functions/notify.js`
2. Configure the form to use this function
3. Customize the email format programmatically

## Form Fields Available

The following fields are submitted with the form:

- `name` - Full name
- `email` - Email address
- `phone` - Phone number (without country code)
- `phoneWithCode` - Complete phone number with country code
- `company` - Company name
- `country` - Selected country
- `productType` - Selected product type
- `quantity` - Required quantity
- `message` - Additional requirements/message

## Testing

To test form submissions:

1. Submit a test form on your site
2. Check your email inbox (the email configured in Netlify)
3. Verify all fields are included correctly

## Additional Resources

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Custom Email Notifications](https://docs.netlify.com/forms/notifications/)
