import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const EmailTemplate = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}: EmailTemplateProps) => (
  <div>
    <h1>From PlusEv Website Reachout</h1>
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Email: {email}</p>
    <p>Phone Number: {phoneNumber}</p>
    <p>Message: {message}</p>
  </div>
);
