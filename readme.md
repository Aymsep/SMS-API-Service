# SMS API Express Server

This Express server provides an API endpoint for sending SMS messages. It follows an MVC (Model-View-Controller) folder structure for better organization.

## Setup Instructions

1. Clone this repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd sms-api-express
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

## Usage Instructions

To use this API, you need to have your own authentication key. Please follow these steps:

1. Acquire an authentication key from the service provider (e.g., Twilio, Nexmo).

2. Once you have obtained the authentication key, include it in the request headers when sending a request to the `/smsApi` endpoint.

    Example:

    ```http
    POST /smsApi HTTP/1.1
    Host: yourdomain.com
    Content-Type: application/json
    x-auth-key: your-authentication-key

    {
      "from": "Sender's Number",
      "text": "Your message here",
      "to": "Recipient's Number"
    }
    ```

3. Replace `yourdomain.com` with the actual domain where the server is hosted.

4. Replace `your-authentication-key` with your actual authentication key.

5. Replace the `from`, `text`, and `to` fields with appropriate values for your SMS message.

6. Send the request to the `/smsApi` endpoint.

## Deployment

This application is deployed on Azure services. To deploy your own instance, you can use the Azure service extension.

## Contributors

- [Your Name](https://github.com/yourusername)

## License

This project is licensed under the [MIT License](LICENSE).
