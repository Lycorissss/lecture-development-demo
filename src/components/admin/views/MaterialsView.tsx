"use client";

import React, { useState } from "react";

const INITIAL_MATERIALS = [
  { id: 1, title: "Introduction to User Interface Design", description: "This video covers the basics of UI design, focusing on layout, typography, and color theory.", type: "Video", fileName: "intro-video.mp4", dateAdded: "2024-05-10" },
  { id: 2, title: "Design System Fundamentals", description: "A comprehensive guide to building and maintaining a scalable design system for web applications.", type: "Document", fileName: "design-system.pdf", dateAdded: "2024-05-12" },
];

export function MaterialsView() {
  const [materials, setMaterials] = useState(INITIAL_MATERIALS);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  const [isMaterialModalOpen, setIsMaterialModalOpen] = useState(false);
  const [currentMaterial, setCurrentMaterial] = useState<{ id: number | null, title: string, description: string, type: string, fileName: string }>({ id: null, title: '', description: '', type: 'Video', fileName: '' });
  
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedDetailMaterial, setSelectedDetailMaterial] = useState<any>(null);

  const handleSaveMaterial = () => {
    if (!currentMaterial.title || !currentMaterial.fileName) return;
    
    if (currentMaterial.id) {
      setMaterials(materials.map(m => m.id === currentMaterial.id ? { ...m, title: currentMaterial.title, description: currentMaterial.description, type: currentMaterial.type, fileName: currentMaterial.fileName } : m));
    } else {
      const material = {
        id: Date.now(),
        title: currentMaterial.title,
        description: currentMaterial.description,
        type: currentMaterial.type,
        fileName: currentMaterial.fileName,
        dateAdded: new Date().toISOString().split('T')[0]
      };
      setMaterials([...materials, material]);
    }
    
    setCurrentMaterial({ id: null, title: '', description: '', type: 'Video', fileName: '' });
    setIsMaterialModalOpen(false);
  };

  const openAddMaterialModal = () => {
    setCurrentMaterial({ id: null, title: '', description: '', type: 'Video', fileName: '' });
    setIsMaterialModalOpen(true);
  };

  const openEditMaterialModal = (material: any) => {
    setCurrentMaterial({ id: material.id, title: material.title, description: material.description || '', type: material.type, fileName: material.fileName });
    setIsMaterialModalOpen(true);
  };

  const openMaterialDetailModal = (material: any) => {
    setSelectedDetailMaterial(material);
    setIsDetailModalOpen(true);
  };

  const handleDeleteMaterial = (id: number) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          material.fileName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = typeFilter === "All" || material.type === typeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "24px", margin: 0, fontFamily: "Instrument Serif" }}>Course Materials</h2>
          <button 
            onClick={openAddMaterialModal}
            style={{ padding: "8px 16px", background: "#0D0F12", color: "#fff", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
          >
            + Add Material
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <input 
              type="text"
              placeholder="Search materials by title or filename..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "100%", padding: "10px 16px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "14px", boxSizing: "border-box" }}
            />
          </div>
          <select 
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            style={{ padding: "10px 16px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "14px", background: "#fff", minWidth: "150px" }}
          >
            <option value="All">All Types</option>
            <option value="Video">Video</option>
            <option value="Document">Document</option>
            <option value="Link">Link</option>
          </select>
        </div>

        <div className="table-responsive" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #E5E7EB", color: "#6B6F7A", fontSize: "14px", textAlign: "left" }}>
                <th style={{ padding: "12px 0", fontWeight: 500 }}>Title</th>
                <th style={{ padding: "12px 0", fontWeight: 500 }}>Type</th>
                <th style={{ padding: "12px 0", fontWeight: 500 }}>File</th>
                <th style={{ padding: "12px 0", fontWeight: 500 }}>Date Added</th>
                <th style={{ padding: "12px 0", fontWeight: 500, textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMaterials.map(material => (
                <tr key={material.id} style={{ borderBottom: "1px solid #F3F4F6", fontSize: "15px" }}>
                  <td style={{ padding: "16px 0", fontWeight: 500 }}>{material.title}</td>
                  <td style={{ padding: "16px 0" }}>
                    <span style={{ 
                      padding: "4px 8px", 
                      borderRadius: "6px", 
                      fontSize: "12px", 
                      background: "#F3F4F6",
                      color: "#4B5563"
                    }}>
                      {material.type}
                    </span>
                  </td>
                  <td style={{ padding: "16px 0" }}>
                    <span style={{ color: "#0D0F12", fontWeight: 500 }}>{material.fileName}</span>
                  </td>
                  <td style={{ padding: "16px 0", color: "#6B6F7A" }}>{material.dateAdded}</td>
                  <td style={{ padding: "16px 0", textAlign: "right" }}>
                    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                      <button 
                        onClick={() => openMaterialDetailModal(material)}
                        style={{ padding: "6px 12px", background: "#fff", border: "1px solid #E5E7EB", color: "#0D0F12", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: 500 }}
                      >
                        Detail
                      </button>
                      <button 
                        onClick={() => openEditMaterialModal(material)}
                        style={{ padding: "6px 12px", background: "#fff", border: "1px solid #E5E7EB", color: "#0D0F12", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: 500 }}
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteMaterial(material.id)}
                        style={{ padding: "6px 12px", background: "#fff", border: "1px solid #DC2626", color: "#DC2626", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: 500 }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredMaterials.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: "24px 0", textAlign: "center", color: "#6B6F7A" }}>No materials found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Material Add/Edit Modal */}
      {isMaterialModalOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div style={{ background: "#fff", padding: "32px", borderRadius: "16px", width: "100%", maxWidth: "500px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h3 style={{ fontSize: "20px", margin: 0, fontFamily: "Instrument Serif" }}>{currentMaterial.id ? 'Edit Material' : 'Add New Material'}</h3>
              <button onClick={() => setIsMaterialModalOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#6B6F7A", padding: 0, lineHeight: 1 }}>&times;</button>
            </div>
            
            <div style={{ display: "grid", gap: "16px", marginBottom: "32px" }}>
              <div>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "6px", color: "#6B6F7A" }}>Title</label>
                <input 
                  type="text" 
                  value={currentMaterial.title}
                  onChange={(e) => setCurrentMaterial({...currentMaterial, title: e.target.value})}
                  style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #E5E7EB", boxSizing: "border-box" }}
                  placeholder="e.g. Intro to UI/UX"
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "6px", color: "#6B6F7A" }}>Description</label>
                <textarea 
                  value={currentMaterial.description}
                  onChange={(e) => setCurrentMaterial({...currentMaterial, description: e.target.value})}
                  style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #E5E7EB", boxSizing: "border-box", minHeight: "80px", resize: "vertical", fontFamily: "inherit" }}
                  placeholder="Material description..."
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "6px", color: "#6B6F7A" }}>Type</label>
                <select 
                  value={currentMaterial.type}
                  onChange={(e) => setCurrentMaterial({...currentMaterial, type: e.target.value})}
                  style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #E5E7EB", boxSizing: "border-box", backgroundColor: "#fff" }}
                >
                  <option value="Video">Video</option>
                  <option value="Document">Document</option>
                  <option value="Link">Link</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "6px", color: "#6B6F7A" }}>Upload File</label>
                <div style={{ position: "relative" }}>
                  <input 
                    type="file" 
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setCurrentMaterial({...currentMaterial, fileName: e.target.files[0].name});
                      }
                    }}
                    style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px dashed #E5E7EB", boxSizing: "border-box", background: "#F9F9FA", cursor: "pointer" }}
                  />
                  {currentMaterial.fileName && (
                    <div style={{ marginTop: "8px", fontSize: "13px", color: "#1F8A5B", fontWeight: 500 }}>
                      Selected file: {currentMaterial.fileName}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
              <button 
                onClick={() => setIsMaterialModalOpen(false)}
                style={{ padding: "10px 20px", background: "#fff", color: "#0D0F12", border: "1px solid #E5E7EB", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveMaterial}
                style={{ padding: "10px 20px", background: "#1F8A5B", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
              >
                Save Material
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Material Detail Modal */}
      {isDetailModalOpen && selectedDetailMaterial && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div style={{ background: "#fff", padding: "32px", borderRadius: "16px", width: "100%", maxWidth: "500px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
              <div>
                <h3 style={{ fontSize: "24px", margin: "0 0 8px 0", fontFamily: "Instrument Serif", color: "#0D0F12" }}>{selectedDetailMaterial.title}</h3>
                <span style={{ padding: "4px 8px", borderRadius: "6px", fontSize: "12px", background: "#F3F4F6", color: "#4B5563", fontWeight: 500 }}>
                  {selectedDetailMaterial.type}
                </span>
              </div>
              <button onClick={() => setIsDetailModalOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#6B6F7A", padding: 0, lineHeight: 1 }}>&times;</button>
            </div>
            
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "14px", color: "#6B6F7A", margin: "0 0 8px 0", fontWeight: 500 }}>Description</h4>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.6", color: "#4B5563" }}>
                {selectedDetailMaterial.description || "No description provided."}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px", padding: "16px", background: "#F9F9FA", borderRadius: "8px", border: "1px solid #E5E7EB" }}>
              <div>
                <h4 style={{ fontSize: "12px", color: "#6B6F7A", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 600 }}>File Name</h4>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#0D0F12", wordBreak: "break-all" }}>{selectedDetailMaterial.fileName}</div>
              </div>
              <div>
                <h4 style={{ fontSize: "12px", color: "#6B6F7A", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 600 }}>Date Added</h4>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#0D0F12" }}>{selectedDetailMaterial.dateAdded}</div>
              </div>
            </div>
            
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button 
                onClick={() => setIsDetailModalOpen(false)}
                style={{ padding: "10px 24px", background: "#0D0F12", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
