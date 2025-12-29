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

  const [resources, setResources] = useState([]);
  const [resourcesLoading, setResourcesLoading] = useState(false);
  const [resourcesError, setResourcesError] = useState("");
  const [resourceDeletingId, setResourceDeletingId] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [isSavingResource, setIsSavingResource] = useState(false);
  const [resourceFormValues, setResourceFormValues] = useState({
    category: "white_paper",
    title: "",
    description: "",
    date: "",
    link: "",
    sortOrder: 0,
    isPublished: true,
  });

  const [mediaItems, setMediaItems] = useState([]);
  const [mediaLoading, setMediaLoading] = useState(false);
  const [mediaError, setMediaError] = useState("");
  const [mediaDeletingId, setMediaDeletingId] = useState(null);
  const [selectedMediaItem, setSelectedMediaItem] = useState(null);
  const [isSavingMedia, setIsSavingMedia] = useState(false);
  const [mediaFormValues, setMediaFormValues] = useState({
    date: "",
    source: "",
    title: "",
    description: "",
    link: "",
    sortOrder: 0,
    isPublished: true,
  });

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

  const fetchMediaItems = useCallback(async () => {
    setMediaLoading(true);
    setMediaError("");

    try {
      const response = await fetch("/api/media", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Unable to load media items. Please try again.");
      }

      const data = await response.json();
      setMediaItems(Array.isArray(data.items) ? data.items : []);
    } catch (error) {
      setMediaError(
        error.message || "Something went wrong while loading media items."
      );
    } finally {
      setMediaLoading(false);
    }
  }, []);

  const fetchResources = useCallback(async () => {
    setResourcesLoading(true);
    setResourcesError("");

    try {
      const response = await fetch("/api/resources", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Unable to load resources. Please try again.");
      }

      const data = await response.json();
      setResources(Array.isArray(data.resources) ? data.resources : []);
    } catch (error) {
      setResourcesError(
        error.message || "Something went wrong while loading resources."
      );
    } finally {
      setResourcesLoading(false);
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
      fetchResources();
      fetchMediaItems();
    }
  }, [isLoggedIn, fetchJobs, fetchBannerSettings, fetchMessages, fetchResources, fetchMediaItems]);

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

  const handleResourceInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    setResourceFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleMediaInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    setMediaFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCreateResource = async (event) => {
    event.preventDefault();
    setResourcesError("");

    if (!resourceFormValues.category || !resourceFormValues.title || !resourceFormValues.description) {
      setResourcesError("Please fill in category, title, and description before submitting.");
      return;
    }

    setIsSavingResource(true);

    try {
      const response = await fetch("/api/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...resourceFormValues,
          sortOrder: Number(resourceFormValues.sortOrder) || 0,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create resource. Please try again.");
      }

      await fetchResources();
      setResourceFormValues({
        category: "white_paper",
        title: "",
        description: "",
        date: "",
        link: "",
        sortOrder: 0,
        isPublished: true,
      });
    } catch (error) {
      setResourcesError(error.message || "Something went wrong while creating resource.");
    } finally {
      setIsSavingResource(false);
    }
  };

  const handleCreateMediaItem = async (event) => {
    event.preventDefault();
    setMediaError("");

    if (!mediaFormValues.date || !mediaFormValues.source || !mediaFormValues.title || !mediaFormValues.description) {
      setMediaError("Please fill in date, source, title, and description before submitting.");
      return;
    }

    setIsSavingMedia(true);

    try {
      const response = await fetch("/api/media", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...mediaFormValues,
          sortOrder: Number(mediaFormValues.sortOrder) || 0,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create media item. Please try again.");
      }

      await fetchMediaItems();
      setMediaFormValues({
        date: "",
        source: "",
        title: "",
        description: "",
        link: "",
        sortOrder: 0,
        isPublished: true,
      });
    } catch (error) {
      setMediaError(error.message || "Something went wrong while creating media item.");
    } finally {
      setIsSavingMedia(false);
    }
  };

  const handleDeleteMediaItem = async (id) => {
    setMediaError("");
    setMediaDeletingId(id);

    try {
      const response = await fetch(`/api/media/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete media item. Please try again.");
      }

      setMediaItems((prev) => prev.filter((item) => item._id !== id));
      if (selectedMediaItem?._id === id) {
        setSelectedMediaItem(null);
      }
    } catch (error) {
      setMediaError(error.message || "Something went wrong while deleting media item.");
    } finally {
      setMediaDeletingId(null);
    }
  };

  const handleUpdateSelectedMediaItem = async (event) => {
    event.preventDefault();
    if (!selectedMediaItem?._id) return;

    setMediaError("");
    setIsSavingMedia(true);

    try {
      const response = await fetch(`/api/media/${selectedMediaItem._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: selectedMediaItem.date,
          source: selectedMediaItem.source,
          title: selectedMediaItem.title,
          description: selectedMediaItem.description,
          link: selectedMediaItem.link,
          sortOrder: Number(selectedMediaItem.sortOrder) || 0,
          isPublished: !!selectedMediaItem.isPublished,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update media item. Please try again.");
      }

      const data = await response.json();
      if (data.item) {
        setMediaItems((prev) =>
          prev.map((item) => (item._id === data.item._id ? data.item : item))
        );
        setSelectedMediaItem(data.item);
      }
    } catch (error) {
      setMediaError(error.message || "Something went wrong while updating media item.");
    } finally {
      setIsSavingMedia(false);
    }
  };

  const handleDeleteResource = async (id) => {
    setResourcesError("");
    setResourceDeletingId(id);

    try {
      const response = await fetch(`/api/resources/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete resource. Please try again.");
      }

      setResources((prev) => prev.filter((resource) => resource._id !== id));
      if (selectedResource?._id === id) {
        setSelectedResource(null);
      }
    } catch (error) {
      setResourcesError(error.message || "Something went wrong while deleting resource.");
    } finally {
      setResourceDeletingId(null);
    }
  };

  const handleUpdateSelectedResource = async (event) => {
    event.preventDefault();
    if (!selectedResource?._id) return;

    setResourcesError("");
    setIsSavingResource(true);

    try {
      const response = await fetch(`/api/resources/${selectedResource._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: selectedResource.category,
          title: selectedResource.title,
          description: selectedResource.description,
          date: selectedResource.date,
          link: selectedResource.link,
          sortOrder: Number(selectedResource.sortOrder) || 0,
          isPublished: !!selectedResource.isPublished,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update resource. Please try again.");
      }

      const data = await response.json();
      if (data.resource) {
        setResources((prev) =>
          prev.map((resource) => (resource._id === data.resource._id ? data.resource : resource))
        );
        setSelectedResource(data.resource);
      }
    } catch (error) {
      setResourcesError(error.message || "Something went wrong while updating resource.");
    } finally {
      setIsSavingResource(false);
    }
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px] text-white">
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

              {jobsError ? (
                <p className="text-sm font-medium text-red-400">{jobsError}</p>
              ) : null}

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
                    placeholder="Senior Quantum Engineer"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formValues.experience}
                    onChange={handleInputChange}
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    required
                  >
                    <option value="">Select Experience</option>
                    <option value="0-2 years">0-2 years</option>
                    <option value="2-5 years">2-5 years</option>
                    <option value="5-8 years">5-8 years</option>
                    <option value="8+ years">8+ years</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Job Description Link
                </label>
                <input
                  type="url"
                  name="jdLink"
                  value={formValues.jdLink}
                  onChange={handleInputChange}
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  placeholder="https://..."
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
                  Job Openings
                </h2>
                <button
                  onClick={fetchJobs}
                  disabled={jobsLoading}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-[#CB3F24] hover:text-[#CB3F24] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {jobsLoading ? "Refreshing..." : "Refresh"}
                </button>
              </div>

              {jobsLoading ? (
                <p className="text-sm text-slate-300">Loading job openings...</p>
              ) : jobs.length === 0 ? (
                <p className="text-sm text-slate-300">
                  No job openings yet. Create one above to get started.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800">
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Title
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Experience
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Posted Date
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobs.map((job) => (
                        <tr
                          key={job._id}
                          className="border-b border-slate-800"
                        >
                          <td className="px-4 py-3 text-sm font-medium text-white">
                            {job.title}
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-300">
                            {job.experience}
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-300">
                            {formatPostedDate(job.createdAt)}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="inline-flex items-center gap-3">
                              <button
                                onClick={() => window.open(job.jdLink, '_blank')}
                                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-[#CB3F24] hover:text-[#CB3F24]"
                              >
                                View JD
                              </button>
                              <button
                                onClick={() => handleDeleteJob(job._id)}
                                disabled={deletingId === job._id}
                                className="inline-flex items-center justify-center rounded-lg border border-red-500/60 px-3 py-1 text-xs font-semibold text-red-300 transition hover:border-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                              >
                                {deletingId === job._id ? "Deleting..." : "Delete"}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <form
              onSubmit={handleCreateResource}
              className="space-y-6 rounded-2xl border border-slate-800 bg-[#101113] p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                Create New Resource
              </h2>

              {resourcesError ? (
                <p className="text-sm font-medium text-red-400">{resourcesError}</p>
              ) : null}

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Category
                  </label>
                  <select
                    name="category"
                    value={resourceFormValues.category}
                    onChange={handleResourceInputChange}
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    required
                  >
                    <option value="white_paper">White Papers</option>
                    <option value="solution_brief">Solution Briefs</option>
                    <option value="technical_note_data_sheet">Technical Notes & Data Sheets</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Display Date
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={resourceFormValues.date}
                    onChange={handleResourceInputChange}
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    placeholder="Oct 2024"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={resourceFormValues.title}
                  onChange={handleResourceInputChange}
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  placeholder="Magnetic-Aided Navigation in GPS-Denied Environments"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Description
                </label>
                <textarea
                  name="description"
                  value={resourceFormValues.description}
                  onChange={handleResourceInputChange}
                  rows={3}
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40 resize-none"
                  placeholder="Short description shown on the Resources page"
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Download / External Link
                  </label>
                  <input
                    type="url"
                    name="link"
                    value={resourceFormValues.link}
                    onChange={handleResourceInputChange}
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    placeholder="https://..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    name="sortOrder"
                    value={resourceFormValues.sortOrder}
                    onChange={handleResourceInputChange}
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="isPublished"
                  checked={resourceFormValues.isPublished}
                  onChange={handleResourceInputChange}
                  className="h-5 w-5 rounded border-slate-700 bg-[#111111] text-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                />
                <label className="text-sm font-medium text-slate-200 cursor-pointer">
                  Published
                </label>
              </div>

              <button
                type="submit"
                disabled={isSavingResource}
                className="inline-flex items-center justify-center rounded-lg bg-[#CB3F24] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#BE3B22] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSavingResource ? "Saving..." : "Create Resource"}
              </button>
            </form>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-[#101113] p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold text-white">
                  Resources
                </h2>
                <button
                  onClick={fetchResources}
                  disabled={resourcesLoading}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-[#CB3F24] hover:text-[#CB3F24] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {resourcesLoading ? "Refreshing..." : "Refresh"}
                </button>
              </div>

              {resourcesLoading ? (
                <p className="text-sm text-slate-300">Loading resources...</p>
              ) : resources.length === 0 ? (
                <p className="text-sm text-slate-300">
                  No resources yet. Create one above to get started.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800">
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Category
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Title
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Published
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {resources.map((resource) => (
                        <tr
                          key={resource._id}
                          className="border-b border-slate-800"
                        >
                          <td className="px-4 py-3 text-xs text-slate-300">
                            {resource.category}
                          </td>
                          <td
                            className="px-4 py-3 text-sm font-medium text-white cursor-pointer"
                            onClick={() => setSelectedResource(resource)}
                          >
                            {resource.title}
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-300">
                            {resource.isPublished ? "Yes" : "No"}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="inline-flex items-center gap-3">
                              <button
                                onClick={() => setSelectedResource(resource)}
                                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-[#CB3F24] hover:text-[#CB3F24]"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteResource(resource._id)}
                                disabled={resourceDeletingId === resource._id}
                                className="inline-flex items-center justify-center rounded-lg border border-red-500/60 px-3 py-2 text-xs font-semibold text-red-300 transition hover:border-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                              >
                                {resourceDeletingId === resource._id ? "Deleting..." : "Delete"}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <form
              onSubmit={handleCreateMediaItem}
              className="space-y-6 rounded-2xl border border-slate-800 bg-[#101113] p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                Create Media & Press Release
              </h2>

              {mediaError ? (
                <p className="text-sm font-medium text-red-400">{mediaError}</p>
              ) : null}

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Display Date
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={mediaFormValues.date}
                    onChange={handleMediaInputChange}
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    placeholder="Dec 2024"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Source
                  </label>
                  <input
                    type="text"
                    name="source"
                    value={mediaFormValues.source}
                    onChange={handleMediaInputChange}
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    placeholder="THE PRINT"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={mediaFormValues.title}
                  onChange={handleMediaInputChange}
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  placeholder="QuBeats Secures Defense Grant for Quantum Navigation Systems"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Description
                </label>
                <textarea
                  name="description"
                  value={mediaFormValues.description}
                  onChange={handleMediaInputChange}
                  rows={3}
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40 resize-none"
                  placeholder="Short description shown on the Resources page"
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Article Link
                  </label>
                  <input
                    type="url"
                    name="link"
                    value={mediaFormValues.link}
                    onChange={handleMediaInputChange}
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    placeholder="https://..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    name="sortOrder"
                    value={mediaFormValues.sortOrder}
                    onChange={handleMediaInputChange}
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="isPublished"
                  checked={mediaFormValues.isPublished}
                  onChange={handleMediaInputChange}
                  className="h-5 w-5 rounded border-slate-700 bg-[#111111] text-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                />
                <label className="text-sm font-medium text-slate-200 cursor-pointer">
                  Published
                </label>
              </div>

              <button
                type="submit"
                disabled={isSavingMedia}
                className="inline-flex items-center justify-center rounded-lg bg-[#CB3F24] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#BE3B22] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSavingMedia ? "Saving..." : "Create Media Item"}
              </button>
            </form>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-[#101113] p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold text-white">
                  Media & Press Releases
                </h2>
                <button
                  onClick={fetchMediaItems}
                  disabled={mediaLoading}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-[#CB3F24] hover:text-[#CB3F24] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {mediaLoading ? "Refreshing..." : "Refresh"}
                </button>
              </div>

              {mediaLoading ? (
                <p className="text-sm text-slate-300">Loading media items...</p>
              ) : mediaItems.length === 0 ? (
                <p className="text-sm text-slate-300">
                  No media items yet. Create one above to get started.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800">
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Date
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Source
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Title
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Published
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mediaItems.map((item) => (
                        <tr key={item._id} className="border-b border-slate-800">
                          <td className="px-4 py-3 text-xs text-slate-300">
                            {item.date}
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-300">
                            {item.source}
                          </td>
                          <td
                            className="px-4 py-3 text-sm font-medium text-white cursor-pointer"
                            onClick={() => setSelectedMediaItem(item)}
                          >
                            {item.title}
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-300">
                            {item.isPublished ? "Yes" : "No"}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="inline-flex items-center gap-3">
                              <button
                                onClick={() => setSelectedMediaItem(item)}
                                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-[#CB3F24] hover:text-[#CB3F24]"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteMediaItem(item._id)}
                                disabled={mediaDeletingId === item._id}
                                className="inline-flex items-center justify-center rounded-lg border border-red-500/60 px-3 py-2 text-xs font-semibold text-red-300 transition hover:border-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                              >
                                {mediaDeletingId === item._id ? "Deleting..." : "Delete"}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

      {selectedResource && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedResource(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl border border-slate-800 bg-[#101113] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">
                Edit Resource
              </h3>
              <button
                onClick={() => setSelectedResource(null)}
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

            <form onSubmit={handleUpdateSelectedResource} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Category
                  </label>
                  <select
                    value={selectedResource.category}
                    onChange={(event) =>
                      setSelectedResource((prev) => ({
                        ...prev,
                        category: event.target.value,
                      }))
                    }
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    required
                  >
                    <option value="white_paper">White Papers</option>
                    <option value="solution_brief">Solution Briefs</option>
                    <option value="technical_note_data_sheet">Technical Notes & Data Sheets</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Display Date
                  </label>
                  <input
                    type="text"
                    value={selectedResource.date || ""}
                    onChange={(event) =>
                      setSelectedResource((prev) => ({
                        ...prev,
                        date: event.target.value,
                      }))
                    }
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Title
                </label>
                <input
                  type="text"
                  value={selectedResource.title}
                  onChange={(event) =>
                    setSelectedResource((prev) => ({
                      ...prev,
                      title: event.target.value,
                    }))
                  }
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Description
                </label>
                <textarea
                  value={selectedResource.description}
                  onChange={(event) =>
                    setSelectedResource((prev) => ({
                      ...prev,
                      description: event.target.value,
                    }))
                  }
                  rows={4}
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40 resize-none"
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Download / External Link
                  </label>
                  <input
                    type="url"
                    value={selectedResource.link || ""}
                    onChange={(event) =>
                      setSelectedResource((prev) => ({
                        ...prev,
                        link: event.target.value,
                      }))
                    }
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    value={selectedResource.sortOrder ?? 0}
                    onChange={(event) =>
                      setSelectedResource((prev) => ({
                        ...prev,
                        sortOrder: event.target.value,
                      }))
                    }
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={!!selectedResource.isPublished}
                  onChange={(event) =>
                    setSelectedResource((prev) => ({
                      ...prev,
                      isPublished: event.target.checked,
                    }))
                  }
                  className="h-5 w-5 rounded border-slate-700 bg-[#111111] text-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                />
                <label className="text-sm font-medium text-slate-200 cursor-pointer">
                  Published
                </label>
              </div>

              <div className="flex flex-wrap justify-end gap-3">
                <button
                  type="button"
                  onClick={() => handleDeleteResource(selectedResource._id)}
                  disabled={resourceDeletingId === selectedResource._id}
                  className="inline-flex items-center justify-center rounded-lg border border-red-500/60 px-4 py-2 text-sm font-semibold text-red-300 transition hover:border-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {resourceDeletingId === selectedResource._id ? "Deleting..." : "Delete"}
                </button>
                <button
                  type="submit"
                  disabled={isSavingResource}
                  className="inline-flex items-center justify-center rounded-lg bg-[#CB3F24] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#BE3B22] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSavingResource ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedMediaItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedMediaItem(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl border border-slate-800 bg-[#101113] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">
                Edit Media Item
              </h3>
              <button
                onClick={() => setSelectedMediaItem(null)}
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

            <form onSubmit={handleUpdateSelectedMediaItem} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Display Date
                  </label>
                  <input
                    type="text"
                    value={selectedMediaItem.date}
                    onChange={(event) =>
                      setSelectedMediaItem((prev) => ({
                        ...prev,
                        date: event.target.value,
                      }))
                    }
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Source
                  </label>
                  <input
                    type="text"
                    value={selectedMediaItem.source}
                    onChange={(event) =>
                      setSelectedMediaItem((prev) => ({
                        ...prev,
                        source: event.target.value,
                      }))
                    }
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Title
                </label>
                <input
                  type="text"
                  value={selectedMediaItem.title}
                  onChange={(event) =>
                    setSelectedMediaItem((prev) => ({
                      ...prev,
                      title: event.target.value,
                    }))
                  }
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-200">
                  Description
                </label>
                <textarea
                  value={selectedMediaItem.description}
                  onChange={(event) =>
                    setSelectedMediaItem((prev) => ({
                      ...prev,
                      description: event.target.value,
                    }))
                  }
                  rows={4}
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40 resize-none"
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Article Link
                  </label>
                  <input
                    type="url"
                    value={selectedMediaItem.link || ""}
                    onChange={(event) =>
                      setSelectedMediaItem((prev) => ({
                        ...prev,
                        link: event.target.value,
                      }))
                    }
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    value={selectedMediaItem.sortOrder ?? 0}
                    onChange={(event) =>
                      setSelectedMediaItem((prev) => ({
                        ...prev,
                        sortOrder: event.target.value,
                      }))
                    }
                    className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={!!selectedMediaItem.isPublished}
                  onChange={(event) =>
                    setSelectedMediaItem((prev) => ({
                      ...prev,
                      isPublished: event.target.checked,
                    }))
                  }
                  className="h-5 w-5 rounded border-slate-700 bg-[#111111] text-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                />
                <label className="text-sm font-medium text-slate-200 cursor-pointer">
                  Published
                </label>
              </div>

              <div className="flex flex-wrap justify-end gap-3">
                <button
                  type="button"
                  onClick={() => handleDeleteMediaItem(selectedMediaItem._id)}
                  disabled={mediaDeletingId === selectedMediaItem._id}
                  className="inline-flex items-center justify-center rounded-lg border border-red-500/60 px-4 py-2 text-sm font-semibold text-red-300 transition hover:border-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {mediaDeletingId === selectedMediaItem._id ? "Deleting..." : "Delete"}
                </button>
                <button
                  type="submit"
                  disabled={isSavingMedia}
                  className="inline-flex items-center justify-center rounded-lg bg-[#CB3F24] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#BE3B22] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSavingMedia ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
