"use client";

import { useCallback, useEffect, useState } from "react";
import SectionWrapper from "@/components/common/SectionWrapper";

function formatPostedDate(dateString) {
  if (!dateString) return "Unknown";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "Unknown";

  return date.toLocaleString("en-US", {
    dateStyle: "medium",
  });
}

export default function JobOpeningsSection() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJobs = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/jobs", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Failed to load job openings. Please try again.");
      }

      const data = await response.json();
      setJobs(Array.isArray(data.jobs) ? data.jobs : []);
    } catch (err) {
      setError(err.message || "Something went wrong while loading jobs.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={fetchJobs}
          disabled={isLoading}
          className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-[#CB3F24] hover:text-[#CB3F24] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Refreshing..." : "Refresh"}
        </button>
        {error ? (
          <span className="text-sm font-medium text-red-400">{error}</span>
        ) : null}
      </div>

      {isLoading ? (
        <p className="text-sm text-slate-300">Loading job openings...</p>
      ) : jobs.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-700 bg-[#0C0D0F] p-6 text-sm text-slate-300">
          No current openings. Please check back later.
        </p>
      ) : (
        <div className="grid gap-4 sm:gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-[#0C0D0F] p-6 transition hover:border-[#CB3F24]/50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {job.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                  <span className="rounded-md border border-slate-700 px-2 py-1">
                    {job.experience}
                  </span>
                  <span className="rounded-md border border-slate-700 px-2 py-1">
                    Posted {formatPostedDate(job.createdAt)}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:flex-shrink-0">
                <a
                  href={job.jdLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-[#CB3F24]/60 px-4 py-2 text-sm font-semibold text-[#CB3F24] transition hover:border-[#CB3F24] hover:text-white min-w-[80px] text-center"
                >
                  View JD
                </a>
                <a
                  href={`mailto:contact@qubeats.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center justify-center rounded-lg bg-[#CB3F24] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#BE3B22] min-w-[80px] text-center"
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


