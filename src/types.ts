export interface Activity {
  id: string;
  title: string;
  description: string;
  category: 'healthcare' | 'education' | 'women' | 'environment' | 'rural' | 'general';
  image: string;
  fullContent?: string;
  impact?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'ongoing' | 'completed' | 'upcoming' | '';
  location: string;
  beneficiaries: string;
  details: string;
}

export interface Quote {
  text: string;
  author: string;
  role?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  content: string[];
}

export interface VolunteerRegistration {
  name: string;
  email: string;
  phone: string;
  address: string;
  occupation: string;
  message: string;
}

export interface DonationDetails {
  amount: number;
  name: string;
  email: string;
  phone: string;
  paymentMethod: 'upi' | 'bank_transfer' | 'qr';
  pan?: string;
  address?: string;
  utrNumber?: string;
  receiptId?: string;
  date?: string;
}

export interface BankDetails {
  accountName: string;
  accountNumber: string;
  ifscCode: string;
  bankName: string;
  branch: string;
  accountType: string;
  upiId: string;
  taxExemption: string;
  panNumber: string;
}

export interface TrustLegalDetails {
  ngoName: string;
  ngoType: string;
  registrationNumber: string;
  registrationDate: string;
  darpanId: string;
  section12A: string;
  section80G: string;
  registeredOffice: string;
  contactPhone: string;
  contactEmail: string;
  secondaryEmail?: string;
  website: string;
}
