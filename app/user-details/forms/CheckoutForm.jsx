"use client";
import { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Image from "next/image";
import DabitCard from "@/components/assets/images/DabitCard.svg";
import toast from "react-hot-toast";
import {
  createPaymentMethod,
  processPayment,
} from "../../services/paymentService";

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "14px",
      color: "#1a1a1a",
      fontFamily: "inherit",
      "::placeholder": {
        color: "#9ca3af",
      },
    },
    invalid: {
      color: "#ef4444",
      iconColor: "#ef4444",
    },
  },
};

function CheckoutForm({ onPaymentSuccess, selectedBillingCycle }) {
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    billingzip: "",
  });
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe has not loaded yet. Please wait.");
      return;
    }

    if (!formData.fname.trim()) {
      toast.error("Please enter your first name");
      return;
    }

    setProcessing(true);
    setCardError("");

    try {
      const cardNumberElement = elements.getElement(CardNumberElement);
      const fullName = [formData.fname, formData.mname, formData.lname]
        .filter(Boolean)
        .join(" ")
        .trim();

      const { error: stripeError, paymentMethod: stripePaymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardNumberElement,
          billing_details: {
            name: fullName,
            address: {
              postal_code: formData.billingzip.trim() || undefined,
            },
          },
        });

      if (stripeError) {
        setCardError(stripeError.message);
        toast.error(stripeError.message);
        setProcessing(false);
        return;
      }
      const createRes = await createPaymentMethod({
        stripe_payment_method_id: stripePaymentMethod.id,
      });

      const dbPaymentMethodId = createRes?.data?.paymentMethod?.id;

      if (!dbPaymentMethodId) {
        toast.error("Failed to save payment method");
        setProcessing(false);
        return;
      }
      const paymentRes = await processPayment({
        paymentMethodId: dbPaymentMethodId,
        autoRenew: selectedBillingCycle !== "one_time",
      });

      if (paymentRes?.success || paymentRes?.status === "succeeded") {
        toast.success(paymentRes?.message || "Payment successful!");
        onPaymentSuccess?.(paymentRes);
      } else if (paymentRes?.requiresAction && paymentRes?.clientSecret) {
        // Handle 3D Secure authentication
        const { error: confirmError } = await stripe.confirmCardPayment(
          paymentRes.clientSecret,
        );
        if (confirmError) {
          toast.error(confirmError.message || "Authentication failed");
        } else {
          toast.success("Payment successful!");
          onPaymentSuccess?.(paymentRes);
        }
      } else {
        toast.error(paymentRes?.message || "Payment could not be completed");
      }
    } catch (error) {
      console.error("Payment error:", error);
      const msg =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "Payment failed. Please try again.";
      toast.error(msg);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-4">
        <div>
          <label
            htmlFor="fname"
            className="text-text-4 text-sm font-medium mb-1.5"
          >
            First Name
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="Olivia Rhye"
            className="w-full text-text-1 border border-black/10 rounded-lg p-2 py-1.75 shadow"
          />
        </div>
        <div>
          <label
            htmlFor="mname"
            className="text-text-4 text-sm font-medium mb-1.5"
          >
            Middle Name
          </label>
          <input
            type="text"
            id="mname"
            name="mname"
            value={formData.mname}
            onChange={handleChange}
            placeholder="Olivia Rhye"
            className="w-full text-text-1 border border-black/10 rounded-lg p-2 py-1.75 shadow"
          />
        </div>
        <div>
          <label
            htmlFor="lname"
            className="text-text-4 text-sm font-medium mb-1.5"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Olivia Rhye"
            className="w-full text-text-1 border border-black/10 rounded-lg p-2 py-1.75 shadow"
          />
        </div>

        <div className="relative">
          <label className="text-text-4 text-sm font-medium mb-1.5">
            Card number
          </label>
          <div className="relative">
            <div className="w-full border border-black/10 rounded-lg pl-9 p-2 py-2.5 shadow bg-white">
              <CardNumberElement
                options={{
                  ...ELEMENT_OPTIONS,
                  showIcon: false,
                  placeholder: "1234 1234 1234 1234",
                }}
                onChange={(e) => {
                  if (e.error) setCardError(e.error.message);
                  else setCardError("");
                }}
              />
            </div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              <Image src={DabitCard} alt="Card" width={24} height={18} />
            </div>
          </div>
        </div>

        <div>
          <label className="text-text-4 text-sm font-medium mb-1.5">CVV</label>
          <div className="w-full border border-black/10 rounded-lg p-2 py-2.5 shadow bg-white">
            <CardCvcElement
              options={{
                ...ELEMENT_OPTIONS,
                placeholder: "•••",
              }}
            />
          </div>
        </div>

        <div>
          <label className="text-text-4 text-sm font-medium mb-1.5">
            Expiry
          </label>
          <div className="w-full border border-black/10 rounded-lg p-2 py-2.5 shadow bg-white">
            <CardExpiryElement
              options={{
                ...ELEMENT_OPTIONS,
                placeholder: "06 / 2025",
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="billingzip"
          className="text-text-4 text-sm font-medium mb-1.5"
        >
          Billing Zip
        </label>
        <input
          type="text"
          id="billingzip"
          name="billingzip"
          value={formData.billingzip}
          onChange={handleChange}
          placeholder="SW1A 1AA"
          className="w-full text-text-1 border border-black/10 rounded-lg p-2 py-1.75 shadow"
        />
        {cardError && (
          <p className="text-red-500 text-sm mt-1.5">{cardError}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={processing || !stripe}
          className="w-full bg-main cursor-pointer mt-4 text-white p-3 rounded-lg font-semibold hover:bg-main/85 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {processing ? "Processing payment..." : "Yes, start my membership"}
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
