"use client";

import React, { useState } from "react";
import {
  X,
  Heart,
  ShieldCheck,
  Phone,
  Mail,
  User,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Copy,
  Check,
  QrCode,
  Printer,
  FileText,
  MapPin,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { BANK_DETAILS, TRUST_DETAILS } from "../data";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  embedMode?: boolean;
}

export default function DonationModal({
  isOpen,
  onClose,
  embedMode = false,
}: DonationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    address: "",
  });

  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [step, setStep] = useState<"details" | "payment" | "success">("details");
  const [utrNumber, setUtrNumber] = useState<string>("");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [receipt, setReceipt] = useState<{
    receiptId: string;
    date: string;
    amount: number;
    name: string;
    email: string;
    phone: string;
    pan: string;
    address: string;
    utrNumber: string;
    paymentMode: string;
  } | null>(null);

  if (!isOpen && !embedMode) return null;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const handlePresetSelect = (preset: number) => {
    // One-click select or deselect
    if (amount === preset && !customAmount) {
      setAmount(0);
      setCustomAmount("");
    } else {
      setAmount(preset);
      setCustomAmount("");
    }
  };

  const handleCustomChange = (val: string) => {
    // Only allow positive integers
    const cleaned = val.replace(/[^0-9]/g, "");
    setCustomAmount(cleaned);
    const parsed = parseFloat(cleaned);
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed);
    } else {
      setAmount(0);
    }
  };

  const validateDetails = () => {
    if (!formData.name.trim()) return "Please enter your full name.";
    if (!formData.email.trim() || !formData.email.includes("@"))
      return "Please enter a valid email address.";
    if (!formData.phone.trim() || formData.phone.length < 10)
      return "Please enter a valid 10-digit mobile number.";
    if (amount <= 0) return "Please select or enter a donation amount greater than ₹0.";
    return "";
  };

  const handleProceedToPayment = () => {
    const error = validateDetails();
    if (error) {
      setErrorMsg(error);
      return;
    }
    setErrorMsg("");
    setStep("payment");
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#b45309", "#1b4332", "#166534", "#d97706"],
    });
  };

  const handleConfirmDonation = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!utrNumber.trim()) {
      setErrorMsg("Please enter the UTR / Transaction Reference Number provided by your bank/UPI app.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    const receiptId = `DPF-80G-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`;
    const submissionDate = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          pan: formData.pan || "Not Provided",
          address: formData.address || "Not Provided",
          paymentMethod: "UPI / QR Code",
          utrNumber: utrNumber.trim(),
          paymentId: utrNumber.trim(),
        }),
      });

      const data = await response.json();

      setReceipt({
        receiptId: data.receiptId || receiptId,
        date: submissionDate,
        amount,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        pan: formData.pan || "N/A",
        address: formData.address || "N/A",
        utrNumber: utrNumber.trim(),
        paymentMode: "Direct UPI Transfer",
      });

      setStep("success");
      triggerConfetti();
    } catch (err) {
      console.error("Donation submission error:", err);
      // Fallback: provide acknowledgment even if offline
      setReceipt({
        receiptId,
        date: submissionDate,
        amount,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        pan: formData.pan || "N/A",
        address: formData.address || "N/A",
        utrNumber: utrNumber.trim(),
        paymentMode: "Direct UPI Transfer",
      });
      setStep("success");
      triggerConfetti();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  // Live UPI Payment Link and QR Code Generation
  const upiIntentUri = `upi://pay?pa=${BANK_DETAILS.upiId}&pn=${encodeURIComponent(
    BANK_DETAILS.accountName
  )}&am=${amount}&cu=INR&tn=${encodeURIComponent(
    `Donation by ${formData.name || "Well-wisher"}`
  )}`;

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&color=0b2545&backgroundColor=ffffff&data=${encodeURIComponent(
    upiIntentUri
  )}`;

  const content = (
    <div className="w-full bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl">
      {/* Top Banner / Progress Indicator */}
      <div className="bg-[#1b4332] text-white px-6 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300">
            <Heart size={20} className="fill-amber-300" />
          </div>
          <div>
            <h2 className="font-display font-bold text-lg tracking-tight">
              Direct Contribution to Dev Prabha Foundation
            </h2>
            <p className="text-xs text-stone-300">
              100% Direct Account Transfer • Zero Intermediary Gateway Fee
            </p>
          </div>
        </div>

        {!embedMode && (
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Step Tracker */}
      <div className="bg-[#f5f2eb] border-b border-[#e7e5e4] px-6 py-3 flex items-center justify-between text-xs font-semibold text-stone-500">
        <div
          className={`flex items-center space-x-1.5 ${
            step === "details" ? "text-[#b45309] font-bold" : "text-stone-600"
          }`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
              step === "details"
                ? "bg-[#b45309] text-white"
                : "bg-stone-200 text-stone-700"
            }`}
          >
            1
          </span>
          <span>Donor Details</span>
        </div>
        <ChevronRight size={14} className="text-stone-400" />
        <div
          className={`flex items-center space-x-1.5 ${
            step === "payment" ? "text-[#b45309] font-bold" : "text-stone-600"
          }`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
              step === "payment"
                ? "bg-[#b45309] text-white"
                : "bg-stone-200 text-stone-700"
            }`}
          >
            2
          </span>
          <span>Direct Payment (UPI / Bank)</span>
        </div>
        <ChevronRight size={14} className="text-stone-400" />
        <div
          className={`flex items-center space-x-1.5 ${
            step === "success" ? "text-emerald-600 font-bold" : "text-slate-600"
          }`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
              step === "success"
                ? "bg-emerald-600 text-white"
                : "bg-slate-200 text-slate-700"
            }`}
          >
            3
          </span>
          <span>80G Receipt</span>
        </div>
      </div>

      {/* Step 1: Donor & Amount Details */}
      {step === "details" && (
        <div className="p-6 md:p-8 space-y-6">
          {/* Amount Presets */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Select Donation Amount (INR)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[500, 1000, 2500, 5000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handlePresetSelect(preset)}
                  className={`py-3 px-3 rounded-2xl font-bold text-center border transition-all ${
                    amount === preset && !customAmount
                      ? "bg-[#fef3c7] border-[#b45309] text-[#b45309] shadow-soft scale-[1.02]"
                      : "bg-[#faf8f5] border-[#e7e5e4] text-stone-700 hover:bg-[#f5f2eb] hover:border-stone-300"
                  }`}
                >
                  ₹{preset.toLocaleString("en-IN")}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mt-3 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-stone-400 text-base">
                ₹
              </span>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Or enter custom amount (e.g. 10000)"
                value={customAmount}
                onChange={(e) => handleCustomChange(e.target.value)}
                className={`w-full pl-9 pr-10 py-3 bg-[#faf8f5] border rounded-2xl text-sm font-semibold focus:outline-none transition-all text-stone-800 ${
                  customAmount && amount > 0
                    ? "border-[#b45309] bg-[#fffbeb] ring-2 ring-amber-500/20"
                    : "border-[#e7e5e4] focus:border-[#b45309] focus:ring-2 focus:ring-amber-500/20"
                }`}
              />
              {customAmount && (
                <button
                  type="button"
                  onClick={() => handleCustomChange("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/60 transition-colors"
                  aria-label="Clear custom amount"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          {/* Donor Fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center space-x-1">
                  <User size={13} className="text-slate-400" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center space-x-1">
                  <Mail size={13} className="text-slate-400" />
                  <span>Email ID (for e-Receipt) *</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. ramesh@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center space-x-1">
                  <Phone size={13} className="text-slate-400" />
                  <span>Mobile Number *</span>
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value.replace(/\D/g, ""),
                    })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center space-x-1">
                  <FileText size={13} className="text-slate-400" />
                  <span>PAN Card (For 80G Tax Benefit)</span>
                </label>
                <input
                  type="text"
                  placeholder="ABCDE1234F"
                  maxLength={10}
                  value={formData.pan}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pan: e.target.value.toUpperCase(),
                    })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm uppercase font-mono tracking-wider text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center space-x-1">
                <MapPin size={13} className="text-slate-400" />
                <span>Postal Address (Optional, for formal 80G receipt)</span>
              </label>
              <input
                type="text"
                placeholder="City, State, Pin Code"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Tax Exemption Note */}
          <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex items-start space-x-3">
            <ShieldCheck size={20} className="text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-900 leading-relaxed">
              <strong className="font-bold block text-emerald-800 mb-0.5">
                Tax Exemption under Section 80G of Income Tax Act:
              </strong>
              Donations to Dev Prabha Foundation are 50% tax exempt under Section
              80G. An official e-receipt will be generated immediately after your
              transfer confirmation.
            </div>
          </div>

          {errorMsg && (
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-center space-x-2 text-rose-700 text-xs font-semibold">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Next Button */}
          <button
            type="button"
            onClick={handleProceedToPayment}
            className="w-full bg-[#b45309] hover:bg-[#92400e] text-white font-bold py-3.5 px-6 rounded-2xl shadow-soft-lg flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]"
          >
            <span>Proceed to Transfer ₹{amount.toLocaleString("en-IN")}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Step 2: Payment Options & Transfer Confirmation */}
      {step === "payment" && (
        <div className="p-6 md:p-8 space-y-6">
          {/* Amount summary pill */}
          <div className="bg-[#faf8f5] border border-[#e7e5e4] rounded-2xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xs text-stone-500 font-medium block">
                Contribution for:
              </span>
              <strong className="text-stone-800 text-sm font-bold">
                {formData.name} ({formData.phone})
              </strong>
            </div>
            <div className="text-right">
              <span className="text-xs text-stone-500 font-medium block">
                Amount to Transfer:
              </span>
              <span className="text-2xl font-display font-extrabold text-[#1b4332]">
                ₹{amount.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Official UPI & QR Code Scan Payment View */}
          <div className="space-y-4">
            <div className="bg-[#faf8f5] border border-[#e7e5e4] rounded-3xl p-5 flex flex-col md:flex-row items-center gap-6">
              {/* QR Code Container */}
              <div className="bg-white p-3 rounded-2xl border border-[#e7e5e4] shadow-soft shrink-0 text-center">
                <img
                  src={qrCodeUrl}
                  alt="Dev Prabha Foundation UPI QR"
                  className="w-48 h-48 object-contain rounded-lg mx-auto"
                />
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mt-2">
                  Scan with any UPI App
                </span>
              </div>

              {/* Direct UPI Information */}
              <div className="space-y-3 flex-1 text-left w-full">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                    Official UPI ID (VPA)
                  </span>
                  <div className="flex items-center space-x-2 mt-1">
                    <code className="bg-white px-3 py-1.5 border border-[#e7e5e4] rounded-xl font-mono text-xs font-bold text-[#1b4332] select-all">
                      {BANK_DETAILS.upiId}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopy(BANK_DETAILS.upiId, "upiId")}
                      className="p-1.5 bg-slate-200 hover:bg-slate-300 rounded-lg text-slate-700 transition-colors flex items-center space-x-1 text-xs"
                      title="Copy UPI ID"
                    >
                      {copiedField === "upiId" ? (
                        <>
                          <Check size={14} className="text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Payee Name
                  </span>
                  <strong className="text-xs text-slate-800">
                    {BANK_DETAILS.accountName}
                  </strong>
                </div>

                <div className="pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Pay Directly via Mobile Apps:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={upiIntentUri}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-semibold text-slate-700 shadow-sm flex items-center space-x-1.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>Google Pay</span>
                    </a>
                    <a
                      href={upiIntentUri}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-semibold text-slate-700 shadow-sm flex items-center space-x-1.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-600" />
                      <span>PhonePe</span>
                    </a>
                    <a
                      href={upiIntentUri}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-semibold text-slate-700 shadow-sm flex items-center space-x-1.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-600" />
                      <span>Paytm</span>
                    </a>
                    <a
                      href={upiIntentUri}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-semibold text-slate-700 shadow-sm flex items-center space-x-1.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      <span>BHIM UPI</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transfer Reference & UTR Input */}
          <div className="bg-orange-50/70 border border-orange-200 rounded-2xl p-4 space-y-3">
            <div className="flex items-start space-x-2">
              <Lock size={16} className="text-orange-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-orange-950 block">
                  Confirm Your Transfer with UTR / Ref Number
                </strong>
                <p className="text-[11px] text-orange-900/80 leading-relaxed">
                  After sending the payment from your bank or UPI app, paste your
                  12-digit UPI Reference / UTR Number below to instantly log your
                  donation and issue your official Section 80G e-Receipt.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter 12-digit UTR / Transaction Ref (e.g. 402819283746)"
                value={utrNumber}
                onChange={(e) => setUtrNumber(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-white border border-amber-300 rounded-xl text-xs font-mono tracking-wider text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              />
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => handleConfirmDonation()}
                className="bg-[#1b4332] hover:bg-[#143527] text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-soft transition-all flex items-center justify-center space-x-1.5 shrink-0"
              >
                {isSubmitting ? (
                  <span>Logging Transfer...</span>
                ) : (
                  <>
                    <CheckCircle size={14} className="text-emerald-400" />
                    <span>Confirm & Get 80G Receipt</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {errorMsg && (
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-center space-x-2 text-rose-700 text-xs font-semibold">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-2">
            <button
              type="button"
              onClick={() => setStep("details")}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
            >
              ← Edit Donor Info
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Official 80G E-Receipt */}
      {step === "success" && receipt && (
        <div className="p-6 md:p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle size={28} />
            </div>
            <h3 className="font-display font-black text-2xl text-slate-900 tracking-tight">
              Thank You for Your Generous Support!
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Your contribution directly empowers our free medical camps, hospital
              construction, child education, and women skilling programs.
            </p>
          </div>

          {/* Official Printable 80G Receipt Card */}
          <div className="receipt-printable bg-slate-50 border border-slate-300 rounded-2xl p-6 space-y-4 shadow-sm text-left">
            {/* Trust Header */}
            <div className="border-b border-slate-300 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <img
                    src="/images/logo.png"
                    alt="Dev Prabha Foundation Emblem"
                    className="h-8 w-auto object-contain shrink-0"
                  />
                  <div className="flex flex-col justify-center leading-none text-left">
                    <span className="font-display font-black text-xs tracking-tight text-[#b45309] leading-none">
                      DevPrabha
                    </span>
                    <div className="relative inline-block mt-0.5">
                      <span className="font-display font-black text-[11px] tracking-tight text-[#163352] leading-none block">
                        Foundation
                      </span>
                      <img
                        src="/images/underline.png"
                        alt=""
                        className="w-full h-auto max-h-[5px] object-contain select-none pointer-events-none mt-0.5"
                      />
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#b45309] block">
                  Official Donation Acknowledgment
                </span>
                <h4 className="font-display font-black text-lg text-[#1b4332] tracking-tight">
                  {TRUST_DETAILS.ngoName}
                </h4>
                <p className="text-[11px] text-slate-600">
                  {TRUST_DETAILS.registeredOffice}
                </p>
              </div>
              <div className="text-left sm:text-right text-[11px] text-slate-600 space-y-0.5">
                <div>
                  <strong>Receipt No:</strong> {receipt.receiptId}
                </div>
                <div>
                  <strong>Date:</strong> {receipt.date}
                </div>
                <div>
                  <strong>NGO Darpan ID:</strong> {TRUST_DETAILS.darpanId}
                </div>
              </div>
            </div>

            {/* Legal Badges */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] text-slate-600">
              <div>
                <span className="block text-slate-400 font-bold uppercase">
                  Trust Reg. No.
                </span>
                <strong>{TRUST_DETAILS.registrationNumber}</strong>
              </div>
              <div>
                <span className="block text-slate-400 font-bold uppercase">
                  12A Registration
                </span>
                <strong className="truncate block" title={TRUST_DETAILS.section12A}>
                  {TRUST_DETAILS.section12A}
                </strong>
              </div>
              <div>
                <span className="block text-slate-400 font-bold uppercase">
                  80G Exemption No.
                </span>
                <strong className="truncate block" title={TRUST_DETAILS.section80G}>
                  {TRUST_DETAILS.section80G}
                </strong>
              </div>
            </div>

            {/* Donor & Amount Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
              <div className="space-y-1">
                <span className="text-slate-400 font-bold uppercase text-[10px] block">
                  Donor Details
                </span>
                <div>
                  <strong>Name:</strong> {receipt.name}
                </div>
                <div>
                  <strong>Mobile:</strong> {receipt.phone}
                </div>
                <div>
                  <strong>Email:</strong> {receipt.email}
                </div>
                <div>
                  <strong>PAN:</strong> {receipt.pan}
                </div>
                {receipt.address && receipt.address !== "N/A" && (
                  <div>
                    <strong>Address:</strong> {receipt.address}
                  </div>
                )}
              </div>

              <div className="space-y-1 sm:text-right">
                <span className="text-slate-400 font-bold uppercase text-[10px] block">
                  Contribution Summary
                </span>
                <div className="text-2xl font-display font-extrabold text-emerald-700">
                  ₹{receipt.amount.toLocaleString("en-IN")}
                </div>
                <div className="text-[11px] text-slate-600">
                  <strong>Transfer Mode:</strong> {receipt.paymentMode}
                </div>
                <div className="text-[11px] text-slate-600">
                  <strong>UTR / Reference ID:</strong> {receipt.utrNumber}
                </div>
              </div>
            </div>

            {/* Trust Declaration */}
            <div className="border-t border-slate-200 pt-3 text-[10px] text-slate-500 leading-relaxed italic">
              * This is a computer-generated donation confirmation receipt for
              Dev Prabha Foundation. Donations are eligible for deduction under
              Section 80G(5)(vi) of the Income Tax Act, 1961. Formal certificate
              Form 10BE will be dispatched to your registered email at the end of
              the financial quarter.
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={handlePrintReceipt}
              className="flex-1 bg-[#1b4332] hover:bg-[#143527] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-soft transition-all"
            >
              <Printer size={16} />
              <span>Print / Save Receipt (PDF)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setStep("details");
                setUtrNumber("");
              }}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors"
            >
              <Sparkles size={16} className="text-orange-500" />
              <span>Make Another Contribution</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );

  if (embedMode) {
    return content;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {content}
      </div>
    </div>
  );
}
