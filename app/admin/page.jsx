"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import SectionWrapper from "@/components/common/SectionWrapper";

const ADMIN_EMAIL = "admin@qubeats.com";
const ADMIN_PASSWORD = "pass1234";
const STORAGE_KEY = "qubeats:isAdminLoggedIn";

function formatPostedDate(dateString) {
  if (!dateString) return "Unknown";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "Unknown";

  return date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function AdminPage() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [jobsError, setJobsError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  // Messages state
  const [messages, setMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [messagesError, setMessagesError] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  const [formValues, setFormValues] = useState({
    title: "",
    experience: "",
    jdLink: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Banner settings state
  const [bannerSettings, setBannerSettings] = useState({
    isVisible: true,
    content: "We have recently raised a capital. Click on this to learn more.",
  });
  const [bannerLoading, setBannerLoading] = useState(false);
  const [bannerError, setBannerError] = useState("");
  const [isSavingBanner, setIsSavingBanner] = useState(false);

  useEffect(() => {
    const storedFlag = window.localStorage.getItem(STORAGE_KEY);
    if (storedFlag === "true") {
      setIsLoggedIn(true);
    }
    setIsInitialized(true);
  }, []);

  const fetchJobs = useCallback(async () => {
    setJobsLoading(true);
    setJobsError("");

    try {
      const response = await fetch("/api/jobs", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Unable to load jobs. Please try again.");
      }

      const data = await response.json();
      setJobs(Array.isArray(data.jobs) ? data.jobs : []);
    } catch (error) {
      setJobsError(error.message || "Something went wrong while loading jobs.");
    } finally {
      setJobsLoading(false);
    }
  }, []);

  const fetchBannerSettings = useCallback(async () => {
    setBannerLoading(true);
    setBannerError("");

    try {
      const response = await fetch("/api/banner", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Unable to load banner settings. Please try again.");
      }

      const data = await response.json();
      if (data.settings) {
        setBannerSettings({
          isVisible: data.settings.isVisible ?? true,
          content: data.settings.content || "We have recently raised a capital. Click on this to learn more.",
        });
      }
    } catch (error) {
      setBannerError(error.message || "Something went wrong while loading banner settings.");
    } finally {
      setBannerLoading(false);
    }
  }, []);

  const fetchMessages = useCallback(async () => {
    setMessagesLoading(true);
    setMessagesError("");

    try {
      const response = await fetch("/api/messages", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Unable to load messages. Please try again.");
      }

      const data = await response.json();
      setMessages(Array.isArray(data.messages) ? data.messages : []);
    } catch (error) {
      setMessagesError(error.message || "Something went wrong while loading messages.");
    } finally {
      setMessagesLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchJobs();
      fetchBannerSettings();
      fetchMessages();
    }
  }, [isLoggedIn, fetchJobs, fetchBannerSettings, fetchMessages]);

  const handleLogin = (event) => {
    event.preventDefault();
    setAuthError("");

    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, "true");
      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
    } else {
      setAuthError("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setIsLoggedIn(false);
    setJobs([]);
    setJobsError("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateJob = async (event) => {
    event.preventDefault();
    setJobsError("");

    if (!formValues.title || !formValues.experience || !formValues.jdLink) {
      setJobsError("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Failed to create job. Please try again.");
      }

      await fetchJobs();
      setFormValues({ title: "", experience: "", jdLink: "" });
    } catch (error) {
      setJobsError(error.message || "Something went wrong while creating job.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteJob = async (id) => {
    setJobsError("");
    setDeletingId(id);

    try {
      const response = await fetch(`/api/jobs?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete job. Please try again.");
      }

      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (error) {
      setJobsError(error.message || "Something went wrong while deleting job.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleBannerVisibilityChange = (event) => {
    setBannerSettings((prev) => ({
      ...prev,
      isVisible: event.target.checked,
    }));
  };

  const handleBannerContentChange = (event) => {
    setBannerSettings((prev) => ({
      ...prev,
      content: event.target.value,
    }));
  };

  const handleSaveBanner = async (event) => {
    event.preventDefault();
    setBannerError("");
    setIsSavingBanner(true);

    try {
      const response = await fetch("/api/banner", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bannerSettings),
      });

      if (!response.ok) {
        throw new Error("Failed to save banner settings. Please try again.");
      }

      // Show success message or refresh
      await fetchBannerSettings();
    } catch (error) {
      setBannerError(error.message || "Something went wrong while saving banner settings.");
    } finally {
      setIsSavingBanner(false);
    }
  };

  const currentState = useMemo(() => {
    if (!isInitialized) {
      return "initializing";
    }

    return isLoggedIn ? "dashboard" : "login";
  }, [isInitialized, isLoggedIn]);

  if (currentState === "initializing") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[rgba(7,7,7,1)] text-white">
        <p className="text-sm text-slate-300">Preparing admin dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgba(7,7,7,1)] text-white">
      <SectionWrapper
        id="admin-dashboard"
        className="pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16"
      >
        {currentState === "login" ? (
          <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-800 bg-[rgba(15,15,17,0.95)] p-8 shadow-xl backdrop-blur">
            <h1 className="text-2xl font-semibold text-white">Admin Login</h1>
            <p className="mt-2 text-sm text-slate-400">
              Enter the credentials to access the admin panel.
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  placeholder="admin@qubeats.com"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  placeholder="Enter password"
                  required
                />
              </div>
              {authError ? (
                <p className="text-sm font-medium text-red-400">{authError}</p>
              ) : null}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#CB3F24] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#BE3B22] focus:outline-none focus:ring-2 focus:ring-[#CB3F24]/60"
              >
                Log In
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-8 rounded-3xl border border-slate-800 bg-[rgba(15,15,17,0.9)] p-6 sm:p-8 shadow-2xl backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-white">
                  Admin Dashboard
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  Manage job openings, contact messages, and keep the site up to date.
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="self-start rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-red-500 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/60"
              >
                Log Out
              </button>
            </div>

            {/* Banner Settings Section */}
            <form
              onSubmit={handleSaveBanner}
              className="space-y-6 rounded-2xl border border-slate-800 bg-[#101113] p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                Announcement Banner Settings
              </h2>
              
              {bannerError ? (
                <p className="text-sm font-medium text-red-400">{bannerError}</p>
              ) : null}

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="bannerVisibility"
                  checked={bannerSettings.isVisible}
                  onChange={handleBannerVisibilityChange}
                  className="h-5 w-5 rounded border-slate-700 bg-[#111111] text-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                />
                <label
                  htmlFor="bannerVisibility"
                  className="text-sm font-medium text-slate-200 cursor-pointer"
                >
                  Show announcement banner
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Banner Content
                </label>
                <textarea
                  value={bannerSettings.content}
                  onChange={handleBannerContentChange}
                  rows={3}
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40 resize-none"
                  placeholder="Enter banner content..."
                  required
                />
                <p className="text-xs text-slate-400">
                  This text will scroll from right to left in the announcement banner.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSavingBanner || bannerLoading}
                className="inline-flex items-center justify-center rounded-lg bg-[#CB3F24] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#BE3B22] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSavingBanner ? "Saving..." : "Save Banner Settings"}
              </button>
            </form>

            <form
              onSubmit={handleCreateJob}
              className="space-y-6 rounded-2xl border border-slate-800 bg-[#101113] p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                Create New Job
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formValues.title}
                    onChange={handleInputChange}
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    placeholder="Quantum Sensing Engineer"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formValues.experience}
                    onChange={handleInputChange}
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    placeholder="2-4 years"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  JD Link
                </label>
                <input
                  type="url"
                  name="jdLink"
                  value={formValues.jdLink}
                  onChange={handleInputChange}
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  placeholder="https://drive.google.com/..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-lg bg-[#CB3F24] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#BE3B22] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Creating..." : "Create Job"}
              </button>
            </form>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-[#101113] p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold text-white">
                  Current Job Openings
                </h2>
                <button
                  onClick={fetchJobs}
                  disabled={jobsLoading}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-[#CB3F24] hover:text-[#CB3F24] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {jobsLoading ? "Refreshing..." : "Refresh"}
                </button>
              </div>

              {jobsError ? (
                <p className="text-sm font-medium text-red-400">{jobsError}</p>
              ) : null}

              {jobsLoading ? (
                <p className="text-sm text-slate-300">
                  Loading job postings...
                </p>
              ) : jobs.length === 0 ? (
                <p className="text-sm text-slate-300">
                  No job postings yet. Create a new job to get started.
                </p>
              ) : (
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <div
                      key={job._id}
                      className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-[#0C0D0F] p-5 transition hover:border-[#CB3F24]/50 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {job.title}
                        </h3>
                        <div className="mt-1 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                          <span className="rounded-md border border-slate-700 px-2 py-1">
                            {job.experience}
                          </span>
                          <span className="rounded-md border border-slate-700 px-2 py-1">
                            Posted {formatPostedDate(job.createdAt)}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={job.jdLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-lg border border-[#CB3F24]/60 px-4 py-2 text-sm font-semibold text-[#CB3F24] transition hover:border-[#CB3F24] hover:text-white"
                        >
                          View JD
                        </a>
                        <button
                          onClick={() => handleDeleteJob(job._id)}
                          disabled={deletingId === job._id}
                          className="inline-flex items-center justify-center rounded-lg border border-red-500/60 px-4 py-2 text-sm font-semibold text-red-300 transition hover:border-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {deletingId === job._id ? "Deleting..." : "Delete"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Messages Section */}
            <div className="space-y-4 rounded-2xl border border-slate-800 bg-[#101113] p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold text-white">
                  Contact Messages
                </h2>
                <button
                  onClick={fetchMessages}
                  disabled={messagesLoading}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-[#CB3F24] hover:text-[#CB3F24] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {messagesLoading ? "Refreshing..." : "Refresh"}
                </button>
              </div>

              {messagesError ? (
                <p className="text-sm font-medium text-red-400">{messagesError}</p>
              ) : null}

              {messagesLoading ? (
                <p className="text-sm text-slate-300">
                  Loading messages...
                </p>
              ) : messages.length === 0 ? (
                <p className="text-sm text-slate-300">
                  No messages yet.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800">
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Subject
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Date
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Preview
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((message) => (
                        <tr
                          key={message._id}
                          onClick={() => setSelectedMessage(message)}
                          className="cursor-pointer border-b border-slate-800 transition hover:bg-slate-900/50"
                        >
                          <td className="px-4 py-3 text-sm font-medium text-white">
                            {message.subject}
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-400">
                            {formatPostedDate(message.createdAt)}
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-400">
                            {message.message.length > 50
                              ? `${message.message.substring(0, 50)}...`
                              : message.message}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </SectionWrapper>

      {/* Message Detail Popup */}
      {selectedMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedMessage(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-[#101113] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">
                Message Details
              </h3>
              <button
                onClick={() => setSelectedMessage(null)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Subject
                </label>
                <p className="mt-1 text-sm text-white">{selectedMessage.subject}</p>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Date
                </label>
                <p className="mt-1 text-sm text-slate-300">
                  {formatPostedDate(selectedMessage.createdAt)}
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Message
                </label>
                <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-slate-200">
                  {selectedMessage.message}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedMessage(null)}
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-[#CB3F24] hover:text-[#CB3F24]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


