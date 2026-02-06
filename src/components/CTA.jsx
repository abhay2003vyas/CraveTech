// src/components/CTA.jsx
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowForward } from "@mui/icons-material";

const CTAButton = styled(Button)(() => ({
  backgroundColor: "#DC2626",
  color: "#FFFFFF",
  fontWeight: 600,
  padding: "14px 36px",
  fontSize: "15px",
  borderRadius: "10px",
  textTransform: "none",
  boxShadow: "0 8px 24px rgba(220, 38, 38, 0.35)",
  "&:hover": {
    backgroundColor: "#B91C1C",
    boxShadow: "0 12px 32px rgba(220, 38, 38, 0.45)",
  },
  transition: "all 0.3s ease",
}));

export default function CTA() {
  return (
    <section className="bg-black py-20 px-6 text-center">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
          Ready to Manage Your Library?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Start organizing books, users, and borrowing records with a
          secure and modern library management system.
        </p>

        {/* Button */}
        <CTAButton endIcon={<ArrowForward />}>
          Create Account
        </CTAButton>

      </div>
    </section>
  );
}
