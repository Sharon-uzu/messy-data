import React, { useState } from "react";
import { Supabase } from "../config/supabase-config";
import AdminSidebar from "../Components/AdminSidebar";

const UploadDataset = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    numberOfVariables: "",
    numberOfDataPoints: "",
    dataFormat: "",
    keyFocusArea: "",
    complexityLevel: "",
    dataSourceType: "",
    file1: null,
    file2: null,
    image: null, // New field for image upload
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, [name]: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const bucketName = "dataFiles"; // Replace with your bucket name
      const uploads = [];

      // Upload dataset files
      if (formData.file1) {
        const { data: file1Data, error: file1Error } = await Supabase.storage
          .from(bucketName)
          .upload(`file1/${Date.now()}_${formData.file1.name}`, formData.file1);

        if (file1Error) throw file1Error;
        uploads.push(file1Data.path);
      }

      if (formData.file2) {
        const { data: file2Data, error: file2Error } = await Supabase.storage
          .from(bucketName)
          .upload(`file2/${Date.now()}_${formData.file2.name}`, formData.file2);

        if (file2Error) throw file2Error;
        uploads.push(file2Data.path);
      }

      // Upload image file
      let imagePath = null;
      if (formData.image) {
        const { data: imageData, error: imageError } = await Supabase.storage
          .from(bucketName)
          .upload(`images/${Date.now()}_${formData.image.name}`, formData.image);

        if (imageError) throw imageError;
        imagePath = imageData.path;
      }

      // Insert data into Supabase table
      const { data, error } = await Supabase.from("messy-dataset").insert([
        {
          category: formData.category,
          title: formData.title,
          description: formData.description,
          price: formData.price,
          number_of_variables: formData.numberOfVariables,
          number_of_data_points: formData.numberOfDataPoints,
          data_format: formData.dataFormat,
          key_focus_area: formData.keyFocusArea,
          complexity_level: formData.complexityLevel,
          data_source_type: formData.dataSourceType,
          file1_path: uploads[0] || null,
          file2_path: uploads[1] || null,
          image_path: imagePath, // Save image path
        },
      ]);

      if (error) throw error;

      alert("Form submitted and files uploaded successfully!");
      setFormData({
        category: "",
        title: "",
        description: "",
        price: "",
        numberOfVariables: "",
        numberOfDataPoints: "",
        dataFormat: "",
        keyFocusArea: "",
        complexityLevel: "",
        dataSourceType: "",
        file1: null,
        file2: null,
        image: null,
      });
    } catch (err) {
      console.error("Error submitting form:", err.message);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="dash">
        <AdminSidebar />

        <div className="courses-overview">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="course-form">
              <h2>Upload DataSet</h2>

              <label>
                Category:
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Finance">Finance</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Politics">Politics</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Healthcare">Health</option>
                  <option value="Sports">Sports</option>
                  <option value="Education">Education</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Technology">Technology</option>
                  <option value="Retail">Retail</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Real Estate">Real Estate</option>
                </select>
              </label>

              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Price:
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Number of Variables:
                <input
                  type="number"
                  name="numberOfVariables"
                  value={formData.numberOfVariables}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Number of Data Points:
                <input
                  type="number"
                  name="numberOfDataPoints"
                  value={formData.numberOfDataPoints}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Data Format:
                <select
                  name="dataFormat"
                  value={formData.dataFormat}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Data Format</option>
                  <option value="CSV">CSV</option>
                  <option value="JSON">JSON</option>
                  <option value="Excel">Excel</option>
                  
                </select>
              </label>

              <label>
                Key Focus Area:
                <select
                  name="keyFocusArea"
                  value={formData.keyFocusArea}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Focus Area</option>
                  <option value="Visualization">Visualization</option>
                  <option value="Predict modelling">Predict modelling</option>
                  <option value="EDA">EDA</option>
                  <option value="Data Cleaning">Data Cleaning</option>
                </select>
              </label>

              <label>
                Complexity Level:
                <select
                  name="complexityLevel"
                  value={formData.complexityLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Complexity Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </label>

              <label>
                Data Source Type:
                <select
                  name="dataSourceType"
                  value={formData.dataSourceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Data Source Type</option>
                  <option value="Simulated Data">Simulated Data</option>
                  <option value="Real Data">Real Data</option>
                  
                </select>
              </label>

              <label>
                Upload Dataset File:
                <input type="file" name="file1" onChange={handleFileChange} />
              </label>

              <label>
                Upload Data description:
                <input type="file" name="file2" onChange={handleFileChange} />
              </label>

              <label>
                Upload Image:
                <input type="file" name="image" onChange={handleFileChange} />
              </label>

              <label>
                Description:
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDataset;
