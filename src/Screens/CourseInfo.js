import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Supabase } from "../config/supabase-config";
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdDataset } from "react-icons/md";
import { TbTopologyComplex } from "react-icons/tb";
import { FaIndustry } from "react-icons/fa";
import { MdDiversity2 } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";

import Header from "../Components/Header";

const CourseInfo = () => {
  const { id } = useParams(); 
  const [dataset, setDataset] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataset = async () => {
      try {
        setLoading(true);

        const { data, error } = await Supabase.from("messy-dataset")
          .select("id, title, description, category, price, image_path, downloads, created_at, number_of_variables, number_of_data_points, data_format, key_focus_area, complexity_level, data_source_type, file2_path")
          .eq("id", id)
          .single();

        if (error) throw error;

        const imageUrl = Supabase.storage
          .from("dataFiles")
          .getPublicUrl(data.image_path).data.publicUrl;

        const file2Url = Supabase.storage
          .from("dataFiles")
          .getPublicUrl(data.file2_path).data.publicUrl;

        setDataset({ ...data, imageUrl, file2Url });
      } catch (err) {
        console.error("Error fetching dataset:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataset();
  }, [id]);

  const handleDownloadDescription = () => {
    if (dataset?.file2Url) {
      window.open(dataset.file2Url, "_blank");
    }
  };

  if (loading) {
    return <div>Loading course info...</div>;
  }

  if (!dataset) {
    return <div>Dataset not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="course-info">
        <div className="abs-cart">
          <img src={dataset.imageUrl} alt={dataset.title} />
          <div>
            <h3>${dataset.price}</h3>
            <button>Download now</button>

            <h4>This course includes:</h4>
            <p>
              <MdDataset className="c-i" />
              <span>Practice-oriented Dataset</span>
            </p>

            <p>
              <TbTopologyComplex className="c-i" />
              <span>Balanced complexity</span>
            </p>

            <p>
              <FaIndustry className="c-i" />
              <span>100% relevant to industry</span>
            </p>

            <p>
              <MdDiversity2 className="c-i" />
              <span>Diversity of variables</span>
            </p>

            <p>
              <IoMdAnalytics className="c-i" />
              <span>Scalable for advanced analysis</span>
            </p>
          </div>
        </div>

        <div className="top">
          <div className="top-c">
            <div className="t-c">
              <h1>{dataset.title}</h1>
              <p>{dataset.description}</p>
              <h6>{dataset.category}</h6>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="b-cont">
            <div className="b-c">
              <h3>Data quality</h3>
              <div>
                <IoCheckmarkOutline className="w-i" />
                <span>No. of variables: {dataset.number_of_variables}</span>
              </div>
              <div>
                <IoCheckmarkOutline className="w-i" />
                <span>No. of Data points: {dataset.number_of_data_points}</span>
              </div>
              <div>
                <IoCheckmarkOutline className="w-i" />
                <span>Data format: {dataset.data_format}</span>
              </div>
              <div>
                <IoCheckmarkOutline className="w-i" />
                <span>Key focus area: {dataset.key_focus_area}</span>
              </div>
              <div>
                <IoCheckmarkOutline className="w-i" />
                <span>Complexity level: {dataset.complexity_level}</span>
              </div>
              <div>
                <IoCheckmarkOutline className="w-i" />
                <span>Data source type: {dataset.data_source_type}</span>
              </div>

              <button onClick={handleDownloadDescription}>Download Data Description</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
