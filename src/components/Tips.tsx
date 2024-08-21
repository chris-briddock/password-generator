import React from "react";

const tips = [
    "Use Strong Passwords: Combine uppercase and lowercase letters, numbers, and special characters to create complex passwords.",
    "Avoid Common Passwords: Don’t use easily guessable passwords like “password123” or “admin.”",
    "Use a Password Manager: A password manager can generate and store complex passwords for you, reducing the need to remember them all.",
    "Enable Two-Factor Authentication (2FA): Add an extra layer of security by requiring a second form of verification, like a code sent to your phone.",
    "Change Passwords Regularly: Update your passwords every few months, especially for critical accounts like email and banking.",
    "Don’t Reuse Passwords: Use a unique password for each account to prevent one breach from compromising multiple accounts.",
    "Avoid Using Personal Information: Don’t use easily accessible personal details like your name, birthday, or pet’s name in your passwords.",
    "Use Passphrases: Combine random words to create a longer, memorable passphrase, such as “RiverRedAppleGuitar.”",
    "Watch for Phishing Attempts: Be wary of emails or messages asking for your password or personal information, even if they appear legitimate.",
    "Don’t Share Your Passwords: Never share your passwords with anyone, not even trusted friends or family.",
    "Log Out When Not in Use: Always log out of accounts when you’re finished, especially on shared or public computers.",
    "Disable Autofill for Sensitive Accounts: Don’t allow browsers to store passwords for important accounts like banking or email.",
    "Use Biometric Authentication: Where possible, use biometric security like fingerprint or facial recognition to secure your devices.",
    "Avoid Passwords with Sequential Numbers or Letters: Don’t use sequences like “123456” or “abcdef,” which are easily guessed.",
    "Secure Your Email: Protect your email account with a strong password since it’s often the key to resetting other accounts.",
    "Use Security Questions Wisely: Choose security questions with answers that are difficult to guess or research, and consider providing false answers.",
    "Beware of Public Wi-Fi: Avoid logging into accounts on unsecured public Wi-Fi networks, or use a VPN if necessary.",
    "Monitor Your Accounts for Suspicious Activity: Regularly check your accounts for any unauthorized logins or changes.",
    "Be Cautious with Password Recovery Options: Ensure that your backup email and phone number are secure and up-to-date.",
    "Set Up Alerts for Account Activity: Enable notifications for login attempts, password changes, or other account activity.",
    "Keep Software Updated: Regularly update your software, including password managers, to protect against vulnerabilities.",
    "Use Encrypted Storage: Store your passwords and other sensitive information in encrypted storage if you must write them down.",
    "Be Wary of Shoulder Surfing: Be cautious when entering your password in public spaces where others can see.",
    "Avoid Using the Same Password Across Multiple Devices: Ensure that different devices, especially work and personal ones, have different passwords.",
    "Use Temporary Passwords for Shared Accounts: If you must share an account, use a temporary password that you can change later.",
    "Keep Your Recovery Information Secure: Ensure your recovery email and phone number are secure and not easily accessible by others.",
    "Secure Your Devices with Strong Passwords: Protect your devices (laptops, phones, etc.) with strong passwords or PINs.",
    "Don’t Save Passwords in Plain Text: Never store passwords in plain text files or documents that can be easily accessed.",
    "Use a Different Password for Your Primary Email: Make sure your primary email password is unique and especially strong, as it’s often linked to password recovery.",
    "Educate Yourself About Security Threats: Stay informed about the latest security threats and password protection techniques.",
  ];

const Tips: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Password Security Tips</h1>
      <ul className="list-decimal list-inside space-y-4">
        {tips.map((tip, index) => (
          <li key={index} className="text-lg bg-white shadow-md p-4 rounded-lg">
            {tip}
          </li>
        ))}
      </ul>
    </div>
    );
}

export default Tips;