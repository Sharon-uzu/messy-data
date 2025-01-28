import React, { useEffect, useState } from "react";
import { Supabase } from "../config/supabase-config";
import { Link } from "react-router-dom";
import { HiCloudDownload } from "react-icons/hi";

const CoursesOverview = () => {
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);

  const calculateRelativeTime = (date) => {
    const now = new Date();
    const uploadedDate = new Date(date);
    const diffInSeconds = Math.floor((now - uploadedDate) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""}`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""}`;
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""}`;
    } else {
      const weeks = Math.floor(diffInSeconds / 604800);
      return `${weeks} week${weeks > 1 ? "s" : ""}`;
    }
  };

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        setLoading(true);

        const { data, error } = await Supabase.from("messy-dataset").select(
          "id, title, category, price, image_path, downloads, created_at"
        );

        if (error) throw error;

        setDatasets(data || []);
      } catch (err) {
        console.error("Error fetching datasets:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDatasets();
  }, []);

  if (loading) {
    return <div>Loading datasets...</div>;
  }

  return (
    <div>
      <div className="courses-overview" id="dataset">
        <div className="text">
          <h2>Popular Data Sets</h2>
          <p>
            Explore our curated datasets for various industries. These datasets
            are designed to help you with machine learning, data analysis, and
            more.
          </p>
        </div>

        {datasets.map((dataset) => (
          <div className="course" key={dataset.id}>
            <img
              src={`${Supabase.storage
                .from("dataFiles")
                .getPublicUrl(dataset.image_path).data.publicUrl}`}
              alt={dataset.title}
            />
            <div className="cont">
              <div>
                <p>{dataset.category}</p>
                <h3>{dataset.title}</h3>
                <div className="update">
                  <span>Uploaded {calculateRelativeTime(dataset.created_at)}</span>
                  <span>
                    <HiCloudDownload className="d-i" />
                    {dataset.downloads || 0}
                  </span>
                </div>
                <Link to={`/courseInfo/${dataset.id}`}>
                  <button>Read more</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesOverview;
