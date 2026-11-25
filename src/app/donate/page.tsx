"use client";

import React from "react";
import DonationModal from "@/components/DonationModal";
import {
  ShieldCheck,
  Building2,
  QrCode,
  Heart,
  HelpCircle,
  FileCheck,
} from "lucide-react";
import { BANK_DETAILS, TRUST_DETAILS } from "@/data";

export default function DonatePage() {
  return (
    <div
      id="donate-tab-content"
      className="py-16 md:py-24 bg-[#faf8f5] animate-in fade-in duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#b45309] bg-[#fef3c7] px-4 py-1.5 rounded-full">
            <Heart size={14} className="fill-[#b45309]" />
            <span>Direct Account Contribution</span>
          </span>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1b4332] tracking-tight leading-tight">
            Support Dev Prabha Foundation Directly
          </h1>

          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            Every single rupee of your contribution goes directly into our official
            trust bank account to fund free medical camps, 200-bed hospital construction,
            underprivileged child education, and women skilling centers.
          </p>

          {/* Trust Highlights Strip */}
          <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-semibold text-stone-700">
            <div className="flex items-center space-x-1.5 bg-white border border-[#e7e5e4] px-3 py-1.5 rounded-full shadow-soft">
              <ShieldCheck size={16} className="text-emerald-700" />
              <span>Section 80G Tax Exemption</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white border border-[#e7e5e4] px-3 py-1.5 rounded-full shadow-soft">
              <Building2 size={16} className="text-[#1b4332]" />
              <span>Direct PNB Account Transfer</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white border border-[#e7e5e4] px-3 py-1.5 rounded-full shadow-soft">
              <QrCode size={16} className="text-[#b45309]" />
              <span>Zero Intermediary Gateway Fees</span>
            </div>
          </div>
        </div>

        {/* Main Donation Container */}
        <div className="max-w-4xl mx-auto">
          <DonationModal isOpen={true} onClose={() => {}} embedMode={true} />
        </div>

        {/* Transparency & Direct Account Summary Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {/* Direct UPI Contribution Box (Zero Raw Bank Numbers Exposed) */}
          <div className="bg-white rounded-3xl p-6 border border-[#e7e5e4] shadow-soft space-y-4">
            <div className="flex items-center space-x-2.5 text-[#1b4332] font-bold text-base border-b border-[#e7e5e4] pb-3">
              <div className="w-8 h-8 rounded-xl bg-[#1b4332]/10 flex items-center justify-center text-[#1b4332]">
                <QrCode size={18} className="text-[#b45309]" />
              </div>
              <span>Direct Contribution Channel</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Beneficiary:</span>
                <strong className="text-stone-800 font-bold">{BANK_DETAILS.accountName}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Bank Partner:</span>
                <strong className="text-stone-800">Punjab National Bank</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Branch:</span>
                <strong className="text-stone-800">Sugauli, East Champaran, Bihar</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Account Type:</span>
                <strong className="text-[#1b4332] font-semibold">Public Charitable Trust Current Account</strong>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-500">Gateway Deductions:</span>
                <span className="text-emerald-700 font-bold">0% (100% Direct to Welfare)</span>
              </div>
            </div>
          </div>

          {/* Legal Registrations & Tax Exemption Box */}
          <div className="bg-white rounded-3xl p-6 border border-[#e7e5e4] shadow-soft space-y-4">
            <div className="flex items-center space-x-2.5 text-emerald-800 font-bold text-base border-b border-[#e7e5e4] pb-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <FileCheck size={18} />
              </div>
              <span>Legal Accreditations & 80G</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">NGO Registration:</span>
                <strong className="text-stone-800">{TRUST_DETAILS.registrationNumber} (Reg. Act 60)</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">NITI Aayog Darpan ID:</span>
                <strong className="text-stone-800 font-mono font-bold">{TRUST_DETAILS.darpanId}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Section 12A Ref:</span>
                <strong className="text-stone-800 truncate max-w-[200px]" title={TRUST_DETAILS.section12A}>{TRUST_DETAILS.section12A}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Section 80G Ref:</span>
                <strong className="text-stone-800 truncate max-w-[200px]" title={TRUST_DETAILS.section80G}>{TRUST_DETAILS.section80G}</strong>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-500">Tax Exemption Benefit:</span>
                <span className="text-emerald-700 font-bold">50% Relief under 80G</span>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto bg-[#f5f2eb]/70 rounded-3xl p-6 md:p-8 space-y-6 border border-[#e7e5e4]">
          <div className="flex items-center space-x-2 text-[#1b4332]">
            <HelpCircle size={20} className="text-[#b45309]" />
            <h3 className="font-display font-bold text-xl tracking-tight">
              Donation Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-stone-600 leading-relaxed">
            <div className="bg-white p-4 rounded-2xl border border-[#e7e5e4] space-y-1.5 shadow-soft">
              <strong className="text-stone-900 font-bold block text-sm">
                How do I get my Section 80G tax receipt?
              </strong>
              <p>
                When you make a direct transfer and enter your UTR/Reference number along with your PAN card, an official e-receipt is generated immediately for download. We also email a copy for your income tax filings.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#e7e5e4] space-y-1.5 shadow-soft">
              <strong className="text-stone-900 font-bold block text-sm">
                Why direct bank / UPI transfer instead of Razorpay?
              </strong>
              <p>
                Payment gateways take 2% to 3% in processing fees. Direct account transfers ensure 100% of your funds go straight to healthcare and village beneficiaries without deductions.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#e7e5e4] space-y-1.5 shadow-soft">
              <strong className="text-stone-900 font-bold block text-sm">
                Can I donate using Google Pay, PhonePe, or Paytm?
              </strong>
              <p>
                Yes! Simply scan our official UPI QR code with any mobile UPI app or send directly to our VPA <code className="font-mono bg-stone-100 px-1 py-0.5 rounded text-[#b45309]">{BANK_DETAILS.upiId}</code>.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#e7e5e4] space-y-1.5 shadow-soft">
              <strong className="text-stone-900 font-bold block text-sm">
                What projects do my donations support?
              </strong>
              <p>
                Your donations directly fund the upcoming 200-bed DevPrabha Memorial Hospital in Sugauli, Sanjeevani Free Medical Camps, school retention tutoring, and rural women skill centers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
