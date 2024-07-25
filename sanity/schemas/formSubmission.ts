
import { defineType } from "sanity";
export const formSubmission= defineType ({
    name: 'formSubmission',
    type: 'document',
    title: 'Form Submission',
    fields: [
      {
        name: 'fullName',
        type: 'string',
        title: 'Full Name',
        readOnly: true,
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        readOnly:true,
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Phone Number',
        readOnly:true,
      },
      {
        name: 'goldRobot',
        type: 'boolean',
        title: 'Gold Robot',
        readOnly:true,
      },
      {
        name: 'forexRobot',
        type: 'boolean',
        title: 'Forex Robot',
        readOnly:true,
      },
    ],
  });
  