"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import * as emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";

// ✅ Type-safe dynamic object for EmailJS
interface FormState {
  [key: string]: string;
}

const Footer: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_4rh64wn",
        "template_jiymaua",
        form,
        "cMHybI39GCiIn6H4q"
      );

      alert("Message sent successfully!");
      setForm({
        fullName: "",
        email: "",
        contact: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <footer className="w-full pt-20 relative overflow-hidden" id="contact">
      {/* Centered section */}
      <div className="relative flex flex-col items-center text-center z-10 px-4">
        <h1 className="text-white font-bold text-5xl md:text-[4rem] text-center lg:max-w-[45vw]">
          Want to hire me? <span className="text-purple">Get in touch</span>
        </h1>

        {/* 🔽 Contact Form Section */}
        <div className="w-full mt-10 max-w-xl  text-white p-6 rounded-xl shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <TextField
              label="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              InputProps={{
                style: {
                  color: "white",
                  borderColor: "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#a855f7",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ddd",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
              }}
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#a855f7",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ddd",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
              }}
            />

            <TextField
              label="Contact Number"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#a855f7",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ddd",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
              }}
            />

            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#a855f7",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ddd",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
              }}
            />

            <button
              type="submit"
              className="bg-white text-purple-700 cursor-pointer font-bold py-2 rounded hover:bg-gray-100 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom footer bar */}
      <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center px-4 gap-4">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex justify-center items-center"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "#0A0F19CC",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              <img
                src={info.img}
                alt={info.name || "icon"}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>

        <p className="md:text-lg text-sm text-white text-center">
          Copyright © 2025 Muhammad Anas Khan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
